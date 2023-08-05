import {browser, protractor} from "protractor";
import {Registration} from "../pages/registration.page";
import {DataProvider} from "../resources/dataProvider";
import {RegistrationSuccessPage} from "../pages/registration.success.page";

const {Given, When, Then} = require("cucumber");
const chai = require("chai").use(require("chai-smoothie"));
const expect = chai.expect;


export function registerSpecs() {

    const data = DataProvider.getRegisterFormData();
    const registration = new Registration();
    const registrationSuccessPage = new RegistrationSuccessPage();

    this.When(/^I register on PTC Portal with valid data$/, () => {
        registration.doRegister();
        registration.fillFormAndSubmit(data);
    });

    this.Then(/^I should be able to register successfully$/, () => {
        browser.sleep(10000);
        expect(registrationSuccessPage.getSuccessMessage().getText()).to.eventually.equals(DataProvider.getRegistrationSuccessMessage());
    });
}

module.exports = registerSpecs;