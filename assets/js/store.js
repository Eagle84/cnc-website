// Store: catalogue (Tebex Headless API, or store/catalog.json without a token), cart, and the Tebex checkout.
import { CONFIG } from './config.js';
import { esc, toast } from './site.js';
import { usableBasket, remember } from './account.js';

const API = 'https://headless.tebex.io/api';
const CART_KEY = 'cnc-cart';
const BASKET_KEY = 'cnc-basket';
const BADGES = { 'VIP Silver': 'MOST POPULAR', 'Kingpin Bundle': 'BEST VALUE', '4,800 CnCoins': 'MOST POPULAR', 'Starter Pack': 'ONCE PER ACCOUNT' };
// the order the categories show in, whatever order Tebex sends them: VIP, then bundles, then coins, then the rest
const ORDER = (s) => (/vip/.test(s) ? 0 : /bundle/.test(s) ? 1 : /coin/.test(s) ? 2 : 3);
const here = () => location.href.split(/[?#]/)[0];
const $ = (id) => document.getElementById(id);

let categories = [];
const byId = new Map();

// ------------------------------------------------------------------ storage (private windows can refuse it)
const store = {
  get(key, fallback) { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } },
  set(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* cart lasts this page only */ } },
  del(key) { try { localStorage.removeItem(key); } catch { /* nothing to remove */ } },
};

// ------------------------------------------------------------------ Tebex description HTML: keep simple formatting, drop the rest
const ALLOWED = new Set(['P', 'BR', 'UL', 'OL', 'LI', 'STRONG', 'B', 'EM', 'I', 'A', 'H3', 'H4', 'SPAN']);
export function cleanHtml(html) {
  const doc = new DOMParser().parseFromString(`<div>${html || ''}</div>`, 'text/html');
  const walk = (node) => {
    for (const el of [...node.children]) {
      walk(el);
      if (!ALLOWED.has(el.tagName)) { el.replaceWith(...el.childNodes); continue; }
      for (const attr of [...el.attributes]) {
        const keep = el.tagName === 'A' && attr.name === 'href' && /^https?:\/\//i.test(attr.value);
        if (!keep) el.removeAttribute(attr.name);
      }
      if (el.tagName === 'A') { el.setAttribute('target', '_blank'); el.setAttribute('rel', 'noopener'); }
    }
  };
  const root = doc.body.firstChild;
  walk(root);
  return root.innerHTML;
}

const money = (v, cur = 'USD') => new Intl.NumberFormat('en-US', { style: 'currency', currency: cur }).format(v);
const slug = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// ------------------------------------------------------------------ catalogue
async function tebex(path, opts = {}) {
  const res = await fetch(`${API}${path}`, { ...opts, headers: { Accept: 'application/json', 'Content-Type': 'application/json', ...(opts.headers || {}) } });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(body.detail || body.message || `Tebex ${res.status}`);
  return body;
}

async function loadCatalog() {
  if (CONFIG.tebexToken) {
    const { data } = await tebex(`/accounts/${CONFIG.tebexToken}/categories?includePackages=1`);
    return data.map((c) => ({
      slug: slug(c.slug || c.name), name: c.name,
      packages: (c.packages || []).map((p) => ({
        id: String(p.id), name: p.name, price: Number(p.total_price ?? p.base_price), currency: p.currency || 'USD',
        type: p.type, image: p.image, description: p.description, badge: BADGES[p.name],
      })),
    })).filter((c) => c.packages.length).sort((a, b) => ORDER(a.slug) - ORDER(b.slug));
  }
  const res = await fetch('catalog.json');
  return (await res.json()).categories;
}

function card(p) {
  const sub = p.type === 'subscription';
  return `
    <article class="card product${p.badge ? ' featured' : ''}"${p.badge ? ` aria-label="${esc(p.name)}, ${esc(p.badge.toLowerCase())}"` : ''}>
      <button class="media" data-open="${esc(p.id)}" aria-label="Details: ${esc(p.name)}">
        ${p.image ? `<img src="${esc(p.image)}" alt="" loading="lazy">` : ''}
      </button>
      <div class="body">
        <h3>${esc(p.name)}</h3>
        <div class="price">${money(p.price, p.currency)}${sub ? ' <small>/ month</small>' : ''}</div>
        <div class="actions">
          <button class="btn" data-open="${esc(p.id)}">Details</button>
          <button class="btn ${p.badge ? 'btn-play' : 'btn-police'}" data-add="${esc(p.id)}">${sub ? 'Subscribe' : 'Add to cart'}</button>
        </div>
      </div>
    </article>`;
}

function renderTabs(active) {
  $('tabs').innerHTML = categories.map((c) =>
    `<button role="tab" aria-selected="${c.slug === active}" data-cat="${esc(c.slug)}">${esc(c.name)}</button>`).join('')
    + (categories.length > 1 ? `<button role="tab" aria-selected="${active === 'all'}" data-cat="all">Everything</button>` : '');
}

function renderProducts(active) {
  const list = active === 'all' ? categories.flatMap((c) => c.packages) : (categories.find((c) => c.slug === active)?.packages || []);
  $('products').innerHTML = list.length ? list.map(card).join('') : '<div class="empty">Nothing here yet. Check back soon.</div>';
}

function show(active) {
  renderTabs(active);
  renderProducts(active);
  const url = new URL(location.href);
  url.searchParams.set('cat', active);
  url.searchParams.delete('item');
  history.replaceState(null, '', url);
}

// ------------------------------------------------------------------ item dialog
function openItem(id) {
  const p = byId.get(id);
  if (!p) return;
  const dlg = $('item-dlg');
  const sub = p.type === 'subscription';
  dlg.innerHTML = `
    <div class="dlg">
      <div class="media">${p.image ? `<img src="${esc(p.image)}" alt="">` : ''}</div>
      <div class="body">
        <button class="icon-btn close" aria-label="Close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button>
        ${p.badge ? `<span class="tag" style="align-self:flex-start;font:800 .68rem/1 var(--display);letter-spacing:.16em;padding:7px 10px;border-radius:999px;background:var(--brand-gradient)">${esc(p.badge)}</span>` : ''}
        <h2 id="item-title" style="margin:0">${esc(p.name)}</h2>
        <div class="price" style="font:800 1.8rem/1 var(--display)">${money(p.price, p.currency)}${sub ? ' <small style="font:500 .9rem var(--body);color:var(--muted)">/ month</small>' : ''}</div>
        <div class="desc">${cleanHtml(p.description)}</div>
        <button class="btn btn-play btn-lg" data-add="${esc(p.id)}" style="margin-top:auto">${sub ? 'Subscribe' : 'Add to cart'}</button>
        <p class="fine">Claim in game with F5 → My purchases.</p>
      </div>
    </div>`;
  dlg.querySelector('.close').addEventListener('click', () => dlg.close());
  dlg.showModal();
}

// ------------------------------------------------------------------ cart
const cart = () => store.get(CART_KEY, []).filter((l) => byId.has(l.id));
function setCart(lines) { store.set(CART_KEY, lines); renderCart(); }

function add(id) {
  const p = byId.get(id);
  if (!p) return;
  const lines = cart();
  const line = lines.find((l) => l.id === id);
  if (line && p.type === 'subscription') { toast(`${p.name} is already in your cart`); openCart(); return; }
  if (line) line.qty += 1; else lines.push({ id, qty: 1 });
  setCart(lines);
  toast(`${p.name} added`);
  $('item-dlg').open && $('item-dlg').close();
  openCart();
}

function renderCart() {
  const lines = cart();
  const count = lines.reduce((n, l) => n + l.qty, 0);
  $('cart-count').hidden = count === 0;
  $('cart-count').textContent = String(count);
  const cur = lines.length ? byId.get(lines[0].id).currency : 'USD';
  $('cart-total').textContent = money(lines.reduce((s, l) => s + byId.get(l.id).price * l.qty, 0), cur);
  $('checkout').disabled = !lines.length;
  $('cart-lines').innerHTML = lines.length ? lines.map((l) => {
    const p = byId.get(l.id);
    return `<div class="line">
      ${p.image ? `<img src="${esc(p.image)}" alt="">` : '<span></span>'}
      <div><div class="t">${esc(p.name)}${l.qty > 1 ? ` × ${l.qty}` : ''}</div><div class="p">${money(p.price * l.qty, p.currency)}${p.type === 'subscription' ? ' / month' : ''}</div></div>
      <button class="icon-btn" data-remove="${esc(l.id)}" aria-label="Remove ${esc(p.name)}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button>
    </div>`;
  }).join('') : '<p class="fine" style="padding:24px 0;text-align:center">Your cart is empty.</p>';
}

function openCart() { $('cart').classList.add('open'); $('scrim').classList.add('open'); $('cart').setAttribute('aria-hidden', 'false'); $('cart-close').focus(); }
function closeCart() { $('cart').classList.remove('open'); $('scrim').classList.remove('open'); $('cart').setAttribute('aria-hidden', 'true'); }

// ------------------------------------------------------------------ checkout: basket -> Cfx.re login -> packages -> Tebex checkout
function message(text) { const m = $('checkout-msg'); m.textContent = text; m.hidden = !text; if (text) m.scrollIntoView({ block: 'center' }); }

async function checkout() {
  const lines = cart();
  if (!lines.length) return;
  if (!CONFIG.tebexToken) { window.open(CONFIG.tebexStore, '_blank', 'noopener'); return; }
  const btn = $('checkout');
  btn.disabled = true; btn.textContent = 'Opening checkout…';
  try {
    // signed in with Cfx.re already: the cart goes into that basket and straight to payment
    const signed = await usableBasket();
    if (signed) { await pay(signed.ident, lines, signed.packages); return; }
    const { data: basket } = await tebex(`/accounts/${CONFIG.tebexToken}/baskets`, {
      method: 'POST',
      body: JSON.stringify({ complete_url: new URL('thanks.html', here()).href, cancel_url: here(), complete_auto_redirect: true }),
    });
    store.set(BASKET_KEY, { ident: basket.ident, lines });
    const providers = await tebex(`/accounts/${CONFIG.tebexToken}/baskets/${basket.ident}/auth?returnUrl=${encodeURIComponent(`${here()}?basket=${basket.ident}`)}`);
    const login = (Array.isArray(providers) ? providers : providers.data || []).find((p) => /fivem|cfx/i.test(p.name)) || (providers[0] ?? null);
    if (!login) throw new Error('No Cfx.re login offered');
    location.href = login.url;
  } catch (e) {
    btn.disabled = false; btn.textContent = 'Checkout securely';
    message(`Checkout could not start (${e.message}). Try again, or use the Tebex store directly.`);
  }
}

// the cart into a logged-in basket (what it holds already is not added twice), then Tebex's payment page
async function pay(ident, lines, have) {
  const already = new Set((Array.isArray(have) ? have : []).map((p) => String(p.id)));
  for (const l of lines) {
    if (already.has(String(l.id))) continue;
    const p = byId.get(l.id);
    await tebex(`/baskets/${ident}/packages`, {
      method: 'POST',
      body: JSON.stringify({ package_id: Number(l.id), quantity: l.qty, ...(p?.type === 'subscription' ? { type: 'subscription' } : {}) }),
    });
  }
  const { data } = await tebex(`/accounts/${CONFIG.tebexToken}/baskets/${ident}`);
  remember(data);
  store.del(BASKET_KEY);
  location.href = data.links.checkout;
}

async function finishCheckout(ident) {
  const saved = store.get(BASKET_KEY, null);
  if (!saved || saved.ident !== ident) { message('That checkout expired. Add your items again and press Checkout.'); return; }
  message('Logged in. Taking you to payment…');
  try {
    await pay(ident, saved.lines, []);
  } catch (e) {
    message(`Payment could not open (${e.message}). Your cart is still here: press Checkout to try again.`);
  }
}

// ------------------------------------------------------------------ start
document.addEventListener('click', (e) => {
  const t = e.target.closest('[data-open],[data-add],[data-remove],[data-cat]');
  if (!t) return;
  if (t.dataset.open) openItem(t.dataset.open);
  else if (t.dataset.add) add(t.dataset.add);
  else if (t.dataset.remove) setCart(cart().filter((l) => l.id !== t.dataset.remove));
  else if (t.dataset.cat) show(t.dataset.cat);
});
$('cart-open').addEventListener('click', openCart);
$('cart-close').addEventListener('click', closeCart);
$('scrim').addEventListener('click', closeCart);
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeCart(); });
$('checkout').addEventListener('click', checkout);
$('item-dlg').addEventListener('click', (e) => { if (e.target === $('item-dlg')) $('item-dlg').close(); });
$('tebex-history').href = CONFIG.tebexPaymentHistory;

try {
  categories = await loadCatalog();
  categories.forEach((c) => c.packages.forEach((p) => byId.set(p.id, p)));
  const params = new URLSearchParams(location.search);
  const item = params.get('item');
  const owner = item && categories.find((c) => c.packages.some((p) => p.id === item));
  const asked = params.get('cat');
  const want = owner?.slug || (asked && (categories.find((c) => c.slug === asked) || categories.find((c) => c.slug.startsWith(asked)))?.slug) || asked;
  show(categories.some((c) => c.slug === want) || want === 'all' ? want : categories[0]?.slug || 'all');
  renderCart();
  if (owner) openItem(item);
  if (params.get('basket')) finishCheckout(params.get('basket'));
} catch (e) {
  $('products').innerHTML = `<div class="empty">The store could not load (${esc(e.message)}). <a href="${esc(CONFIG.tebexStore)}" target="_blank" rel="noopener">Open the Tebex store</a> instead.</div>`;
}
