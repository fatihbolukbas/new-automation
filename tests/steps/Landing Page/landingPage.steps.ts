import { Given, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture } from '../../../hooks/pageFixture';
import { LandingPage } from '../../pages/Landing Page/landingPageLocators';
import { urls } from '../../../config/urls';

let landingPage: LandingPage;

Given('I navigate to the landing page', async function () {
    landingPage = new LandingPage(pageFixture.page);
    await landingPage.navigateTo(urls.BASE_URL);
});

Then('I should verify the landing page url', async function () {
    await expect(landingPage.page).toHaveURL(urls.BASE_URL);
});

Then('I should see e-mail and password fields', async function () {
    const emailField = landingPage.emailField;
    const passwordField = landingPage.passwordField;

    await expect(emailField).toBeVisible();
    await expect(passwordField).toBeVisible();

});

Then('I should see the login button', async function () {
    const loginButton = landingPage.loginButton;

    await expect(loginButton).toBeVisible();
});