import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture } from '../../../hooks/pageFixture';
import { LandingPage } from '../../pages/Landing Page/landingPageLocators';
import { cridentials } from '../../../config/cridentials';

let landingPage: LandingPage;

Then('I fill in the e-mail field with an invalid e-mail', async function () {
    landingPage = new LandingPage(pageFixture.page);
    const emailField = landingPage.emailField;

    await emailField.fill(cridentials.INVALID_USERNAME);

});

Then('I fill in the password field with an invalid password', async function () {
    landingPage = new LandingPage(pageFixture.page);
    const passwordField = landingPage.passwordField;

    await passwordField.fill(cridentials.INVALID_PASSWORD);

});

Then('I should see an error message', async function () {
    landingPage = new LandingPage(pageFixture.page);
    const errorMessage = landingPage.errorMessage;
    
    await expect(errorMessage).toBeVisible();

});