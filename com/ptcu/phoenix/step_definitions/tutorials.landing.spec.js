"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const chai = require("chai").use(require("chai-smoothie"));
const expect = chai.expect;
const tutorial_view_page_1 = require("../pages/tutorial.view.page");
const tutorials_landing_page_1 = require("../pages/tutorials.landing.page");
function tutorialLandingSpec() {
    var tutsLandingPO = new tutorials_landing_page_1.tutorialsLandingPage();
    var tutsViewPO = new tutorial_view_page_1.tutorialViewPage();
    this.When(/^I select a tutorial to view$/, () => {
        protractor_1.browser.waitForAngular();
        tutsLandingPO.getFirstTutorialDetails();
        tutsLandingPO.selectFirstTutorial();
    });
    this.Then(/^I see "Featured Tutorials" title$/, () => {
        protractor_1.browser.waitForAngular();
        expect(tutsLandingPO.getFeaturedTutorialLaneTitle()).to.eventually
            .contain('Featured tutorials');
    });
    this.Then(/^I see "Featured Tutorials" carousal with 4 tutorials$/, () => {
        protractor_1.browser.waitForAngular();
        expect(tutsLandingPO.featuredTutorialsCarousal()).displayed;
    });
    this.When(/^I open any tutorial from "Featured Tutorials" page$/, () => {
        tutsLandingPO.selectFirstFeaturedTutorial();
    });
    this.Then(/^I see "Popular this week" title$/, () => {
        expect(tutsLandingPO.getPopularTutorialLaneTitle()).to.eventually
            .contain('Popular this week');
    });
    this.Then(/^I see "Popular this week" carousal with 4 tutorials$/, () => {
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
    this.Then(/^I see "Recently added" carousal with 4 tutorials$/, () => {
        expect(tutsLandingPO.getRecentTutorialsCount()).to.be.eventually
            .equals(4, "4 tutorials are not displayed in the Recently added lane");
    });
    this.When(/^I open any tutorial from "Recently added" page$/, () => {
        tutsLandingPO.selectFirstRecentTutorial();
    });
}
exports.tutorialLandingSpec = tutorialLandingSpec;
module.exports = tutorialLandingSpec;
