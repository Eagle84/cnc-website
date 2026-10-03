import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'tests',
  fullyParallel: true,
  reporter: [['list']],
  use: { baseURL: 'http://127.0.0.1:8766', channel: process.env.CI ? undefined : 'chrome', trace: 'retain-on-failure' },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'], channel: process.env.CI ? undefined : 'chrome' } },
    { name: 'phone', use: { ...devices['Pixel 7'], channel: process.env.CI ? undefined : 'chrome' } },
  ],
  webServer: { command: 'node tests/serve.js 8766', url: 'http://127.0.0.1:8766/', reuseExistingServer: true },
});
