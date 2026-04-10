const { test, expect } = require('@playwright/test');

test('Contact Us form submission', async ({ page }) => {

  await page.goto('http://web.elaniin.dev/');

  await page.click('text=Contact Us');

  await page.fill('input[name="name"]', 'Giovanny Perez');
  await page.fill('input[name="email"]', `test${Date.now()}@mail.com`);
  await page.fill('input[name="subject"]', 'QA Test');
  await page.fill('textarea[name="message"]', 'Automated test message');

  await page.click('button[type="submit"]');

  await expect(page.locator('text=Thank you')).toBeVisible();
});