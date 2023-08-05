"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const tutorials_landing_page_1 = require("../pages/tutorials.landing.page");
const tutorial_view_page_1 = require("../pages/tutorial.view.page");
const chai = require("chai").use(require("chai-smoothie"));
// const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
function tutorialViewSpec() {
    var tutsLandingPO = new tutorials_landing_page_1.tutorialsLandingPage();
    var tutsViewPO = new tutorial_view_page_1.tutorialViewPage();
    this.Then(/^I land on tutorial view page$/, () => {
        protractor_1.browser.waitForAngular();
        expect(tutsViewPO.getTutorialContent()).displayed;
    });
    this.Then(/^I land on a particular tutorial view page$/, () => {
        protractor_1.browser.waitForAngular();
        tutsLandingPO.goToTutorials();
        protractor_1.browser.waitForAngular();
        tutsLandingPO.clickOnGivenProduct('creo');
        protractor_1.browser.waitForAngular();
        tutsLandingPO.selectFirstTutorial();
    });
    this.Then(/^I see the bread crumbs$/, () => {
        protractor_1.browser.waitForAngular();
        expect(tutsViewPO.getFamilyFromBreadcrumb()).displayed;
        expect(tutsViewPO.getProductFromBreadcrumb()).displayed;
        expect(tutsViewPO.getVersionFromBreadcrumb()).displayed;
    });
    this.Then(/^I see the title of the tutorial$/, () => {
        expect(tutsViewPO.getTutorialTitle()).displayed;
        expect(tutsViewPO.getTutorialTitle()).to.be.eventually.equals(tutorials_landing_page_1.tutorialsLandingPage.firstTutTitle);
    });
    this.Then(/^I see the Product Name, tutorial type and the tutorial author$/, () => {
        expect(tutsViewPO.getProductName()).displayed;
        expect(tutsViewPO.getTutorialType()).displayed;
        expect(tutsViewPO.getTutorialAuthor()).displayed;
        expect(tutsViewPO.getProductName()).to.be.eventually.equals(tutorials_landing_page_1.tutorialsLandingPage.firstTutClassification);
    });
    this.Then(/^I see the tutorial Video, text and images$/, () => {
        protractor_1.browser.waitForAngular();
        expect(tutsViewPO.getTutorialVideo()).displayed;
        protractor_1.browser.waitForAngular();
        expect(tutsViewPO.getTutorialText()).displayed;
        expect(tutsViewPO.getTutorialText()).to.be.eventually.contain(tutorials_landing_page_1.tutorialsLandingPage.firstTutDesc);
    });
    this.Then(/^I see the duration of the tutorial$/, () => {
        // Write code here that turns the phrase above into concrete actions
    });
    this.When(/^I click on the version in the bread crumbs$/, () => {
        tutsViewPO.selectVersionFromBreadcrumb();
    });
    this.Then(/^I land on the tutorials landing page with the previous version selected$/, () => {
        tutsViewPO.verifyVersionPreselected();
    });
    this.When(/^I click on the product in the bread crumbs$/, () => {
        tutsViewPO.selectProductFromBreadcrumb();
    });
    this.Then(/^I land on the tutorials landing page with the previous product selected$/, () => {
        tutsViewPO.verifyProductPreselected();
    });
    this.When(/^I click on the family in the bread crumbs$/, () => {
        tutsViewPO.selectFamilyFromBreadcrumb();
    });
    this.Then(/^I land on the tutorials landing page with the previous family selected$/, () => {
        tutsViewPO.verifyFamilyPreselected();
    });
}
exports.tutorialViewSpec = tutorialViewSpec;
module.exports = tutorialViewSpec;
