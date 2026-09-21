const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  reporter: [
    ['list'],
    ['json', { outputFile: 'test-results/results.json' }]
  ],

  use: {
    baseURL: 'http://127.0.0.1:3000',
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure'
  },

  webServer: {
    command: 'npx http-server app -p 3000',
    url: 'http://127.0.0.1:3000',
    reuseExistingServer: true
  }
});
