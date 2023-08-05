"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const header_footer_page_1 = require("../pages/header.footer.page");
const scenario_context_1 = require("./scenario.context");
const chai = require("chai").use(require("chai-smoothie"));
const expect = chai.expect;
var headerFooter = new header_footer_page_1.HeaderFooter();
class SpecHelper {
    login(uid, pwd) {
        // var world =new World();
        protractor_1.browser.waitForAngular();
        headerFooter.login(uid, pwd);
        expect(headerFooter.myLearning()).to.be.displayed;
    }
    logout() {
        headerFooter.logout();
        // browser.sleep(10000);
    }
    cleanUp() {
        //console.log("Initially logging out from cleanup...");
        /*browser.sleep(10000);
        browser.waitForAngular();*/
        scenario_context_1.ScenarioContext.clearAll();
        headerFooter.switchOn(protractor_1.browser.params.windowHandles.PTCU);
        protractor_1.browser.waitForAngular();
        //Logout
        headerFooter.myLearning().isPresent().then(function (visibility) {
            if (visibility) {
                console.log("logging out from cleanup...");
                headerFooter.logout();
                // browser.sleep(10000);
            }
            else {
                console.log("didn't logged in.. cleanup");
                // browser.sleep(10000);
            }
        });
        // TBD - Is there any need to clean cookies
        return headerFooter.closeAllOtherWindows();
    }
    switchWindow(state) {
        protractor_1.browser.getAllWindowHandles().then(function (handles) {
            var newWindowHandle = handles[state];
            protractor_1.browser.switchTo().window(newWindowHandle);
        });
    }
}
exports.SpecHelper = SpecHelper;
