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

    //Проверка отображения карты - Дебетовая карта S7 - T-Bank
    const panel7 = page.locator('[data-guid="1f7c8f98-92ba-4c47-b5db-49bb36b2350f"]');
    await expect(panel7).toBeVisible();
    const card7 = panel7.locator('[data-test="panel "]');
    await expect(card7).toBeVisible();

    //Проверка отображения карты - Дебетовая карта S7 - T-Bank Premium
    const panel8 = page.locator('[data-guid="accf0a8d-fc35-41f3-baa4-58d02d2a8ff9"]');
    await expect(panel8).toBeVisible();
    const card8 = panel8.locator('[data-test="panel "]');
    await expect(card8).toBeVisible();

    //Проверка отображения карты - Дебетовая карта для иностранных граждан
    const panel9 = page.locator('[data-guid="ed40b862-8d96-4d68-80a7-8e21df52931b"]');
    await expect(panel9).toBeVisible();
    const card9 = panel9.locator('[data-test="panel "]');
    await expect(card9).toBeVisible();

    //Проверка отображения карты - Дебетовая карта ЛУКОЙЛ - Т-Банк
    const panel10 = page.locator('[data-guid="f68f91f1-f194-48d8-b527-c49269ddd51e"]');
    await expect(panel10).toBeVisible();
    const card10 = panel10.locator('[data-test="panel "]');
    await expect(card10).toBeVisible();

    //Проверка отображения карты - Дебетовая карта "Мир Танков"
    const panel11 = page.locator('[data-guid="2d7e44ca-374c-49c4-9bee-5e1cc8d993a5"]');
    await expect(panel11).toBeVisible();
    const card11 = panel11.locator('[data-test="panel "]');
    await expect(card11).toBeVisible();

    //Проверка отображения карты - Дебетовая карта Tanks Blitz
    const panel12 = page.locator('[data-guid="7b71e53a-4ae8-4d7c-ac32-282036122acd"]');
    await expect(panel12).toBeVisible();
    const card12 = panel12.locator('[data-test="panel "]');
    await expect(card12).toBeVisible();

    //Проверка отображения карты - Дебетовая карта "Мир Кораблей"
    const panel13 = page.locator('[data-guid="6cc284f6-6365-46fb-92c8-f74fac6e20fd"]');
    await expect(panel13).toBeVisible();
    const card13 = panel13.locator('[data-test="panel "]');
    await expect(card13).toBeVisible();

    //Проверка отображения карты - Дебетовая карта Физтех Союза
    const panel14 = page.locator('[data-guid="4d48f70b-7088-447c-8381-db7df4900a5f"]');
    await expect(panel14).toBeVisible();
    const card14 = panel14.locator('[data-test="panel "]');
    await expect(card14).toBeVisible();

    //Проверка отображения карты - Дебетовая карта Физтех Союза Premium
    const panel15 = page.locator('[data-guid="7d069c4c-292e-4152-bcba-53abad1f8ab0"]');
    await expect(panel15).toBeVisible();
    const card15 = panel15.locator('[data-test="panel "]');
    await expect(card15).toBeVisible();

    //Проверка отображения карты - Дебетовая карта AliExpress
    const panel16 = page.locator('[data-guid="4641755d-43e9-4ce6-b9c7-a0ef1fb47695"]');
    await expect(panel16).toBeVisible();
    const card16 = panel16.locator('[data-test="panel "]');
    await expect(card16).toBeVisible();

    //Проверка отображения карты - Дебетовая карта Lamoda
    const panel17 = page.locator('[data-guid="19368744-e327-400f-b586-002e56d2ecaf"]');
    await expect(panel17).toBeVisible();
    const card17 = panel17.locator('[data-test="panel "]');
    await expect(card17).toBeVisible();





      
    
    debugger 

  });
});