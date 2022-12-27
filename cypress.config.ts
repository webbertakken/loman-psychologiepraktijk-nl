import { defineConfig } from 'cypress';

export default defineConfig({
  numTestsKeptInMemory: 250,
  env: {},
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) {
      on('before:browser:launch', (browser, launchOptions) => {
        const width = 1024;
        const height = 800;

        if (browser.name === 'chrome' && browser.isHeadless) {
          launchOptions.args.push(`--window-size=${width},${height}`);
          launchOptions.args.push('--force-device-scale-factor=1');
        }

        return launchOptions;
      });
    },
    baseUrl: 'http://localhost:3000',
  },
});
