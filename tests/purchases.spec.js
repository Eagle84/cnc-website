import { test, expect, withConfig } from './fixtures.js';

const X = '<img src=x onerror="window.__xss=1">';
const API = 'https://cnc-server.tail0b6f50.ts.net/cy-store';
const SIGNED = { ident: 'bk1', auth: 'bk1', username: 'CypherCnC', id: '1001' };
const DATA = {
  account: { id: '1001', name: 'CypherCnC' },
  vip: { tier: 'gold', expires: '2026-11-06 10:00' },
  coins: { name: 'CnCoins', balance: 1250 },
  purchases: [
    { label: 'VIP Gold: $300,000 bank money', kind: 'money', status: 'pending', created: '2026-10-06 10:00' },
    { label: 'VIP Gold', kind: 'vip', status: 'active', created: '2026-10-06 10:00' },
    { label: 'Custom plate ' + X, kind: 'perk', status: 'claimed', created: '2026-10-05 09:00' },
    { label: 'VIP Bronze', kind: 'vip', status: 'revoked', created: '2026-10-01 09:00' },
  ],
};

async function signedIn(page, s = SIGNED) {
  await page.addInitScript((v) => localStorage.setItem('cnc-account', JSON.stringify(v)), s);
}
// the game server's /history: answer(body) -> { status, json } ; calls collects the bodies sent
async function server(page, answer, calls = []) {
  await page.route(`${API}/history`, async (route) => {
    const req = route.request();
    calls.push({ method: req.method(), body: req.postData() });
    const a = answer(req.postData());
    if (a === 'down') return route.abort('connectionrefused');
    return route.fulfill({ status: a.status, json: a.json, headers: { 'Access-Control-Allow-Origin': '*' } });
  });
}

test('signed out: asks to sign in with Cfx.re, and the receipts link is there', async ({ page }) => {
  await withConfig(page, { tebexToken: 'tok', historyApi: API });
  await page.goto('/account/');
  await expect(page.getByRole('heading', { name: 'Sign in to see your purchases' })).toBeVisible();
  await expect(page.locator('#mine .btn-play')).toHaveText('Sign in with Cfx.re');
  await expect(page.locator('#mine-receipts')).toHaveAttribute('href', 'https://checkout.tebex.io/payment-history');
});

test('signed in: the server gets only the sign-in basket, and the page shows VIP, coins and every purchase as text', async ({ page }) => {
  await withConfig(page, { tebexToken: 'tok', historyApi: API });
  await signedIn(page);
  const calls = [];
  await server(page, () => ({ status: 200, json: DATA }), calls);
  await page.goto('/account/');
  await expect(page.locator('.mine-row')).toHaveCount(4);
  expect(calls).toEqual([{ method: 'POST', body: 'bk1' }]);
  await expect(page.locator('#mine-who')).toHaveText('Signed in with Cfx.re as CypherCnC.');
  await expect(page.locator('.mine-stat.tier-gold b')).toHaveText('VIP Gold');
  await expect(page.locator('.mine-stat').nth(0)).toContainText('until 2026-11-06 10:00');
  await expect(page.locator('.mine-stat').nth(1)).toContainText('1,250');
  await expect(page.locator('.mine-chip').nth(0)).toHaveText('Ready to claim in F5');
  await expect(page.locator('.mine-chip').nth(1)).toHaveText('On your account');
  await expect(page.locator('.mine-chip').nth(3)).toHaveText('Refunded');
  await expect(page.locator('.mine-label').nth(2)).toContainText('<img');
  expect(await page.evaluate(() => window.__xss)).toBeUndefined();
});

test('after a checkout the sign-in still works: the basket it was made with is what is sent', async ({ page }) => {
  await withConfig(page, { tebexToken: 'tok', historyApi: API });
  await signedIn(page, { ident: '', auth: 'bk-first', username: 'CypherCnC', id: '1001' });
  const calls = [];
  await server(page, () => ({ status: 200, json: { ...DATA, purchases: [] } }), calls);
  await page.goto('/account/');
  await expect(page.locator('.empty')).toContainText('Nothing yet');
  expect(calls[0].body).toBe('bk-first');
});

test('a sign-in the server cannot check (401) asks to sign in again', async ({ page }) => {
  await withConfig(page, { tebexToken: 'tok', historyApi: API });
  await signedIn(page);
  await server(page, () => ({ status: 401, json: { error: 'signin' } }));
  await page.goto('/account/');
  await expect(page.getByRole('heading', { name: 'Sign in again' })).toBeVisible();
  await expect(page.locator('#mine .btn-play')).toHaveText('Sign in again');
});

test('the game server down: says so, and Try again asks again', async ({ page }) => {
  await withConfig(page, { tebexToken: 'tok', historyApi: API });
  await signedIn(page);
  let up = false;
  await server(page, () => (up ? { status: 200, json: DATA } : 'down'));
  await page.goto('/account/');
  await expect(page.getByRole('heading', { name: 'The city did not answer' })).toBeVisible();
  up = true;
  await page.getByRole('button', { name: 'Try again' }).click();
  await expect(page.locator('.mine-row')).toHaveCount(4);
});

test('no game server address set: only the receipts, nothing is asked', async ({ page }) => {
  await withConfig(page, { tebexToken: 'tok', historyApi: '' });
  await signedIn(page);
  const calls = [];
  await server(page, () => ({ status: 200, json: DATA }), calls);
  await page.goto('/account/');
  await expect(page.locator('#mine')).toContainText('Your receipts are on Tebex');
  expect(calls).toEqual([]);
});

test('the account menu leads to My purchases and to the Tebex receipts', async ({ page }) => {
  await withConfig(page, { tebexToken: 'tok' });
  await signedIn(page);
  await page.route('https://headless.tebex.io/**', (r) => r.fulfill({ json: { data: [] } }));
  await page.goto('/');
  await page.locator('.account-btn').click();
  await expect(page.getByRole('menuitem', { name: 'My purchases' })).toHaveAttribute('href', /account\/$/);
  await expect(page.getByRole('menuitem', { name: /Receipts \(Tebex\)/ })).toHaveAttribute('href', 'https://checkout.tebex.io/payment-history');
});
