import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';

test.describe('Smoke Tests', () => {

    test('Home page should load and redirect to sign in (POM)', async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.goto();
        await homePage.verifyTitle();
        await homePage.verifyRedirectToLogin();
    });

    // Login Test (Marked as fixme because we don't have valid credentials yet)
    test.fixme('User should be able to login and see the dashboard', async ({ page }) => {
        const loginPage = new LoginPage(page);
        
        await loginPage.goto();
        // Random test data
        await loginPage.login('test@user.com', 'MySecretPass123!'); 

        // Verify successful login
        await expect(page).toHaveURL(/dashboard/);
    });

});