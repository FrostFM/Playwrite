import { test, expect } from '@playwright/test';

test.describe('T-bank', () => {
  test('Проверка главной страницы', async ({ page }) => {
    // Открываем страницу и проверяем, что она загружается
    const response = await page.goto('https://www.tbank.ru/');
    await expect(response?.status()).toBe(200);
    await expect(page).toHaveURL('https://www.tbank.ru/');

    // Проверка заголовка
    const heading = page.locator('[data-test="navigation"]');;
    await expect(heading).toBeVisible();

    // Проверка кноки "Главная" для последющей проверки кнопок из выпадающего меню
    const main = page.locator('[data-test="menu-item-0"]').filter({hasText:"Частным лицам"});
    await expect(main).toBeVisible();
    await main.hover();

    // Проверка пунктов основного меню (Кредитные карты)
    const creditcards = page.locator('[data-test="text-item-0-0-text"]').filter({hasText:"Кредитные карты"});
    await expect(creditcards).toBeVisible();

    // Проверка пунктов основного меню (Дебетовые карты)
    const debetcards = page.locator('[data-test="text-item-0-1-text"]').filter({hasText:"Дебетовые карты"});
    await expect(debetcards).toBeVisible();

    // Проверка пунктов основного меню (Дебетовые карты)
    const deposit = page.locator('[data-test="text-item-0-5-text"]').filter({hasText:"Вклады"});
    await expect(deposit).toBeVisible();

    debugger 
  });
});