import { test, expect } from '@playwright/test';

test.describe('T-bank', () => {

  test('go to page', async ({ page }) => {
    // Открываем страницу и проверяем, что она есть
    await page.goto('https://www.tbank.ru/');
    await expect(page).toHaveURL('https://www.tbank.ru/);
    const accept = page.locator('button#onetrust-accept-btn-handler');
    await expect(accept).toBeVisible();
    await accept.click();
    await expect(accept).not.toBeVisible();


    debugger
  });
});

