import { Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture } from '../../../hooks/pageFixture';
import { LandingPage } from '../../pages/Landing Page/landingPageLocators';
import { credentials } from '../../../config/cridentials';

let landingPage: LandingPage;

// Scenario: Verify Invalid Login with Incorrect Credentials
When('I fill in the e-mail field with an invalid e-mail', async function () {
    landingPage = new LandingPage(pageFixture.page)
    await landingPage.fillInput(landingPage.emailField, credentials.INVALID_USERNAME);
});

Then('I fill in the password field with an invalid password', async function () {
    landingPage = new LandingPage(pageFixture.page);
    await landingPage.fillInput(landingPage.passwordField, credentials.INVALID_PASSWORD);
});

Then('I should see an error message', async function () {
    await expect(landingPage.errorMessage).toBeVisible();
});

// Scenario: Verify Invalid Login with Incorrect Username
When('I fill in the e-mail field with an incorrect username', async function () {
    landingPage = new LandingPage(pageFixture.page)
    await landingPage.fillInput(landingPage.emailField, credentials.INVALID_USERNAME);
});

// Scenario: Verify Invalid Login with Incorrect Password
When('I fill in the password field with an incorrect password', async function () {
    landingPage = new LandingPage(pageFixture.page);
    await landingPage.fillInput(landingPage.passwordField, credentials.INVALID_PASSWORD);
});

// Scenario: Verify Invalid Login with Empty Fields
Then('I should see an error message indicating that fields cannot be empty', async function () {
    landingPage = new LandingPage(pageFixture.page);
    await expect(landingPage.errorMessage).toBeVisible();
});

// Scenario: Verify Invalid Login with Empty Username
Then('I should see an error message indicating that the username field cannot be empty', async function () {
    landingPage = new LandingPage(pageFixture.page);
    await expect(landingPage.errorMessage).toBeVisible();
});

// Scenario: Verify Invalid Login with Empty Password
Then('I should see an error message indicating that the password field cannot be empty', async function () {
    landingPage = new LandingPage(pageFixture.page);
    await expect(landingPage.errorMessage).toBeVisible();
});