import { After, Before, setDefaultTimeout } from "@cucumber/cucumber"; 
import { chromium, Browser, BrowserContext } from "@playwright/test";
import { Page } from "@playwright/test";

export const pageFixture = {
    page: undefined as unknown as Page
};

setDefaultTimeout(60 * 1000);       

Before(async function () {
    const isCI = process.env.CI ? true : false;
    
    const browser = await chromium.launch({ headless: isCI });
    const context = await browser.newContext();
    const page = await context.newPage();
    
    this.browser = browser;
    this.context = context;
    
    pageFixture.page = page;
});

After(async function () {
    if (pageFixture.page && !pageFixture.page.isClosed()) {
        await pageFixture.page.close();
    }
    if (this.context) {
        await this.context.close();
    }
    if (this.browser) {
        await this.browser.close();
    }
});
