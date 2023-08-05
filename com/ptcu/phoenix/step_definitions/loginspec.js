"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const login_page_1 = require("../pages/login.page");
const protractor_1 = require("protractor");
const { Given, When, Then } = require("cucumber");
const header_footer_page_1 = require("../pages/header.footer.page");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
var loginData = require("../resources/loginData.json");
function loginspecs() {
    var loginObj = new login_page_1.Login();
    let headerFooter = new header_footer_page_1.HeaderFooter();
    this.Given(/^I go to IoTU portal$/, () => {
        protractor_1.browser.get(protractor_1.browser.params.URLOptions.iotuURL);
    });
    this.When(/^I login to IoTU portal$/, () => {
        headerFooter.goToSignIn();
        loginObj.runOnNonAngular(function () {
            protractor_1.browser.sleep(3000);
            loginObj.doSignin(String(loginData.uid), String(loginData.pwd));
        });
    });
    this.Then(/^I should be able to login$/, () => {
        loginObj.getURL().then((currentURL) => {
            expect(currentURL).to.contain('my-learning');
        });
        protractor_1.element(protractor_1.by.linkText('Sign out')).click();
    });
}
exports.loginspecs = loginspecs;
module.exports = loginspecs;
