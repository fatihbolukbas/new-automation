import { Locator, Page } from "@playwright/test";
import * as fs from "fs";
import * as path from "path";

export default class BaseActions {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Commont method to navigate to a URL with error handling
    async navigateTo(url: string, timeout: number = 30000) {
    try {
        // Page kapalıysa kontrol et
        if (this.page.isClosed()) {
            throw new Error("Page is closed");
        }
        await this.page.goto(url, { waitUntil: "networkidle", timeout });
    } catch (error) {
        await this.takeScreenshot("navigation-faild");
        throw new Error(`Failed to navigate to ${url}: ${error}`);
    }
}

    // Common method to click an element with error handling
    async clickElement(element: Locator, timeout: number = 5000) {
        try {
            await element.waitFor({ state: "visible", timeout });
            await element.click();
        } catch (error) {
            await this.takeScreenshot("click-faild");
            throw new Error(`Failed to click element: ${error}`);
        }
    }

    // Common method to fill an input field with error handling
    async fillInput(element: Locator, value: string, timeout: number = 5000) {
        try {
            await element.waitFor({ state: "visible", timeout });
            await element.fill(value);
        } catch (error) {
            await this.takeScreenshot("fill-input-faild");
            throw new Error(`Failed to fill input: "${value}": ${error}`);
        }
    }   

    // Common method to get text from an element with error handling
    async getElementText(element: Locator, timeout: number = 5000): Promise<string> {
        try {
            await element.waitFor({ state: "visible", timeout });
            const text = await element.innerText();
            return text;
        } catch (error) {
            await this.takeScreenshot("get-text-faild");
            throw new Error(`Failed to get text from element: ${error}`);
        }
    }   

    // Common method to check if an element is visible with error handling
    async isElementVisible(element: Locator, timeout: number = 5000): Promise<boolean> {
        try {
            await element.waitFor({ state: "visible", timeout})
            return true;
        } catch (error) {
            await this.takeScreenshot("element-not-visible");
            return false;
        }
    }

    // Common method to chechk if an element is enabled with error handling
    async isElementEnabled(element: Locator, timeout: number = 5000): Promise<boolean> {
        try {
            await element.waitFor({ state: "visible", timeout });
            return element.isEnabled();
        } catch (error) {
            await this.takeScreenshot("element-not-enabled");
            return false;

        }
    }

    // Common method to wait for a URL with error handling
    async waitForURL(url: string, timeout: number = 10000) {
        try {
            await this.page.waitForURL(url, { timeout });
        } catch (error) {
            await this.takeScreenshot("wait-url-failed");
            throw new Error(`Failed to wait for URL: ${url}: ${error}`);
        }
    }

    // Common method to check if a button is disabled with error handling
    async isButtonDisabled(element: Locator): Promise<boolean> {
        try {
            return await element.isDisabled();
        } catch (error) {
            await this.takeScreenshot("check-button-disabled-failed");
            throw new Error(`Failed to check if button is disabled: ${error}`);
        }
    }

    // Method to take a screenshot for debugging
    async takeScreenshot(name: string) {
        try {
            const screenshotDir = "screenshots";
            if (!fs.existsSync(screenshotDir)) {
                fs.mkdirSync(screenshotDir, { recursive: true });
            }
            const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
            const filename = path.join(screenshotDir, `${name}-${timestamp}.png`);
            await this.page.screenshot({ path: filename });
            console.log(`📸 Screenshot saved: ${filename}`);
        } catch (error) {
            console.error(`Failed to take screenshot: ${error}`);
        }
    }

    // New method: Click with retry logic
    async clickWithRetry(
        element: Locator,
        maxRetries = 3,
        timeout = 5000
    ) {
        let lastError: Error | undefined;

        for (let attempt = 1; attempt <= maxRetries; attempt++) {
            try {
                console.log(`Attempt ${attempt}/${maxRetries} to click element`);
                await this.clickElement(element, timeout);
                return;
            } catch (error) {
                lastError = error as Error;
                if (attempt < maxRetries) {
                    console.warn(`Retry attempt ${attempt} failed, retrying...`);
                    await this.page.waitForTimeout(1000); // Wait 1 second before retry
                }
            }
        }

        throw new Error(
            `Failed to click element after ${maxRetries} retries: ${lastError}`
        );
    }

    // New method: Wait for loading to finish
    async waitForLoadingToFinish(timeout = 10000) {
        try {
            const loader = this.page.locator('[data-testid="loader"]');
            await loader.waitFor({ state: "hidden", timeout });
        } catch {
            console.warn("Loading indicator not found or timeout");
        }
    }
}