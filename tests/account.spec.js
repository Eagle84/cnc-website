import { test, expect, withConfig } from './fixtures.js';

const X = '<img src=x onerror="window.__xss=1">';

// Tebex's Headless API, mocked: the basket bk1 is logged in as `username` once the login page sent the player back
async function mockTebex(page, { username = 'CypherCnC', complete = false, packages = [], calls = [] } = {}) {
  // Tebex's Cfx.re login page: the player logs in and is sent back to returnUrl
  await page.route('https://ident.tebex.io/**', (route) => route.fulfill({ status: 302, headers: { location: new URL(route.request().url()).searchParams.get('back') } }));
  await page.route('https://headless.tebex.io/**', async (route) => {
    const req = route.request();
    const url = new URL(req.url());
    calls.push(`${req.method()} ${url.pathname}`);
    if (url.pathname.endsWith('/categories')) {
      return route.fulfill({ json: { data: [{ id: 1, name: 'VIP Membership', packages: [
        { id: 111, name: 'VIP Silver', total_price: 9.99, currency: 'USD', type: 'subscription', image: null, description: '<p>Silver</p>' },
      ] }] } });
    }
    if (req.method() === 'POST' && url.pathname.endsWith('/baskets')) {
      return route.fulfill({ json: { data: { ident: 'bk1', links: { checkout: 'https://checkout.tebex.io/checkout/bk1' } } } });
    }
    if (url.pathname.endsWith('/auth')) {
      return route.fulfill({ json: [{ name: 'FiveM', url: 'https://ident.tebex.io/login?back=' + encodeURIComponent(url.searchParams.get('returnUrl')) }] });
    }
    if (url.pathname.endsWith('/packages')) return route.fulfill({ json: { data: {} } });
    if (url.pathname.endsWith('/baskets/bk1')) {
      return route.fulfill({ json: { data: { ident: 'bk1', complete, username, username_id: 4242, packages,
        links: { checkout: 'http://127.0.0.1:8766/store/thanks.html' } } } });
    }
    return route.fulfill({ status: 404, json: {} });
  });
}

test('no Tebex token: no Sign in button', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#account button')).toHaveCount(0);
});

test('Sign in with Cfx.re: Tebex login, back on the same page, the name in the header, then Sign out', async ({ page }, info) => {
  await withConfig(page, { tebexToken: 'tok' });
  const calls = [];
  await mockTebex(page, { calls });
  await page.goto('/rules/');
  await page.getByRole('button', { name: 'Sign in with Cfx.re' }).click();
  await expect(page.locator('.account-btn.is-in')).toBeVisible();
  await expect(page).toHaveURL(/\/rules\/$/);
  if (info.project.name === 'desktop') await expect(page.locator('.account-name')).toHaveText('CypherCnC');
  expect(calls).toEqual(['POST /api/accounts/tok/baskets', 'GET /api/accounts/tok/baskets/bk1/auth', 'GET /api/accounts/tok/baskets/bk1']);
  await expect(page.locator('.toast')).toContainText('Signed in as CypherCnC');
  // still signed in on another page
  await page.goto('/notes/');
  await expect(page.locator('.account-btn.is-in')).toBeVisible();
  await page.locator('.account-btn').click();
  await expect(page.locator('.account-who')).toHaveText('Signed in with Cfx.re as CypherCnC');
  await page.getByRole('menuitem', { name: 'Sign out' }).click();
  await expect(page.getByRole('button', { name: 'Sign in with Cfx.re' })).toBeVisible();
  expect(await page.evaluate(() => localStorage.getItem('cnc-account'))).toBeNull();
});

test('a login that did not finish signs nobody in and says so', async ({ page }) => {
  await withConfig(page, { tebexToken: 'tok' });
  await mockTebex(page, { username: null });
  await page.goto('/');
  await page.getByRole('button', { name: 'Sign in with Cfx.re' }).click();
  await expect(page.locator('.toast')).toContainText('Sign in did not finish');
  await expect(page.getByRole('button', { name: 'Sign in with Cfx.re' })).toBeVisible();
});

test('a ?signin= link nobody started is ignored (no basket of someone else is taken)', async ({ page }) => {
  await withConfig(page, { tebexToken: 'tok' });
  const calls = [];
  await mockTebex(page, { calls });
  await page.goto('/?signin=bk1');
  await expect(page.getByRole('button', { name: 'Sign in with Cfx.re' })).toBeVisible();
  await expect(page).toHaveURL(/\/$/);
  expect(calls.filter((c) => c.includes('/baskets/bk1'))).toEqual([]);
});

test('a Cfx.re name is shown as text, never as HTML', async ({ page }) => {
  await withConfig(page, { tebexToken: 'tok' });
  await mockTebex(page, { username: 'Evil' + X });
  await page.goto('/');
  await page.getByRole('button', { name: 'Sign in with Cfx.re' }).click();
  await expect(page.locator('.account-btn.is-in')).toBeVisible();
  expect(await page.evaluate(() => window.__xss)).toBeUndefined();
  await page.locator('.account-btn').click();
  await expect(page.locator('.account-who')).toContainText('<img');
});

test('signed in: checkout uses that basket and goes straight to payment, no second login', async ({ page }) => {
  await withConfig(page, { tebexToken: 'tok' });
  const calls = [];
  await mockTebex(page, { calls });
  await page.goto('/store/');
  await page.getByRole('button', { name: 'Sign in with Cfx.re' }).click();
  await expect(page.locator('.account-btn.is-in')).toBeVisible();
  calls.length = 0;
  await page.getByRole('button', { name: 'Subscribe' }).click();
  await page.getByRole('button', { name: 'Checkout securely' }).click();
  await page.waitForURL('**/store/thanks.html');
  expect(calls).toEqual(['GET /api/accounts/tok/baskets/bk1', 'POST /api/baskets/bk1/packages', 'GET /api/accounts/tok/baskets/bk1']);
});

test('signed in with a basket already paid: checkout starts a new one with the login', async ({ page }) => {
  await withConfig(page, { tebexToken: 'tok' });
  await page.addInitScript(() => localStorage.setItem('cnc-account', JSON.stringify({ ident: 'bk1', username: 'CypherCnC', id: '4242' })));
  const calls = [];
  await mockTebex(page, { calls, complete: true });
  await page.goto('/store/');
  await page.getByRole('button', { name: 'Subscribe' }).click();
  await page.getByRole('button', { name: 'Checkout securely' }).click();
  await page.waitForURL('**/store/thanks.html');
  expect(calls.slice(1, 4)).toEqual(['GET /api/accounts/tok/baskets/bk1', 'POST /api/accounts/tok/baskets', 'GET /api/accounts/tok/baskets/bk1/auth']);
});

test('a package already in the signed-in basket is not added twice', async ({ page }) => {
  await withConfig(page, { tebexToken: 'tok' });
  await page.addInitScript(() => localStorage.setItem('cnc-account', JSON.stringify({ ident: 'bk1', username: 'CypherCnC', id: '4242' })));
  const calls = [];
  await mockTebex(page, { calls, packages: [{ id: 111, name: 'VIP Silver' }] });
  await page.goto('/store/');
  await page.getByRole('button', { name: 'Subscribe' }).click();
  await page.getByRole('button', { name: 'Checkout securely' }).click();
  await page.waitForURL('**/store/thanks.html');
  expect(calls.filter((c) => c.includes('/packages'))).toEqual([]);
});
