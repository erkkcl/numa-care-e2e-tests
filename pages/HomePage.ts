import { Page, expect, Locator } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly signInButton: Locator;

    constructor(page: Page) {
        this.page = page;
        // Locator definition for 'Sign In' text/button
        this.signInButton = page.locator('text=Sign In'); 
    }

    // Action: Navigate to the home page
    async goto() {
        await this.page.goto('/');
    }

    // Assertion: Verify if the page title contains "NUMA"
    async verifyTitle() {
        await expect(this.page).toHaveTitle(/NUMA/);
    }

    // Assertion: Verify if the user is redirected to the login page
    async verifyRedirectToLogin() {
        await expect(this.page).toHaveURL(/signin/);
    }
}