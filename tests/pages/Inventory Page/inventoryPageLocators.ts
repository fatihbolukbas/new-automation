import { Page, Locator } from "@playwright/test";
import BaseActions from "../baseActions";

export class InventoryPage extends BaseActions {
    readonly page: Page;

    constructor(page: Page) {
        super(page);
    }

    get inventoryPageHeader(): Locator {
        return this.page.locator('//div[@class="app_logo"]');
    }

    get inventoryPageTitleText(): Locator {
        return this.page.locator('.title');
    }

    get inventoryPageProductList(): Locator {
        return this.page.locator('//div[@class="inventory_list"]');
    }

    get inventoryPageProductSortOptions(): Locator {
        return this.page.locator('//select[@class="product_sort_container"]');
    }

    get inventoryPageSidebar(): Locator {
        return this.page.locator('//button[@id="react-burger-menu-btn"]');
    }

    get itemList(): Locator {
        return this.page.locator('(//div[@class="inventory_item"])[1]');
    }

    get itemName(): Locator {
        return this.page.locator('//div[normalize-space()="Sauce Labs Backpack"]');
    }

    get itemPrice(): Locator {
        return this.page.locator('//div[@class="inventory_list"]//div[1]//div[2]//div[2]//div[1]');
    }

    get addToCartButton(): Locator {
        return this.page.locator('#add-to-cart-sauce-labs-backpack');
    }

    get remove(): Locator {
        return this.page.locator('#remove-sauce-labs-backpack');
    }

}