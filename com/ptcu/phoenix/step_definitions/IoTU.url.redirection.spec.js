"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const login_page_1 = require("../pages/login.page");
const videoLibrary_landing_page_1 = require("../pages/videoLibrary.landing.page");
var loginData = require("../resources/loginData.json");
const chai = require("chai").use(require("chai-smoothie"));
const expect = chai.expect;
function iotuurlRedirection() {
    var tutorialsLandingPageObj = new videoLibrary_landing_page_1.tutorialsLandingPage();
    var loginObj = new login_page_1.Login();
    this.Given(/^I go to old IoTU site$/, () => {
        protractor_1.browser.manage().deleteAllCookies();
        protractor_1.browser.get('https://test.ptcu.com');
    });
    this.When(/^I sign in$/, () => {
        /* browser.get('https://test.ptcu.com/login');
         loginObj.doSignin(String(loginData.uid), String(loginData.pwd));*/
        tutorialsLandingPageObj.runOnNonAngular(function () {
            protractor_1.browser.get(protractor_1.browser.params.URLOptions.iotuURL + '/login');
            protractor_1.browser.sleep(8000);
            loginObj.doSignin(String(loginData.uid), String(loginData.pwd));
        });
    });
    this.When(/^I am browsing (.*)$/, (sourceURL) => {
        tutorialsLandingPageObj.startFreshNetworkCapture();
        protractor_1.browser.sleep(8000);
        protractor_1.browser.get(sourceURL);
    });
    this.Then(/^I should redirect to (.*)$/, (targetURL) => {
        expect(protractor_1.browser.getCurrentUrl()).to.be.eventually.equals(targetURL);
    });
    this.Then(/^HTTP code should be 301 for (.*)$/, function (sourceURL) {
        // Write code here that turns the phrase above into concrete actions
        var regexp = new RegExp(sourceURL);
        tutorialsLandingPageObj.getCurrentHARDetails(sourceURL, "both", function (responses) {
            console.log("Response is --" + JSON.stringify(responses));
            expect(responses.length).to.be.equals(1);
            expect(responses[0].status).to.be.equals(301);
        });
    });
    this.Then(/^HTTP code should be 200 for (.*)$/, function (targetURL) {
        // Write code here that turns the phrase above into concrete actions
        var regexp = new RegExp(targetURL + '$');
        tutorialsLandingPageObj.getCurrentHARDetails(targetURL + '$', "status", function (responses) {
            console.log("Response is --" + JSON.stringify(responses));
            expect(responses.length).to.be.equals(1);
            expect(responses[0].status).to.be.equals(200);
        });
    });
    this.Then(/^I should be able to sign out$/, function () {
        // Write code here that turns the phrase above into concrete actions
        //var loginObj = new Login();
        loginObj.doSignout();
        expect(protractor_1.browser.getCurrentUrl()).to.be.eventually.equals('https://test.ptcu.com/login');
    });
    /*  this.Then(/^HTTP code should be (\d+)$/, function (arg1 ) {
          // Write code here that turns the phrase above into concrete actions
          tutorialsLandingPageObj.getCurrentHARDetails(browser.params.apiType.IOTU_BROWSE, "both", function (responses) {
              console.log("Response is --" + JSON.stringify(responses));
              expect(responses.length).to.be.equals(1);
              expect(responses[0].status).to.be.equals(301);
          });

          tutorialsLandingPageObj.getCurrentHARDetails(browser.params.apiType.PTCU_BROWSE+'arg1', "both", function (responses) {
              console.log("Response is --" + JSON.stringify(responses));
              expect(responses.length).to.be.equals(1);
              expect(responses[0].status).to.be.equals(301);
          });
      });*/
}
exports.iotuurlRedirection = iotuurlRedirection;
module.exports = iotuurlRedirection;
