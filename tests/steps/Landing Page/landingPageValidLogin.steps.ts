import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture } from '../../../hooks/pageFixture';
import { LandingPage } from '../../pages/Landing Page/landingPageLocators';
import { cridentials } from '../../../config/cridentials';
import { urls } from '../../../config/urls';

let landingPage: LandingPage;

Then('I fill in the e-mail field with a valid e-mail', async function () {
    landingPage = new LandingPage(pageFixture.page);
    const emailField = landingPage.emailField;

    await emailField.fill(cridentials.VALID_USERNAME);
});

Then('I fill in the password field with a valid password', async function () {
    landingPage = new LandingPage(pageFixture.page);
    const passwordField = landingPage.passwordField;

    await passwordField.fill(cridentials.VALID_PASSWORD);
});

Then('I click the login button', async function () {
    landingPage = new LandingPage(pageFixture.page);
    const loginButton = landingPage.loginButton;

    await loginButton.click();
});

Then('I should see the inventory page', async function () {
    landingPage = new LandingPage(pageFixture.page);
    
    await expect(pageFixture.page).toHaveURL(urls.BASE_URL + urls.INVENTORY_URL);

    await pageFixture.page.context().storageState({ path: 'auth.json' });
});