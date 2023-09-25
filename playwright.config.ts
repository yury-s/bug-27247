// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  projects: [
    {
      name: 'api-setup',
      testMatch: 'auth.setup.ts',
    },
    {
      name: 'api',
      dependencies: ['api-setup'],
    },
  ],
});