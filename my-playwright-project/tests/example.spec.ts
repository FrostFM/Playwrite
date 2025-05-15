import { test, expect } from '@playwright/test';

test.describe('navigation', () => {

  test('go to page', async ({ page }) => {
    // Открываем страницу и проверяем, что она есть
    await page.goto('https://www.last.fm/ru/user/Cyber_Smoke');
    await expect(page).toHaveURL('https://www.last.fm/ru/user/Cyber_Smoke');
    const accept = page.locator('button#onetrust-accept-btn-handler');
    await expect(accept).toBeVisible();
    await accept.click();
    await expect(accept).not.toBeVisible();

    const vhod = page.locator('a.site-auth-control', { hasText: 'Вход' });
    await expect(vhod).toBeVisible();
    await vhod.click();
  
    const username = page.locator('input#id_username_or_email');
    await expect(username).toBeVisible();
    await username.fill('Cyber_Smoke');

    const passw = page.locator('input#id_password');
    await expect(passw).toBeVisible();
    await passw.fill('Darkwave1990!');

    const logged = page.locator('button.btn-primary');
    await expect(logged).toBeVisible();
    await logged.click();
   
    const music = page.locator('ul.navlist-items').locator('li.masthead-nav-item').filter({hasText:"Музыка"});
    await expect(music).toBeVisible();
    await music.click();

    const release = page.locator('div#mantle_skin').locator('a.minimal-navigation-item-link').filter({hasText:"Новые релизы"});
    await expect(release).toBeVisible();
    await release.click();

    const checkload = page.locator('nav.navlist');
    await expect(checkload).toBeVisible();

    const checkload2 = page.locator('nav.navlist').locator('a.secondary-nav-item-link').filter({hasText:"Ожидаются"});
    await expect(checkload2).toBeVisible();

    const search = page.locator('div.masthead-nav-wrap').locator('a.masthead-search-toggle'); 
    await expect(search).toBeVisible();
    await search.click();

    const field = page.locator('input#masthead-search-field');
    await expect(field).toBeVisible();
    await field.fill('Corpus Delicti');

    const search2 = page.locator('form#masthead-search').locator('button.masthead-search-submit');
    await expect(search2).toBeVisible();
    await search2.click();

    const Corpus = page.locator('div.grid-items-item-details').locator('p.grid-items-item-main-text').first();
    await expect(Corpus).toBeVisible();
    await Corpus.click();

    const other = page.locator('a.artist-similar-sidebar-more').filter({hasText:"Показать всех исполнителей"});
    await expect(other).toBeVisible();
    await other.click();

    const skelet = page.locator('div.similar-artists-item-media-top').filter({hasText:"Skeletal Family"});
    await expect(skelet).toBeVisible();

    const profile = page.locator('img.auth-avatar-desktop');
    await expect(profile).toBeVisible();
    await profile.click();

    await expect(page).toHaveURL('https://www.last.fm/ru/user/Cyber_Smoke');
    await page.waitForLoadState('domcontentloaded');
    const ava = page.locator('div.header-avatar');
    await expect(ava).toBeVisible();

    const artists = page.locator('section#top-artists');
    await expect(artists).toBeVisible();
    
    const days = artists.locator('button.dropdown-menu-clickable-button').filter({hasText:"Последние 7 дней"});
    await expect(days).toBeVisible();
    await days.click();

    const select = artists.locator('ul#artists_range');
    await expect(select).toBeVisible();

    const alltime = select.locator('a.dropdown-menu-clickable-item').filter({hasText:"Все время"});
    await expect(alltime).toBeVisible();
    await alltime.click();

    const dod = page.locator('ol.grid-items').locator('p.grid-items-item-main-text').filter({hasText:"Diary of Dreams"});
    await expect(dod).toBeVisible();
    await dod.click();

    const gothic = page.locator('section.catalogue-tags').locator('li.tag').filter({hasText:"gothic"});
    await expect(gothic).toBeVisible();
    await gothic.click();

    const wiki = page.locator('div#mantle_skin');
    await expect(wiki).toBeVisible();

    const wikiabout = wiki.locator('section.wiki-section').locator('div.visible-lg').locator('a').filter({hasText:"подробнее"}).first();
    await expect(wikiabout).toBeVisible();
    await wikiabout.click();

    const navigation = page.locator('div.masthead-nav-wrap');
    await expect(navigation).toBeVisible();

    const prof = navigation.locator('a.auth-link.auth-dropdown-toggle');
    await expect(prof).toBeVisible();
    await prof.click();
    await prof.click();

    const otchetcheck = page.locator('div.header-info');
    await expect(otchetcheck).toBeVisible();

    const otchet = otchetcheck.locator('a.secondary-nav-item-link').filter({hasText:"Отчеты"});
    await expect(otchet).toBeVisible();
    await otchet.click();
    debugger
  });




  test('worldart', async ({ page }) => {
    await page.goto('http://www.world-art.ru/');
    await expect(page).toHaveURL('http://www.world-art.ru/');

    const games = page.locator('a.main_page').filter({hasText:"Видеоигры"});
    await expect(games).toBeVisible();
    await games.click();

    const allplatform = page.locator('a.main_page').filter({hasText:"Все платформы"});
    await expect(allplatform).toBeVisible();
    await allplatform.click();

    const platform = page.locator('select[name="platform"]');
    await expect(platform).toBeVisible();
    await platform.selectOption('12');
    await platform.click();

    const tags = page.locator('select[name="public_keyword"]');
    await expect(tags).toBeVisible();
    await tags.selectOption('963');
    await tags.click();

    const list = page.locator('input[type="submit"][value="отобразить список"]');
    await expect(list).toBeVisible();
    await list.click();

    const nextpg = page.locator('div.list_button');
    await expect(nextpg).toBeVisible();

    const clickpg = nextpg.locator('a').filter({hasText:"следующая страница"});
    await clickpg.click();

    const phantasystar = page.locator('table').locator('a').filter({ hasText: "Phantasy Star" });
    await expect(phantasystar).toBeVisible();
    await phantasystar.click();

    await expect(allplatform).toBeVisible();
    await allplatform.click();

    await expect(platform).toBeVisible();
    await platform.selectOption('12');
    await platform.click();

    await expect(tags).toBeVisible();
    await tags.selectOption('963');
    await tags.click();

    await expect(list).toBeVisible();
    await list.click();

    const shiningforce = page.locator('table').locator('a').filter({ hasText: "Shining Force II (1993 г.)" });
    await expect(shiningforce).toBeVisible();
    await shiningforce.click();

    const image = page.locator('a[href="http://www.world-art.ru/games/games_img.php?id=2160&screenshot_number=7"]');
    await expect(image).toBeVisible();
    await image.click();

    const openimage = page.locator('img[src="img/10000/2160/7.jpg"]');
    await expect(openimage).toBeVisible();
    await openimage.click();

    const openimage2 = page.locator('img[src="img/10000/2160/8.jpg"]');
    await expect(openimage2).toBeVisible();
    await openimage2.click();

    const openimage3 = page.locator('img[src="img/10000/2160/9.jpg"]');
    await expect(openimage3).toBeVisible();
    await openimage3.click();

    await expect(allplatform).toBeVisible();
    await allplatform.click();

    await expect(platform).toBeVisible();
    await platform.selectOption('21');
    await platform.click();

    await expect(tags).toBeVisible();
    await tags.selectOption('963');
    await tags.click();

    await expect(list).toBeVisible();
    await list.click();

    const chronotrigger = page.locator('table').locator('a').filter({ hasText: "Chrono Trigger (1995 г.)" });
    await expect(chronotrigger).toBeVisible();
    await chronotrigger.click();

    const chronocross = page.locator('a[href="games.php?id=2344"]');
    await chronocross.scrollIntoViewIfNeeded(); 
    await expect(chronocross).toBeVisible();
    await chronocross.click();

    const anime = page.locator('a.main_page').filter({hasText:"Аниме"});
    await expect(anime).toBeVisible();
    await anime.click();

    const baseanime = page.locator('a.main_page').filter({hasText:"База данных по аниме"});
    await expect(baseanime).toBeVisible();
    await baseanime.click();

    const years = page.locator('select[name="public_year"]');
    await expect(years).toBeVisible();
    await years.selectOption('2025');
    await years.click();

    const listanime = page.locator('input[type="submit"][value="отобразить список аниме"]');
    await expect(listanime).toBeVisible();
    await listanime.click();

    const selectanume = page.locator('table').locator('a').filter({ hasText: "Я женился на однокласснице, которую ненавидел" });
    await expect(selectanume).toBeVisible();
    await selectanume.click();
  
    debugger
  });

    test('hogwarts', async ({ page }) => {
    await page.goto('https://www.wildberries.ru/');
    await expect(page).toHaveURL('https://www.wildberries.ru/');

    const search = page.locator('input#searchInput');
    await expect(search).toBeVisible();
    await search.click();
    await search.fill('замок хогвартс');

    const searchgo = page.locator('button#applySearchBtn');
    await expect(searchgo).toBeVisible();
    await searchgo.click();

    const close = page.locator('div#catalog');
    await expect(close).toBeVisible();

    await page.click('body');

    const openhog = page.locator('a[href="https://www.wildberries.ru/catalog/259644922/detail.aspx"]');
    await expect(openhog).toBeVisible();
    await openhog.click();

    const nextslide = page.locator('button.mix-block__slider-btn--next[aria-label="Следующий слайд"]');
    await expect(nextslide).toBeVisible();
    await nextslide.click();

    const grid = page.locator('div.product-page__grid');
    await expect(grid).toBeVisible();
  
    const pageorder = grid.locator('div.product-page__order');
    await expect(pageorder).toBeVisible();

    const add = pageorder.locator('button.order__button').filter({hasText:"Добавить в корзину"});
    await expect(add).toBeVisible();
    await add.click();
    
    //const gotobasket = page.locator('a.navbar-pc__link.j-wba-header-item').filter({ hasText: "Корзина" });
    const gotobasket = page.locator('a.navbar-pc__link').filter({ hasText: "Корзина" });
    await expect(gotobasket).toBeVisible();
    await gotobasket.click();

    //const remove = page.locator('button.btn__del.j-basket-item-del').locator('span').filter({ hasText: " Удалить " });
    const remove = page.locator('button.btn__del').locator('span').filter({ hasText: " Удалить " });
    await expect(remove).toBeVisible();
    await remove.click();
    
    //const navigation = page.locator('button.nav-element__burger.j-menu-burger-btn.j-wba-header-item.j-nav');
    const navigation = page.locator('button.nav-element__burger');
    await expect(navigation).toBeVisible();
    await navigation.click();

    const electronic = page.locator('li[data-menu-id="4830"]').filter({ hasText: 'Электроника' });
    await expect(electronic).toBeVisible();
    await electronic.click();

    //const console = page.locator('span.menu-burger__link.menu-burger__link--next.j-menu-drop-open').filter({hasText:"Игровые консоли и игры"});
    const console = page.locator('span.menu-burger__link').filter({hasText:"Игровые консоли и игры"});
    await expect(console).toBeVisible();
    await console.click();
    
    const selectconsole = page.locator('div[data-menu-id="4830"]').locator('a').filter({ hasText: 'Игровые консоли' });
    await expect(selectconsole).toBeVisible();
    await selectconsole.click();

    //const filterconsole = page.locator('button.dropdown-filter__btn.dropdown-filter__btn--all').filter({hasText:"Все фильтры"});
    const filterconsole = page.locator('button.dropdown-filter__btn').filter({hasText:"Все фильтры"});
    await expect(filterconsole).toBeVisible();
    await filterconsole.click();

    const filterdesktop = page.locator('div.filters-desktop');
    await expect(filterdesktop).toBeVisible();

    const filterbrend= filterdesktop.locator('div.filters-desktop__item').filter({hasText:"Бренд"});
    await expect(filterbrend).toBeVisible();

    const nextfilter = filterbrend.locator('button.filter__show-all').filter({hasText:"Показать все"}); //.locator('button[data-test-id="filter-show-all"]')
    await expect(nextfilter).toBeVisible();
    await nextfilter.click();
    
    const filterlist = filterbrend.locator('ul.filter__list');
    await expect(filterlist).toBeVisible();

    const DFLEXI = filterlist.locator('li.filter__item').filter({hasText:"3D FLEXI"});
    await DFLEXI.scrollIntoViewIfNeeded(); 
    await expect(DFLEXI).toBeVisible();
   
    const dom = filterlist.locator('li.filter__item').filter({hasText:"ДомВдохновение"});
    await dom.scrollIntoViewIfNeeded(); 
    await expect(dom).toBeVisible();

    const game = filterlist.locator('li.filter__item').filter({hasText:"Играй-город"});
    await game.scrollIntoViewIfNeeded(); 
    await expect(game).toBeVisible();

    const ng = filterlist.locator('li.filter__item').filter({hasText:"Новогодние подарки"});
    await ng.scrollIntoViewIfNeeded(); 
    await expect(ng).toBeVisible();

    const chehol = filterlist.locator('li.filter__item').filter({hasText:"Чехол.ру"});
    await chehol.scrollIntoViewIfNeeded(); 
    await expect(chehol).toBeVisible();

    const Batrakov = filterlist.locator('li.filter__item').filter({hasText:"Batrakov Home"});
    await Batrakov.scrollIntoViewIfNeeded(); 
    await expect(Batrakov).toBeVisible();

    const Disney = filterlist.locator('li.filter__item').filter({hasText:"Disney"});
    await Disney.scrollIntoViewIfNeeded(); 
    await expect(Disney).toBeVisible();

    const GamepadParts = filterlist.locator('li.filter__item').filter({hasText:"Gamepad Parts"});
    await GamepadParts.scrollIntoViewIfNeeded(); 
    await expect(GamepadParts).toBeVisible();

    const HOLYFOX = filterlist.locator('li.filter__item').filter({hasText:"HOLYFOX"});
    await HOLYFOX.scrollIntoViewIfNeeded(); 
    await expect(HOLYFOX).toBeVisible();

    //const LBGroup = filterlist.locator('li.filter__item').filter({hasText:"LB Group"});
    //await LBGroup.scrollIntoViewIfNeeded(); 
    //await expect(LBGroup).toBeVisible();

    const LEAP = filterlist.locator('li.filter__item').filter({hasText:"LEAP SHOP"});
    await LEAP.scrollIntoViewIfNeeded(); 
    await expect(LEAP).toBeVisible();

    const MobiRound = filterlist.locator('li.filter__item').filter({hasText:"MobiRound"});
    await MobiRound.scrollIntoViewIfNeeded(); 
    await expect(MobiRound).toBeVisible();

    const NICEDEVICE = filterlist.locator('li.filter__item').filter({hasText:"NICEDEVICE"});
    await NICEDEVICE.scrollIntoViewIfNeeded(); 
    await expect(NICEDEVICE).toBeVisible();

    const nintendo = filterlist.locator('li.filter__item').filter({hasText:"NINTENDO"}).nth(1);
    await nintendo.scrollIntoViewIfNeeded(); 
    await expect(nintendo).toBeVisible();

    const selectbrand = nintendo.locator('div');
    await expect(selectbrand).toBeVisible();
    await selectbrand.click();
    //await page.locator('span.checkbox-with-text__decor').filter({hasText:"NINTENDO"}).nth(1).click();
    
    const selectnintendo = page.locator('div.filters-desktop__footer');
    await expect(selectnintendo).toBeVisible();

    const selectnintendoclick = selectnintendo.locator('button.filters-desktop__btn-main').filter({hasText:"Показать"});
    await expect(selectnintendoclick).toBeVisible();
    await selectnintendoclick.click();

    debugger
  });
});

