import {Login} from "../pages/login.page";
import {browser, by, element} from "protractor";

const {Given, When, Then} = require("cucumber");
import {helperObject} from "../utils/helper";
import {HeaderFooter} from "../pages/header.footer.page";

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

var loginData = require("../resources/loginData.json");

export function loginspecs() {

    var loginObj = new Login();
    let headerFooter = new HeaderFooter();

    this.Given(/^I go to IoTU portal$/, () => {
        browser.get(browser.params.URLOptions.iotuURL);
    });

    this.When(/^I login to IoTU portal$/, () => {
        headerFooter.goToSignIn();
        loginObj.runOnNonAngular(function () {
            browser.sleep(3000);
            loginObj.doSignin(String(loginData.uid), String(loginData.pwd));
        });
    });

    this.Then(/^I should be able to login$/, () => {
        loginObj.getURL().then((currentURL: string) => {
            expect(currentURL).to.contain('my-learning');
        });
        element(by.linkText('Sign out')).click();
    });
}

module.exports = loginspecs;