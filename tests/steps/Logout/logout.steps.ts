import { When, Then } from '@cucumber/cucumber';
import { InventoryPage } from "../../pages/Inventory Page/inventoryPageLocators";
import { pageFixture } from '../../../hooks/pageFixture';
import { expect } from '@playwright/test';
import { urls } from '../../../config/urls';

let logout: InventoryPage

When('I click the sidebar menu button', async function () {
    logout = new InventoryPage(pageFixture.page);
    await logout.clickElement(logout.inventoryPageSidebar);
});

Then('I should see logout option', async function () {
    const logoutOpttion = logout.logoutButton;

    await expect(logoutOpttion).toBeVisible();
});

When('I click the logout button', async function () {
    await logout.clickElement(logout.logoutButton);
});

Then('I should be redirected to the landing page', async function () {
    await expect(pageFixture.page).toHaveURL(urls.BASE_URL);
});