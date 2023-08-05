"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const header_footer_page_1 = require("./header.footer.page");
const protractor_1 = require("protractor");
let locRepo = require('../resources/locatorRepository.json');
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const should = chai.should();
class tutorialsLandingPage extends header_footer_page_1.HeaderFooter {
    browseVersion() {
        protractor_1.element(this.getLocator(locRepo.selectVersion)).click();
    }
    getFirstTutorial() {
        protractor_1.browser.waitForAngular();
        return protractor_1.element.all(this.getLocator(locRepo.tutorialLandingPage.tutorialList)).first();
    }
    getFirstTutorialTitle() {
        protractor_1.browser.waitForAngular();
        return this.getFirstTutorial().element(protractor_1.by.xpath("./app-tutorial-tile/a/section[2]/h3")).getText();
    }
    getFirstTutorialClassification() {
        protractor_1.browser.waitForAngular();
        return this.getFirstTutorial().element(protractor_1.by.xpath("./app-tutorial-tile/a/section[2]/dl/dd")).getText();
    }
    getFirstTutorialDesc() {
        protractor_1.browser.waitForAngular();
        return this.getFirstTutorial().element(protractor_1.by.xpath("./app-tutorial-tile/a/section[2]/span[1]")).getText();
    }
    getFirstTutorialDetails() {
        this.getFirstTutorialTitle().then((result) => {
            tutorialsLandingPage.firstTutTitle = result;
        });
        this.getFirstTutorialClassification().then((result) => {
            tutorialsLandingPage.firstTutClassification = result;
        });
        this.getFirstTutorialDesc().then((result) => {
            tutorialsLandingPage.firstTutDesc = result;
        });
    }
    selectFirstTutorial() {
        protractor_1.browser.waitForAngular();
        protractor_1.element.all(this.getLocator(locRepo.tutorialLandingPage.firstTutorial))
            .first().click();
    }
    typeSearchKeyword(searchTerm) {
        protractor_1.element(this.getLocator(locRepo.tutorialHomePage.searchTextbox)).sendKeys(searchTerm);
    }
    clickSearchIcon() {
        protractor_1.element(this.getLocator(locRepo.tutorialHomePage.searchIcon)).click();
    }
    clickResetIcon() {
        protractor_1.element(this.getLocator(locRepo.tutorialHomePage.searchResetIcon)).click();
    }
    getSearchKeywordValue() {
        return protractor_1.element(this.getLocator(locRepo.tutorialHomePage.searchTextbox)).getText().then(function (searchTerm) {
            return searchTerm;
        });
    }
    clickBrowseProductLink() {
        protractor_1.element(this.getLocator(locRepo.browseTutorials.productLink)).click();
    }
    clickLanguageLink() {
        protractor_1.element(this.getLocator(locRepo.browseTutorials.languageLink)).click();
    }
    featuredTutorialsCarousal() {
        return protractor_1.element(this.getLocator(locRepo.tutorialLandingPage.featuredTutorials));
    }
    getFeaturedTutorialLaneTitle() {
        return protractor_1.element(this.getLocator(locRepo.tutorialLandingPage.featuredTutorialLaneTitle))
            .getText();
    }
    selectFirstFeaturedTutorial() {
        protractor_1.element(this.getLocator(locRepo.tutorialLandingPage.viewTutorial)).click();
    }
    getPopularTutorialLaneTitle() {
        return protractor_1.element(this.getLocator(locRepo.tutorialLandingPage
            .popularTutorialLaneTitle)).getText();
    }
    getPopularSwimlane() {
        return protractor_1.element(this.getLocator(locRepo.tutorialLandingPage.popularSwimlane));
    }
    getTutorialsInPopularSwimlane() {
        return this.getPopularSwimlane().all(this.getLocator(locRepo.tutorialLandingPage.swimLaneItem));
    }
    getPopularTutorialCount() {
        return this.getTutorialsInPopularSwimlane().count();
    }
    selectFirstPopularTutorial() {
        this.getTutorialsInPopularSwimlane().first().click();
    }
    getRecentTutorialLaneTitle() {
        return protractor_1.element(this.getLocator(locRepo.tutorialLandingPage
            .recentTutorialLaneTitle)).getText();
    }
    getRecentlyAddedSwimlane() {
        return protractor_1.element(this.getLocator(locRepo.tutorialLandingPage.recentlyAddedSwimlane));
    }
    getTutorialsInRecentlyAddedSwimlane() {
        return this.getRecentlyAddedSwimlane()
            .all(this.getLocator(locRepo.tutorialLandingPage.swimLaneItem));
    }
    getRecentTutorialsCount() {
        return this.getTutorialsInRecentlyAddedSwimlane().count();
    }
    selectFirstRecentTutorial() {
        this.getTutorialsInRecentlyAddedSwimlane().first().click();
    }
}
exports.tutorialsLandingPage = tutorialsLandingPage;
