import * as faker from "faker";

export class DataProvider {

    static fixedPassword = '';
    static fixedEmail = '';
    static AUTOMATION_IDENTIFIER = "auto_";

    static getRegisterFormData() {
        return {
            firstName: this.getFirstName(),
            lastName: this.getLastName(),
            email: this.getEmail(),
            country: this.getCountry(),
            organization: this.getOrganization(),
            job: this.getJob(),
            password: this.getPassword(),
            confirmPassword: this.getConfirmPassword()
        };

    }

    static getFirstName() {
        return faker.name.firstName();
    }

    static getLastName() {
        return faker.name.lastName();
    }

    static getCountry() {
        return faker.random.number({min: 1, max: 245}).toString();
    }

    static getEmail() {
        this.fixedEmail = this.AUTOMATION_IDENTIFIER + faker.internet.email();
        return this.fixedEmail;
    }

    static getEmailGenerated() {
        return this.fixedEmail;
    }

    static getOrganization() {
        return faker.company.companySuffix();
    }

    static getJob() {
        return faker.random.number({min: 1, max: 14}).toString();
    }

    static getPassword() {
        this.fixedPassword = faker.internet.password();
        return this.fixedPassword;
    }

    static getConfirmPassword() {
        return this.fixedPassword;
    }

    static getRegistrationSuccessMessage() {
        return "You have successfully registered your PTC University account.";
    }

    static getWhatsNewDec() {
        return "IoTU is now PTC University";
    }

    static getWhatsNewHeaderMessage() {
        return "We've made some changes - what's new?";
    }

    static getRandomNumberStringInRange(min: number, max: number) {
        return faker.random.number({min: min, max: max}).toString();
    }

    static getRandomNumberInRange(min: number, max: number) {
        return faker.random.number({min: min, max: max});
    }

}