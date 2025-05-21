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

    // Проверка пунктов основного меню (Вклады)
    const deposit = page.locator('[data-test="text-item-0-5-text"]').filter({hasText:"Вклады"});
    await expect(deposit).toBeVisible();

    // Проверка пунктов основного меню (Кредиты и ипотека)
    const credit = page.locator('[data-test="text-item-0-2-text"]').filter({hasText:"Кредиты и ипотека"});
    await expect(credit).toBeVisible();

  });

  test('Проверка старницы дебетовых куарт', async ({ page }) => {
    // Открываем страницу и проверяем, что она загружается
    const response = await page.goto('https://www.tbank.ru/cards/debit-cards/');
    await expect(response?.status()).toBe(200);
    await expect(page).toHaveURL('https://www.tbank.ru/cards/debit-cards/');

    // Проверка первой предлагаемой карты
    const card = page.locator('[data-qa-type="uikit/screenTwinCols.withSidebar.content"]');
    await expect(card).toBeVisible();

    //Проверка отображения карты - Премиальная карта Black Premium
    const panel1 = page.locator('[data-guid="0758e31d-870d-4ce3-8668-77870d71a7ff"]');
    await expect(panel1).toBeVisible();
    const card1 = panel1.locator('[data-test="panel "]');
    await expect(card1).toBeVisible();

    //Проверка отображения карты - Десткая карта "Джуниор"
    const panel2 = page.locator('[data-guid="0865540d-fad0-4bd6-84bc-3c1b17b80b11"]');
    await expect(panel2).toBeVisible();
    const card2 = panel2.locator('[data-test="panel "]');
    await expect(card2).toBeVisible();

    //Проверка отображения карты - Исламская дебетовая карта
    const panel3 = page.locator('[data-guid="89ef60be-68d9-4c11-8250-c8ad8d7c1838"]');
    await expect(panel3).toBeVisible();
    const card3 = panel3.locator('[data-test="panel "]');
    await expect(card3).toBeVisible();

    //Проверка отображения карты - Дебетовая карта All Airlines
    const panel4 = page.locator('[data-guid="495834f5-6f4c-4b88-9036-5d694379d7f7"]');
    await expect(panel4).toBeVisible();
    const card4 = panel4.locator('[data-test="panel "]');
    await expect(card4).toBeVisible();
    
    //Проверка отображения карты - Премиальная All Airlines Premium
    const panel5 = page.locator('[data-guid="9ad728d0-4379-4eee-b286-1d8ba28ec683"]');
    await expect(panel5).toBeVisible();
    const card5 = panel5.locator('[data-test="panel "]');
    await expect(card5).toBeVisible();

    //Проверка отображения карты - Дебетовая карта Drive
    const panel6 = page.locator('[data-guid="0b36b27e-ee77-4829-9055-899b1f60142a"]');
    await expect(panel6).toBeVisible();
    const card6 = panel6.locator('[data-test="panel "]');
    await expect(card6).toBeVisible();
    

    
    debugger 

    //Проверка отображения карты - Дебетовая карта S7 - T-Bank
    const panel6 = page.locator('[data-guid="0b36b27e-ee77-4829-9055-899b1f60142a"]');
    await expect(panel6).toBeVisible();
    const card6 = panel6.locator('[data-test="panel "]');
    await expect(card6).toBeVisible();

    //Проверка отображения карты - Дебетовая карта S7 - T-Bank Premium
    const panel6 = page.locator('[data-guid="0b36b27e-ee77-4829-9055-899b1f60142a"]');
    await expect(panel6).toBeVisible();
    const card6 = panel6.locator('[data-test="panel "]');
    await expect(card6).toBeVisible();

    //Проверка отображения карты - Дебетовая карта для иностранных граждан
    const panel6 = page.locator('[data-guid="0b36b27e-ee77-4829-9055-899b1f60142a"]');
    await expect(panel6).toBeVisible();
    const card6 = panel6.locator('[data-test="panel "]');
    await expect(card6).toBeVisible();


    //Проверка отображения карты - Дебетовая карта ЛУКОЙЛ - Т-Банк
    const panel6 = page.locator('[data-guid="0b36b27e-ee77-4829-9055-899b1f60142a"]');
    await expect(panel6).toBeVisible();
    const card6 = panel6.locator('[data-test="panel "]');
    await expect(card6).toBeVisible();

    //Проверка отображения карты - Дебетовая карта "Мир Танков"
    const panel6 = page.locator('[data-guid="0b36b27e-ee77-4829-9055-899b1f60142a"]');
    await expect(panel6).toBeVisible();
    const card6 = panel6.locator('[data-test="panel "]');
    await expect(card6).toBeVisible();
  });
});