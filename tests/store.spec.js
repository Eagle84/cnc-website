import { test, expect, withConfig } from './fixtures.js';

test.describe('store without a Tebex token (catalog.json)', () => {
  test('lists the three VIP tiers with prices, Silver highlighted', async ({ page }) => {
    await page.goto('/store/');
    const cards = page.locator('.product');
    await expect(cards).toHaveCount(3);
    await expect(cards.nth(0)).toContainText('$4.99');
    await expect(cards.nth(1)).toContainText('$9.99');
    await expect(cards.nth(2)).toContainText('$19.99');
    await expect(page.locator('.product.featured')).toContainText('VIP Silver');
  });

  test('?item= opens that item (the link the F5 Buy button opens)', async ({ page }) => {
    await page.goto('/store/?item=vip-gold');
    await expect(page.getByRole('dialog')).toContainText('VIP Gold');
    await expect(page.getByRole('dialog')).toContainText('First in the queue when the server is full');
    await expect(page.getByRole('dialog')).toContainText('$300,000 bank money every month');
  });

  test('the cart keeps items across a reload and a subscription only once', async ({ page }) => {
    await page.goto('/store/');
    await page.locator('.product').nth(1).getByRole('button', { name: 'Subscribe' }).click();
    await expect(page.locator('#cart-count')).toHaveText('1');
    await expect(page.locator('#cart-total')).toHaveText('$9.99');
    await page.locator('#cart-close').click();
    await page.locator('.product').nth(1).getByRole('button', { name: 'Subscribe' }).click();
    await expect(page.locator('#cart-count')).toHaveText('1');
    await page.reload();
    await expect(page.locator('#cart-count')).toHaveText('1');
    await page.locator('#cart-open').click();
    await page.getByRole('button', { name: 'Remove VIP Silver' }).click();
    await expect(page.locator('#cart-count')).toBeHidden();
    await expect(page.locator('#checkout')).toBeDisabled();
  });

  test('description HTML from the catalogue cannot run scripts', async ({ page }) => {
    await page.route('**/store/catalog.json', (route) => route.fulfill({ json: { categories: [{ slug: 'x', name: 'X', packages: [
      { id: 'evil', name: 'Evil', price: 1, currency: 'USD', description: '<p>ok</p><img src=x onerror="window.pwned=1"><script>window.pwned=2</script><a href="javascript:alert(1)">bad</a>' },
    ] }] } }));
    await page.goto('/store/?item=evil');
    await expect(page.getByRole('dialog')).toContainText('ok');
    expect(await page.evaluate(() => window.pwned)).toBeUndefined();
    await expect(page.locator('#item-dlg a', { hasText: 'bad' })).not.toHaveAttribute('href', /.+/);
    await expect(page.locator('#item-dlg img')).toHaveCount(0);
  });
});

test('checkout with Tebex: basket, then Cfx.re login, then packages, then payment', async ({ page }) => {
  const calls = [];
  await withConfig(page, { tebexToken: 'tok' });
  await page.route('https://headless.tebex.io/**', async (route) => {
    const req = route.request();
    const url = new URL(req.url());
    calls.push(`${req.method()} ${url.pathname}`);
    if (url.pathname.endsWith('/categories')) {
      return route.fulfill({ json: { data: [{ id: 1, name: 'VIP Membership', slug: 'vip', packages: [
        { id: 111, name: 'VIP Silver', total_price: 9.99, currency: 'USD', type: 'subscription', image: null, description: '<p>Silver</p>' },
      ] }] } });
    }
    if (req.method() === 'POST' && url.pathname.endsWith('/baskets')) {
      const body = req.postDataJSON();
      expect(body.complete_url).toMatch(/\/store\/thanks\.html$/);
      return route.fulfill({ json: { data: { ident: 'bk1', links: { checkout: 'https://checkout.tebex.io/checkout/bk1' } } } });
    }
    if (url.pathname.endsWith('/auth')) {
      expect(url.searchParams.get('returnUrl')).toMatch(/\/store\/\?basket=bk1$/);
      return route.fulfill({ json: [{ name: 'FiveM', url: 'http://127.0.0.1:8766/store/?basket=bk1' }] });
    }
    if (url.pathname.endsWith('/packages')) {
      expect(req.postDataJSON()).toEqual({ package_id: 111, quantity: 1, type: 'subscription' });
      return route.fulfill({ json: { data: {} } });
    }
    if (url.pathname.endsWith('/baskets/bk1')) return route.fulfill({ json: { data: { links: { checkout: 'http://127.0.0.1:8766/store/thanks.html' } } } });
    return route.fulfill({ status: 404, json: {} });
  });

  await page.goto('/store/');
  await page.getByRole('button', { name: 'Subscribe' }).click();
  await page.getByRole('button', { name: 'Checkout securely' }).click();
  await page.waitForURL('**/store/thanks.html');
  expect(calls).toEqual([
    'GET /api/accounts/tok/categories',
    'POST /api/accounts/tok/baskets',
    'GET /api/accounts/tok/baskets/bk1/auth',
    'GET /api/accounts/tok/categories',
    'POST /api/baskets/bk1/packages',
    'GET /api/accounts/tok/baskets/bk1',
  ]);
  expect(await page.evaluate(() => localStorage.getItem('cnc-cart'))).toBeNull();
});

test('a checkout that fails says so and keeps the cart', async ({ page }) => {
  await withConfig(page, { tebexToken: 'tok' });
  await page.route('https://headless.tebex.io/**', (route) => {
    if (route.request().url().includes('/categories')) {
      return route.fulfill({ json: { data: [{ id: 1, name: 'VIP', packages: [{ id: 5, name: 'VIP Bronze', total_price: 4.99, currency: 'USD', type: 'subscription' }] }] } });
    }
    return route.fulfill({ status: 500, json: { detail: 'Tebex is down' } });
  });
  await page.goto('/store/');
  await page.getByRole('button', { name: 'Subscribe' }).click();
  await page.getByRole('button', { name: 'Checkout securely' }).click();
  await expect(page.locator('#checkout-msg')).toContainText('Tebex is down');
  await expect(page.locator('#cart-count')).toHaveText('1');
});

test('live-shaped Tebex catalogue: ?cat=vip finds "VIP Membership", Silver featured, ?item= by package id', async ({ page }) => {
  await withConfig(page, { tebexToken: 'tok' });
  await page.route('https://headless.tebex.io/**', (route) => route.fulfill({ json: { data: [{ id: 1, name: 'VIP Membership', slug: null, packages: [
    { id: 7713971, name: 'VIP Bronze', total_price: 4.99, currency: 'USD', type: 'subscription', image: null, description: '<p>Bronze</p>' },
    { id: 7713966, name: 'VIP Silver', total_price: 9.99, currency: 'USD', type: 'subscription', image: null, description: '<p>Silver</p>' },
    { id: 7713973, name: 'VIP Gold', total_price: 19.99, currency: 'USD', type: 'subscription', image: null, description: '<p>Gold</p>' },
  ] }] } }));
  await page.goto('/store/?cat=vip');
  await expect(page.getByRole('tab', { name: 'VIP Membership' })).toHaveAttribute('aria-selected', 'true');
  await expect(page.locator('.product.featured')).toContainText('VIP Silver');
  await page.goto('/store/?item=7713973');
  await expect(page.locator('#item-dlg')).toContainText('VIP Gold');
});
