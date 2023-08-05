import {HeaderFooter} from "../pages/header.footer.page";
import {browser} from "protractor";
import {learningPathPage} from "../pages/learning.path.page";

const chai = require("chai").use(require("chai-smoothie"));
const expect = chai.expect;

export function learningPathSpec() {
    var headerFooter = new HeaderFooter();
    var learningPathPO = new learningPathPage();

    this.When(/^I go to 'Learning Paths' from the 'Training' section in the header$/, () => {
        browser.waitForAngular();
        browser.actions().mouseMove(headerFooter.hoverOnTraining()).perform();
        headerFooter.goToLearningPathFromHeader();
    });

    this.Then(/^I land on the learning paths page, view all the LPs available without login$/, () => {
        browser.waitForAngular();
        learningPathPO.verifyLearningPathPage();
        learningPathPO.verifyUserNotLoggedIn();
    });

    this.When(/^I go to 'Learning Paths' from the footer$/, () => {
        browser.waitForAngular();
        headerFooter.goToLearningPathFromFooter();
    });

    this.Then(/^I see the title (.*) and its respective image (.*)$/,
        (LPTitle: string, LPImage: string) => {
            expect(learningPathPO.locateLPInList(LPTitle))
                .to.be.eventually.equals(1);
            expect(learningPathPO.locateLPImageInList(LPImage))
                .to.be.eventually.equals(1);
        });
}

module.exports = learningPathSpec;