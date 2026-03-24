import { Then, Given } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture } from '../../../hooks/pageFixture';
import { InventoryPage } from '../../pages/Inventory Page/inventoryPageLocators';
import { titleNames } from '../../../config/titleNames';

let inventoryPage: InventoryPage;

Then('I should see the inventory page header', async function () {
    inventoryPage = new InventoryPage(pageFixture.page);
    const header = inventoryPage.inventoryPageHeader;

    await expect(header).toHaveText(titleNames.HEADER_Name);
});

Then('I should see the inventory page title text', async function () {
    inventoryPage = new InventoryPage(pageFixture.page);
    const pageTitle = inventoryPage.inventoryPageTitleText;

    await expect(pageTitle).toHaveText(titleNames.PAGE_TITLE);
});

Then('I should see the inventory page product list', async function () {
    inventoryPage = new InventoryPage(pageFixture.page);
    const productList = inventoryPage.inventoryPageProductList;

    await expect(productList).toBeVisible();
});

Then('I should see the inventory page product sort options', async function () {
    inventoryPage = new InventoryPage(pageFixture.page);
    const sortOptions = inventoryPage.inventoryPageProductSortOptions;

    await expect(sortOptions).toBeVisible();
});

Then('I should see the inventory page sidebar', async function () {
    inventoryPage = new InventoryPage(pageFixture.page);
    const sidebar = inventoryPage.inventoryPageSidebar;

    await expect(sidebar).toBeVisible();
});