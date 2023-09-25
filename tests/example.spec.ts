import { test, expect } from '@playwright/test';

test('Test environment variable', async ({ request }) => {
  expect(process.env.USER_TOKEN).toBeTruthy(); // returns undefined locally, works in playwright docker image
  expect(process.env.ADMIN_TOKEN).toBeTruthy(); // returns undefined locally, works in playwright docker image
 // ... continues with an api request which uses those tokens in header
});