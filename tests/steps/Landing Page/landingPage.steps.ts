import { Given, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture } from '../../../hooks/pageFixture';
import { LandingPage } from '../../pages/Landing Page/landingPageLocators';
import { urls } from '../../../config/urls';

let landingPage: LandingPage;

Given('I navigate to the landing page', async function () {
    landingPage = new LandingPage(pageFixture.page)
    await landingPage.navigateTo(urls.BASE_URL);
});

Then('I should verify the landing page url', async function () {
    await expect(pageFixture.page).toHaveURL(urls.BASE_URL);
});

Then('I should see e-mail and password fields', async function () {
    await expect(landingPage.emailField).toBeVisible();
    await expect(landingPage.passwordField).toBeVisible();
});

Then('I should see the login button', async function () {
    await expect(landingPage.loginButton).toBeVisible();
});

Then('I click the login button', async function () {
    await landingPage.clickElement(landingPage.loginButton);
});