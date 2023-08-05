import {browser} from "protractor";
import {Login} from "../pages/login.page";
import {tutorialsLandingPage} from "../pages/videoLibrary.landing.page";
import {HeaderFooter} from "../pages/header.footer.page";

var loginData = require("../resources/loginData.json");
const chai = require("chai").use(require("chai-smoothie"));
const expect = chai.expect;

export function iotuurlRedirection() {
    var tutorialsLandingPageObj = new tutorialsLandingPage();
    var loginObj = new Login();
    this.Given(/^I go to old IoTU site$/, () => {
        browser.manage().deleteAllCookies();
        browser.get('https://test.ptcu.com');
    });
    this.When(/^I sign in$/, () => {
       /* browser.get('https://test.ptcu.com/login');
        loginObj.doSignin(String(loginData.uid), String(loginData.pwd));*/
        tutorialsLandingPageObj.runOnNonAngular(function () {
                browser.get(browser.params.URLOptions.iotuURL+'/login');
                browser.sleep(8000);
                loginObj.doSignin(String(loginData.uid), String(loginData.pwd));
            }
        );

    });
    this.When(/^I am browsing (.*)$/, (sourceURL: string) => {
        tutorialsLandingPageObj.startFreshNetworkCapture();
        browser.sleep(8000);
        browser.get(sourceURL);
    });

    this.Then(/^I should redirect to (.*)$/, (targetURL: string) => {
        expect(browser.getCurrentUrl()).to.be.eventually.equals(targetURL);
    });
    this.Then(/^HTTP code should be 301 for (.*)$/, function (sourceURL: string) {
        // Write code here that turns the phrase above into concrete actions
        var regexp = new RegExp(sourceURL);
        tutorialsLandingPageObj.getCurrentHARDetails(sourceURL, "both", function (responses: any) {
            console.log("Response is --" + JSON.stringify(responses));
            expect(responses.length).to.be.equals(1);
            expect(responses[0].status).to.be.equals(301);
        });
    });
    this.Then(/^HTTP code should be 200 for (.*)$/, function (targetURL: string) {
        // Write code here that turns the phrase above into concrete actions
        var regexp = new RegExp(targetURL + '$');
        tutorialsLandingPageObj.getCurrentHARDetails(targetURL + '$', "status", function (responses: any) {
            console.log("Response is --" + JSON.stringify(responses));
            expect(responses.length).to.be.equals(1);
            expect(responses[0].status).to.be.equals(200);
        });
    });
    this.Then(/^I should be able to sign out$/, function () {
        // Write code here that turns the phrase above into concrete actions
        //var loginObj = new Login();
        loginObj.doSignout();
        expect(browser.getCurrentUrl()).to.be.eventually.equals('https://test.ptcu.com/login');

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

module.exports = iotuurlRedirection;