import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture } from '../../../hooks/pageFixture';
import { LandingPage } from '../../pages/Landing Page/landingPageLocators';
import { credentials } from '../../../config/cridentials';

let landingPage: LandingPage;

Then('I fill in the e-mail field with an invalid e-mail', async function () {
    landingPage = new LandingPage(pageFixture.page)
    await landingPage.fillInput(landingPage.emailField, credentials.INVALID_USERNAME);
});

Then('I fill in the password field with an invalid password', async function () {
    await landingPage.fillInput(landingPage.passwordField, credentials.INVALID_PASSWORD);
});

Then('I should see an error message', async function () {
    await expect(landingPage.errorMessage).toBeVisible();
});