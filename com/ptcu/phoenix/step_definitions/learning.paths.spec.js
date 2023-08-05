"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const header_footer_page_1 = require("../pages/header.footer.page");
const protractor_1 = require("protractor");
const learning_path_page_1 = require("../pages/learning.path.page");
const chai = require("chai").use(require("chai-smoothie"));
const expect = chai.expect;
function learningPathSpec() {
    var headerFooter = new header_footer_page_1.HeaderFooter();
    var learningPathPO = new learning_path_page_1.learningPathPage();
    this.When(/^I go to 'Learning Paths' from the 'Training' section in the header$/, () => {
        protractor_1.browser.waitForAngular();
        protractor_1.browser.actions().mouseMove(headerFooter.hoverOnTraining()).perform();
        headerFooter.goToLearningPathFromHeader();
    });
    this.Then(/^I land on the learning paths page, view all the LPs available without login$/, () => {
        protractor_1.browser.waitForAngular();
        learningPathPO.verifyLearningPathPage();
        learningPathPO.verifyUserNotLoggedIn();
    });
    this.When(/^I go to 'Learning Paths' from the footer$/, () => {
        protractor_1.browser.waitForAngular();
        headerFooter.goToLearningPathFromFooter();
    });
    this.Then(/^I see the title (.*) and its respective image (.*)$/, (LPTitle, LPImage) => {
        expect(learningPathPO.locateLPInList(LPTitle))
            .to.be.eventually.equals(1);
        expect(learningPathPO.locateLPImageInList(LPImage))
            .to.be.eventually.equals(1);
    });
}
exports.learningPathSpec = learningPathSpec;
module.exports = learningPathSpec;
