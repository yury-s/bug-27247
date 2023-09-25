import { test as setup } from '@playwright/test';

setup('Authenticate with API', async () => {
  process.env.ADMIN_TOKEN = 'admin-token';
  process.env.USER_TOKEN = 'user-token';
});