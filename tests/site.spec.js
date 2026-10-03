import { test, expect } from '@playwright/test';

const PAGES = ['/', '/store/', '/rules/', '/notes/', '/legal/', '/store/thanks.html'];

test.describe('every page', () => {
  for (const path of PAGES) {
    test(`${path} loads without errors and fits the screen`, async ({ page }) => {
      const errors = [];
      page.on('pageerror', (e) => errors.push(e.message));
      page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
      await page.goto(path);
      await expect(page.locator('.site-header')).toBeVisible();
      await expect(page.locator('.site-footer')).toContainText('Not affiliated with or endorsed by Rockstar Games');
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      expect(overflow).toBeLessThanOrEqual(0);
      expect(errors).toEqual([]);
    });
  }
});

test('the header marks the current page', async ({ page }, info) => {
  await page.goto('/rules/');
  if (info.project.name === 'phone') await page.getByRole('button', { name: 'Menu' }).click();
  await expect(page.locator('.nav a[aria-current="page"]')).toHaveText('Rules');
});

test('Play without a join code explains how to join instead of a dead link', async ({ page }) => {
  await page.goto('/');
  await page.locator('.site-header [data-play]').click();
  await expect(page.getByRole('dialog')).toContainText('Join from your PC');
  await expect(page.getByRole('dialog')).toContainText('FiveM');
});

test('Play with a join code opens FiveM on a PC and explains on a phone', async ({ page }, info) => {
  await page.route('**/assets/js/config.js', async (route) => {
    const body = (await (await route.fetch()).text()).replace("joinCode: ''", "joinCode: 'abc123'");
    route.fulfill({ body, contentType: 'text/javascript' });
  });
  await page.route('https://servers-frontend.fivem.net/**', (route) => route.fulfill({ json: { Data: { clients: 21, sv_maxclients: 36 } } }));
  await page.goto('/');
  const play = page.locator('.hero [data-play]');
  if (info.project.name === 'phone') {
    await play.click();
    await expect(page.getByRole('dialog').getByRole('textbox', { name: 'Join link' })).toHaveValue('https://cfx.re/join/abc123');
  } else {
    await expect(page.locator('#status')).toContainText('21/36');
    await play.dispatchEvent('click');
    await expect(play).toHaveAttribute('href', 'fivem://connect/cfx.re/join/abc123');
  }
});

test('home shows the three newest updates without owner-only lines', async ({ page }) => {
  await page.goto('/');
  const cards = page.locator('#latest .update');
  await expect(cards).toHaveCount(3);
  await expect(cards.first()).toContainText('BUILD');
  await expect(page.locator('#latest')).not.toContainText('Server owners');
});

test('release notes are English only for now: no language switch, ?lang= ignored', async ({ page }) => {
  await page.goto('/notes/?lang=he');
  await expect(page.locator('#notes .note').first()).toBeVisible();
  await expect(page.locator('.lang-switch')).toBeHidden();
  await expect(page.locator('#notes')).toHaveAttribute('lang', 'en');
  await expect(page.locator('#notes')).toHaveAttribute('dir', 'ltr');
  await expect(page.locator('#notes')).not.toContainText('בעלי שרת');
});

test('release notes turn on a language switch with right-to-left Hebrew when configured', async ({ page }) => {
  await page.route('**/assets/js/config.js', async (route) => {
    const body = (await (await route.fetch()).text()).replace("noteLanguages: ['en']", "noteLanguages: ['en', 'he', 'lt', 'ar']");
    route.fulfill({ body, contentType: 'text/javascript' });
  });
  await page.goto('/notes/');
  await page.getByRole('button', { name: 'עברית' }).click();
  await expect(page.locator('#notes')).toHaveAttribute('dir', 'rtl');
  await expect(page.locator('#notes')).not.toContainText('בעלי שרת');
});

test('release notes never show owner-only text', async ({ page }) => {
  await page.goto('/notes/');
  await expect(page.locator('#notes .note').first()).toBeVisible();
  while (await page.locator('.load-more').count()) await page.locator('.load-more').click();
  await expect(page.locator('#notes')).not.toContainText(/server owners/i);
  await expect(page.locator('#notes')).not.toContainText('discord_setup.bat');
});

test('release notes link straight to a build', async ({ page }) => {
  await page.goto('/notes/#b61');
  await expect(page.locator('#b61')).toBeInViewport();
});
