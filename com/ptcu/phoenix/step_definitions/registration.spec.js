"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const registration_page_1 = require("../pages/registration.page");
const dataProvider_1 = require("../resources/dataProvider");
const registration_success_page_1 = require("../pages/registration.success.page");
const { Given, When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-smoothie"));
const expect = chai.expect;
function registerSpecs() {
    const data = dataProvider_1.DataProvider.getRegisterFormData();
    const registration = new registration_page_1.Registration();
    const registrationSuccessPage = new registration_success_page_1.RegistrationSuccessPage();
    this.When(/^I register on PTC Portal with valid data$/, () => {
        registration.doRegister();
        registration.fillFormAndSubmit(data);
    });
    this.Then(/^I should be able to register successfully$/, () => {
        protractor_1.browser.sleep(10000);
        expect(registrationSuccessPage.getSuccessMessage().getText()).to.eventually.equals(dataProvider_1.DataProvider.getRegistrationSuccessMessage());
    });
}
exports.registerSpecs = registerSpecs;
module.exports = registerSpecs;
