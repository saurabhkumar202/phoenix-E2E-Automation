"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const chai = require("chai").use(require("chai-smoothie"));
const expect = chai.expect;
const videoLibrary_view_page_1 = require("../pages/videoLibrary.view.page");
const videoLibrary_landing_page_1 = require("../pages/videoLibrary.landing.page");
function tutorialLandingSpec() {
    var tutsLandingPO = new videoLibrary_landing_page_1.tutorialsLandingPage();
    var tutsViewPO = new videoLibrary_view_page_1.tutorialViewPage();
    this.When(/^I select a tutorial to view$/, () => {
        protractor_1.browser.waitForAngular();
        tutsLandingPO.getFirstTutorialDetails();
        tutsLandingPO.selectFirstTutorial();
    });
    this.Then(/^I see "Featured Videos" title$/, () => {
        protractor_1.browser.waitForAngular();
        expect(tutsLandingPO.getFeaturedTutorialLaneTitle()).to.eventually
            .contain('Featured videos');
    });
    this.Then(/^I see "Featured Videos" carousal with 4 video libraries$/, () => {
        protractor_1.browser.waitForAngular();
        expect(tutsLandingPO.featuredTutorialsCarousal()).displayed;
    });
    this.When(/^I open any tutorial from "Featured Videos" page$/, () => {
        tutsLandingPO.selectFirstFeaturedTutorial();
    });
    this.Then(/^I see "Popular this week" title$/, () => {
        expect(tutsLandingPO.getPopularTutorialLaneTitle()).to.eventually
            .contain('Popular this week');
    });
    this.Then(/^I see "Popular this week" carousal with 4 video libraries$/, () => {
        expect(tutsLandingPO.getPopularTutorialCount()).to.be.eventually
            .equals(4, "4 tutorials are not displayed in the Popular this week lane");
    });
    this.When(/^I open any tutorial from "Popular this week" page$/, () => {
        tutsLandingPO.selectFirstPopularTutorial();
    });
    this.Then(/^I see "Recently added" title$/, () => {
        expect(tutsLandingPO.getRecentTutorialLaneTitle()).to.eventually
            .contain('Recently added');
    });
    this.Then(/^I see "Recently added" carousal with 4 video libraries$/, () => {
        expect(tutsLandingPO.getRecentTutorialsCount()).to.be.eventually
            .equals(4, "4 tutorials are not displayed in the Recently added lane");
    });
    this.When(/^I open any tutorial from "Recently added" page$/, () => {
        tutsLandingPO.selectFirstRecentTutorial();
    });
}
exports.tutorialLandingSpec = tutorialLandingSpec;
module.exports = tutorialLandingSpec;
