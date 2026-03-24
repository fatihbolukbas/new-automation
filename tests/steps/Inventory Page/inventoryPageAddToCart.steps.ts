import { Then} from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture } from '../../../hooks/pageFixture';
import { InventoryPage } from '../../pages/Inventory Page/inventoryPageLocators';
import { titleNames } from '../../../config/titleNames';

let inventoryPage: InventoryPage

Then('I should see item', async function () {
    inventoryPage = new InventoryPage(pageFixture.page);
    const item = inventoryPage.item

    expect(item).toBeVisible;
  });

Then('I should see item name', async function () {
    inventoryPage = new InventoryPage(pageFixture.page);
    const itemName = inventoryPage.itemName

    await expect(itemName).toHaveText(titleNames.ITEM_NAME)
  });

Then('I should see item price', async function () {
    inventoryPage = new InventoryPage(pageFixture.page);
    const itemPrice = inventoryPage.itemPrice
    const rawItemPriceText = await itemPrice.textContent();

    if (!rawItemPriceText) throw new Error("Fiyat metni sayfada bulunamadı!");
    const actualPriceNumber = parseFloat(rawItemPriceText.replace(/[^0-9.]/g, ''));

    const expectedItemPrice = parseFloat(String(titleNames.ITEM_PRICE));
    expect(actualPriceNumber).toBe(expectedItemPrice)
  });

Then('I should see the add to cart button', async function () {
    inventoryPage = new InventoryPage(pageFixture.page)
    const addToCartButton = inventoryPage.addToCartButton

    expect(addToCartButton).toBeVisible
  });

Then('I click add to cart button', async function () {
    inventoryPage = new InventoryPage(pageFixture.page);
    const addToCartButton = inventoryPage.addToCartButton

    addToCartButton.click;
  });

  Then('I should see the remove cart button', async function () {
    inventoryPage = new InventoryPage(pageFixture.page);
    const removeButton = inventoryPage.remove

    removeButton.click;
  });