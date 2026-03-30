import { After, Before, BeforeAll, AfterAll, setDefaultTimeout } from "@cucumber/cucumber"; 
import { chromium, Browser, BrowserContext } from "@playwright/test";
import { pageFixture } from "./pageFixture";

setDefaultTimeout(60 * 1000);       

let browser: Browser;
let context: BrowserContext;

BeforeAll(async function () {
    const isCI = process.env.CI ? true : false;
    browser = await chromium.launch({ headless: isCI });
});

Before(async function () {
    context = await browser.newContext();
    const page = await context.newPage();
    pageFixture.page = page;
});

After(async function () {
    if (pageFixture.page && !pageFixture.page.isClosed()) {
        await pageFixture.page.close();
    }
    if (context) {
        await context.close();
    }
});

AfterAll(async function () {
    if (browser) {
        await browser.close();
    }
});