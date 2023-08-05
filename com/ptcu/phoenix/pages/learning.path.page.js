"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const header_footer_page_1 = require("./header.footer.page");
const protractor_1 = require("protractor");
let locRepo = require('../resources/locatorRepository.json');
const chai = require("chai").use(require("chai-smoothie"));
const expect = chai.expect;
class learningPathPage extends header_footer_page_1.HeaderFooter {
    verifyLearningPathPage() {
        protractor_1.browser.getCurrentUrl().then((URL) => {
            expect(URL).to.contain('learning-paths');
        });
    }
    verifyUserNotLoggedIn() {
        protractor_1.element(this.getLocator(locRepo.header.signIn)).getText().then((signInText) => {
            expect(signInText).to.contain('Sign In');
        });
    }
    learningPathInList(LPTitle) {
        return protractor_1.element.all(this.getLocator(locRepo.learningPathsPage.learningPaths)).filter((a) => {
            return a.getText().then((LPInList) => {
                return LPInList === LPTitle;
            });
        });
    }
    locateLPInList(LPTitle) {
        return this.learningPathInList(LPTitle).count();
    }
    learningPathImageInList(LPImage) {
        return protractor_1.element.all(this.getLocator(locRepo.learningPathsPage.lpImages)).filter((b) => {
            return b.getAttribute('src').then((LPInList) => {
                return LPInList.includes(LPImage);
            });
        });
    }
    locateLPImageInList(LPImage) {
        return this.learningPathImageInList(LPImage).count();
    }
}
exports.learningPathPage = learningPathPage;
