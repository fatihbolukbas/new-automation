import { Page, Locator } from "@playwright/test";
import BaseActions from "../baseActions";

export class LandingPage extends BaseActions {
    readonly page: Page;
    readonly emailField: Locator
    readonly passwordField: Locator
    readonly loginButton: Locator  
    readonly errorMessage: Locator

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.emailField = page.locator('#user-name');
        this.passwordField = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.errorMessage = page.locator('h3[data-test="error"]');
    }
}