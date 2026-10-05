// My purchases: the game server's list for the signed-in Cfx.re account (cy-store's /history). The page sends only the
// Tebex basket it signed in with; the server checks it with Tebex and answers with that account's purchases. Everything
// from the server is set as text.
import { CONFIG } from './config.js';
import { canSignIn, session, signIn, signOut, authBasket } from './account.js';

const $ = (id) => document.getElementById(id);
const el = (tag, cls, text) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text != null) e.textContent = String(text);
  return e;
};

const STATUS = {
  pending: ['Ready to claim in F5', 'is-ready'],
  claimed: ['Claimed', ''],
  active: ['On your account', 'is-on'],
  revoked: ['Refunded', 'is-off'],
};
const TIERS = { bronze: 'VIP Bronze', silver: 'VIP Silver', gold: 'VIP Gold' };

function box() { const b = $('mine'); b.textContent = ''; return b; }

function message(title, text, action) {
  const card = el('div', 'card mine-msg');
  card.append(el('h3', null, title), el('p', null, text));
  if (action) card.append(action);
  box().append(card);
}

function signInButton(label) {
  const b = el('button', 'btn btn-play', label);
  b.type = 'button';
  b.addEventListener('click', async () => {
    b.disabled = true;
    try { await signIn(); } catch { b.disabled = false; }
  });
  return b;
}

function render(data) {
  const b = box();
  const name = data.account && data.account.name;
  if (name) $('mine-who').textContent = `Signed in with Cfx.re as ${name}.`;
  const top = el('div', 'mine-top');
  const vip = el('div', 'card mine-stat');
  vip.append(el('div', 'eyebrow', 'VIP'));
  if (data.vip && TIERS[data.vip.tier]) {
    vip.classList.add('tier-' + data.vip.tier);
    vip.append(el('b', null, TIERS[data.vip.tier]), el('span', null, `until ${data.vip.expires}`));
  } else {
    vip.append(el('b', null, 'No VIP running'));
    const a = el('a', null, 'See the tiers');
    a.href = '../store/?cat=vip';
    vip.append(a);
  }
  top.append(vip);
  if (data.coins) {
    const coins = el('div', 'card mine-stat');
    coins.append(el('div', 'eyebrow', data.coins.name || 'CnCoins'),
      el('b', null, Number(data.coins.balance || 0).toLocaleString('en-US')), el('span', null, 'to spend in F5'));
    top.append(coins);
  }
  b.append(top);
  const list = Array.isArray(data.purchases) ? data.purchases : [];
  if (!list.length) {
    b.append(el('div', 'empty', 'Nothing yet. What you buy shows up here about a minute after you pay.'));
    return;
  }
  const rows = el('div', 'mine-list');
  for (const p of list) {
    const row = el('div', 'mine-row');
    const main = el('div', 'mine-main');
    main.append(el('div', 'mine-label', p.label), el('div', 'mine-when', p.created || ''));
    const s = STATUS[p.status] || [String(p.status || ''), ''];
    row.append(main, el('span', 'mine-chip ' + s[1], s[0]));
    rows.append(row);
  }
  b.append(rows);
}

async function load() {
  $('mine-receipts').href = CONFIG.tebexPaymentHistory;
  if (!CONFIG.historyApi || !canSignIn()) {
    message('Your purchases', 'Your receipts are on Tebex, and everything you bought is in game under F5 → My purchases.');
    return;
  }
  if (!session()) {
    message('Sign in to see your purchases', 'Sign in with the same Cfx.re account you play with.', signInButton('Sign in with Cfx.re'));
    return;
  }
  message('Loading…', 'Asking the city for your purchases.');
  let res;
  try {
    res = await fetch(`${CONFIG.historyApi}/history`, { method: 'POST', body: authBasket(), signal: AbortSignal.timeout(10000) });
  } catch {
    res = null;
  }
  if (res && res.status === 401) {
    const again = signInButton('Sign in again');
    again.addEventListener('click', () => signOut(), { capture: true });
    message('Sign in again', 'Your sign-in is too old for the city to check. Sign in once more.', again);
    return;
  }
  if (!res || !res.ok) {
    const retry = el('button', 'btn', 'Try again');
    retry.type = 'button';
    retry.addEventListener('click', load);
    message('The city did not answer', 'The game server may be restarting. Your purchases are safe; try again in a few minutes.', retry);
    return;
  }
  try { render(await res.json()); } catch { message('Something went wrong', 'The answer could not be read. Try again in a minute.'); }
}

document.addEventListener('cnc-account', load);
load();
