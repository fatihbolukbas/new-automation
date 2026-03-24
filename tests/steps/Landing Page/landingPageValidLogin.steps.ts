import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture } from '../../../hooks/pageFixture';
import { LandingPage } from '../../pages/Landing Page/landingPageLocators';
import { credentials } from '../../../config/cridentials';
import { urls } from '../../../config/urls';

let landingPage: LandingPage;

Then('I fill in the e-mail field with a valid e-mail', async function () {
    landingPage = new LandingPage(pageFixture.page);
    await landingPage.fillInput(landingPage.emailField, credentials.VALID_USERNAME);
});

Then('I fill in the password field with a valid password', async function () {
    await landingPage.fillInput(landingPage.passwordField, credentials.VALID_PASSWORD);
});

Then('I should see the inventory page', async function () {
    await expect(pageFixture.page).toHaveURL(urls.BASE_URL + urls.INVENTORY_URL);
});