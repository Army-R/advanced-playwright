import { test } from "@playwright/test"
import FormPage from "../pages/form-page"

let formPage: FormPage;

test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com/automation-practice-form')
    formPage = new FormPage(page)
});

test.describe('Fill form', () => {
    test('First Name', async () => {
        await formPage.fillFirstNameField();
    });
    test('Last Name', async () => {
        await formPage.fillLastNameField();
    });
    test('Email Address', async () => {
        await formPage.fillEmailField()
    });
});