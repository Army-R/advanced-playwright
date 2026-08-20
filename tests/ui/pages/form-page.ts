import { expect, Locator, type Page } from "@playwright/test";

class FormPage {
    readonly page: Page;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly email: Locator;
    readonly gender: Locator;
    readonly mobile: Locator;
    readonly date: Locator;
    readonly subjects: Locator;
    readonly hobbies: Locator;
    readonly picture: Locator;
    readonly address: Locator;
    readonly city: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstName = page.getByPlaceholder('First Name');
        this.lastName = page.getByPlaceholder('Last Name');
        this.email = page.getByPlaceholder('name@example.com');
        this.gender = page.getByRole('radio', { name: 'Other' })
        this.mobile = page.getByTestId('userNumber');
        this.date = page.getByTestId('dateOfBirthInput');
        this.subjects = page.getByTestId('subjectsInput');
        this.hobbies = page.getByTestId('hobbiesWrapper');
        this.picture = page.getByTestId('uploadPicture');
        this.address = page.getByTestId('currentAddress')
        this.city = page.getByTestId('react-select-3-placeholder');
    }

    async fillFirstNameField() {
        await this.firstName.fill('Haku');
        await expect(this.firstName).toBeVisible();
  }

   async fillLastNameField() {
        await this.lastName.fill('Akatku');
  }

   async fillEmailField() {
        await this.email.fill('haku@email.com');
  }

  async selectGender() {
    await this.gender.click();
  }

}

export default FormPage;