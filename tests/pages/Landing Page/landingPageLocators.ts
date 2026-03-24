import { Page, Locator } from "@playwright/test";
import BaseActions from "../baseActions";

export class LandingPage extends BaseActions {
    readonly page: Page;

    constructor(page: Page) {
        super(page);
        this.page = page;
    }

    get emailField(): Locator {
        return this.page.locator('#user-name');
    }

    get passwordField(): Locator {
        return this.page.locator('#password');
    }

    get loginButton(): Locator {
        return this.page.locator('#login-button');
    }

    get errorMessage(): Locator {
        return this.page.locator('h3[data-test="error"]');
    }
}