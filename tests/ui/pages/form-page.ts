import { Location } from "@applitools/eyes-playwright";
import { Locator, type Page } from "@playwright/test";

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
        this.firstName = page.getByTestId('firstName');
        this.lastName = page.getByTestId('lastName');
        this.email = page.getByTestId('userEmail');
        this.gender = page.getByTestId('genterWrapper');
        this.mobile = page.getByTestId('userNumber');
        this.date = page.getByTestId('dateOfBirthInput');
        this.subjects = page.getByTestId('subjectsInput');
        this.hobbies = page.getByTestId('hobbiesWrapper');
        this.picture = page.getByTestId('uploadPicture');
        this.address = page.getByTestId('currentAddress')
        this.city = page.getByTestId('react-select-3-placeholder');
    }
}

export default FormPage;