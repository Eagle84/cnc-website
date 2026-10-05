// Every test starts from a known config (no join code, no Tebex token, no player count), whatever assets/js/config.js holds.
// A test changes it with: await withConfig(page, { joinCode: 'abc123' }). The newest route wins in Playwright.
import { test as base, expect } from '@playwright/test';

const DEFAULTS = { joinCode: '', tebexToken: '', playerCount: false, historyApi: '' };

export async function withConfig(page, overrides) {
  const values = { ...DEFAULTS, ...overrides };
  await page.route('**/assets/js/config.js', async (route) => {
    let body = await (await route.fetch()).text();
    for (const [key, value] of Object.entries(values)) {
      body = body.replace(new RegExp(`(\\b${key}: )(\\[[^\\]]*\\]|[^,\\n]+),`), `$1${JSON.stringify(value)},`);
    }
    await route.fulfill({ body, contentType: 'text/javascript' });
  });
}

export const test = base.extend({
  page: async ({ page }, use) => {
    await withConfig(page, {});
    await use(page);
  },
});
export { expect };
