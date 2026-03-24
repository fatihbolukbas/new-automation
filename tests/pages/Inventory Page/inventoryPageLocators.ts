import { Page, Locator } from "@playwright/test";
import BaseActions from "../baseActions";

export class InventoryPage extends BaseActions {
    readonly page: Page;
    readonly inventoryPageHeader: Locator
    readonly inventoryPageTitleText: Locator
    readonly inventoryPageProductList: Locator
    readonly inventoryPageProductSortOptions: Locator
    readonly inventoryPageSidebar: Locator
    readonly item: Locator
    readonly itemName: Locator
    readonly itemPrice: Locator
    readonly addToCartButton: Locator
    readonly remove: Locator

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.inventoryPageHeader = page.locator('//div[@class="app_logo"]');
        this.inventoryPageTitleText = page.locator('.title');
        this.inventoryPageProductList = page.locator('//div[@class="inventory_list"]');
        this.inventoryPageProductSortOptions = page.locator('//select[@class="product_sort_container"]');
        this.inventoryPageSidebar = page.locator('//button[@id="react-burger-menu-btn"]');
        this.item = page.locator('(//div[@class="inventory_item"])[1]')
        this.itemName = page.locator('//div[normalize-space()="Sauce Labs Backpack"]')
        this.itemPrice = page.locator('//div[@class="inventory_list"]//div[1]//div[2]//div[2]//div[1]')
        this.addToCartButton = page.locator('#add-to-cart-sauce-labs-backpack')
        this.remove = page.locator('#remove-sauce-labs-backpack')
    }
}