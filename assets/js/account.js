// Sign in with Cfx.re: the same login Tebex asks for at checkout, done first. A Tebex basket is created and the player
// logs in on Tebex's Cfx.re page; back here, the basket says who they are (username). The basket is kept, so checkout
// later adds the cart to it and goes straight to payment. Nothing secret is kept: the basket id and the name only, in
// this browser.
import { CONFIG } from './config.js';

const API = 'https://headless.tebex.io/api';
const KEY = 'cnc-account';
const PENDING = 'cnc-signin';

const store = {
  get(key) { try { return JSON.parse(localStorage.getItem(key)); } catch { return null; } },
  set(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* this page only */ } },
  del(key) { try { localStorage.removeItem(key); } catch { /* nothing kept */ } },
};

export async function tebex(path, opts = {}) {
  const res = await fetch(`${API}${path}`, { ...opts, headers: { Accept: 'application/json', 'Content-Type': 'application/json', ...(opts.headers || {}) } });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) {
    const err = new Error(body.detail || body.message || `Tebex ${res.status}`);
    err.status = res.status;
    throw err;
  }
  return body;
}

export const canSignIn = () => Boolean(CONFIG.tebexToken);
export const session = () => {
  const s = store.get(KEY);
  return s && typeof s.username === 'string' && s.username ? s : null;
};

const pageUrl = () => { const u = new URL(location.href); u.searchParams.delete('signin'); u.hash = ''; return u.href; };
const storeUrl = (file = '') => new URL(`${document.documentElement.dataset.root || '.'}/store/${file}`, location.href).href;

// a new basket, then Tebex's Cfx.re login; back on returnUrl with ?signin=<basket>
export async function startLogin(returnUrl) {
  const { data: basket } = await tebex(`/accounts/${CONFIG.tebexToken}/baskets`, {
    method: 'POST',
    body: JSON.stringify({ complete_url: storeUrl('thanks.html'), cancel_url: storeUrl(), complete_auto_redirect: true }),
  });
  const back = new URL(returnUrl || pageUrl());
  back.searchParams.set('signin', basket.ident);
  const providers = await tebex(`/accounts/${CONFIG.tebexToken}/baskets/${basket.ident}/auth?returnUrl=${encodeURIComponent(back.href)}`);
  const list = Array.isArray(providers) ? providers : providers.data || [];
  const login = list.find((p) => /fivem|cfx/i.test(p.name)) || list[0];
  if (!login || !/^https:\/\//.test(login.url)) throw new Error('No Cfx.re login offered');
  return { ident: basket.ident, url: login.url };
}

export async function signIn() {
  const { ident, url } = await startLogin();
  store.set(PENDING, { ident });
  location.href = url;
}

// called on every page: finishes a sign-in that came back here (?signin=<basket>)
export async function finishSignIn() {
  const params = new URLSearchParams(location.search);
  const ident = params.get('signin');
  if (!ident) return null;
  params.delete('signin');
  history.replaceState(null, '', location.pathname + (params.toString() ? `?${params}` : '') + location.hash);
  const pending = store.get(PENDING);
  if (!pending || pending.ident !== ident || !canSignIn()) return null;
  store.del(PENDING);
  try {
    const { data } = await tebex(`/accounts/${CONFIG.tebexToken}/baskets/${ident}`);
    if (!data || !data.username) return { ok: false };
    const s = { ident, username: String(data.username).slice(0, 64), id: data.username_id ? String(data.username_id) : '' };
    store.set(KEY, s);
    return { ok: true, session: s };
  } catch {
    return { ok: false };
  }
}

export function signOut() { store.del(KEY); store.del(PENDING); }

// a basket that came back logged in from a checkout signs the player in too
export function remember(basket) {
  if (!basket || !basket.username || !basket.ident) return;
  store.set(KEY, { ident: basket.ident, username: String(basket.username).slice(0, 64), id: basket.username_id ? String(basket.username_id) : '' });
}

// the signed-in basket, if it can still take a cart: not paid yet and still logged in; otherwise null
export async function usableBasket() {
  const s = session();
  if (!s || !s.ident || !canSignIn()) return null;
  try {
    const { data } = await tebex(`/accounts/${CONFIG.tebexToken}/baskets/${s.ident}`);
    if (!data || data.complete || !data.username) { store.set(KEY, { ...s, ident: '' }); return null; }
    return data;
  } catch {
    store.set(KEY, { ...s, ident: '' });
    return null;
  }
}
