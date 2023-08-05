"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const browse_tutorials_page_1 = require("./browse.tutorials.page");
let locRepo = require('../resources/locatorRepository.json');
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const should = chai.should();
class searchTutorialsPage extends browse_tutorials_page_1.browseTutorialsPage {
    getNoResultsMessage() {
        return protractor_1.element(this.getLocator(locRepo.searchTutorialPage.noResultFound)).getText().then(function (message) {
            return message;
        });
    }
    getTryChangingKeywordsMessage() {
        return protractor_1.element(this.getLocator(locRepo.searchTutorialPage.changeKeywords)).getText().then(function (message) {
            return message;
        });
    }
    getSearchTermMessage() {
        return protractor_1.element(this.getLocator(locRepo.tutorialLandingPage.searchTermMessageLabel)).getText();
    }
    setSharedURLinBrowser(sharedUrl) {
        protractor_1.browser.manage().deleteAllCookies();
        protractor_1.browser.get(sharedUrl);
    }
}
exports.searchTutorialsPage = searchTutorialsPage;
