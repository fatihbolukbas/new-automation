import { Locator, Page } from "@playwright/test";

export default class BaseActions {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Commont method to navigate to a URL
    async navigateTo(url: string) {
        await this.page.goto(url);
    }

    // Common method to click an element
    async clickElement(element: Locator) {
        await element.click();
    }

    // Common method to fill an input field
    async fillInput(element: Locator, value: string) {
        await element.fill(value);
    }   

    // Common method to get text from an element
    async getElementText(element: Locator): Promise<string> {
        return element.innerText();
    }   

    // Common method to check if an element is visible
    async isElementVisible(element: Locator): Promise<boolean> {
        return element.isVisible();
    }

    // Common method to chechk if an element is enabled
    async isElementEnabled(element: Locator): Promise<boolean> {
        return element.isEnabled();
    }

    // Common method to wait for a URL
    async waitForURL(url: string) {
        await this.page.waitForURL(url);
    }

    // Common method to check if a button is disabled
    async isButtonDisabled(element: Locator): Promise<boolean> {
        return element.isDisabled();
    }


}