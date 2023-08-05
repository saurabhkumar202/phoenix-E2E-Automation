"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const training_landing_page_1 = require("../pages/training.landing.page");
const protractor_1 = require("protractor");
const chai = require("chai").use(require("chai-smoothie"));
const expect = chai.expect;
let domainURL = protractor_1.browser.params.URLOptions.iotuURL;
let trainingFeatures = ['Learn On Demand',
    'Upskill in Emerging Technologies',
    'Connect With The Community'];
function trainingLandingSpec() {
    let trainingLandingPagePO = new training_landing_page_1.trainingLandingPage();
    this.Then(/^I should see the "([^"]*)" page heading$/, (pageHeading) => {
        expect(trainingLandingPagePO.getTrainingPageHeading()).to.be.eventually.equals(pageHeading);
    });
    this.Then(/^I should see the "([^"]*)" on description$/, (pageDescription) => {
        expect(trainingLandingPagePO.getTrainingPageDescription()).to.be.eventually.equals(pageDescription);
    });
    this.Then(/^I should see the page title as "([^"]*)"$/, function (pageTitle) {
        expect(trainingLandingPagePO.getTrainingPageTitle()).to.be.eventually.equals(pageTitle);
    });
    this.Then(/^I should see Enterprise Training banner in the bottom$/, function () {
        expect(trainingLandingPagePO.getEnterpriseBanner().isPresent()).to.be.eventually.true;
    });
    this.Then(/^I should see 4 offerings$/, function () {
        trainingLandingPagePO.getWhatWeOffer().then(function (offerings) {
            expect(offerings.length).to.be.equal(4);
        });
    });
    this.When(/^I click on Enterprise Training banner in the bottom$/, function () {
        trainingLandingPagePO.getEnterpriseBanner().click();
    });
    this.Then(/^I should go to pricing details page$/, function () {
        let pricingURL = domainURL + "/pricing";
        expect(trainingLandingPagePO.getURL()).to.be.eventually.equals(pricingURL);
    });
    this.Then(/^I should see Free Courses block\.$/, function () {
        expect(trainingLandingPagePO.getFreeCoursesBlock().isPresent()).to.be.eventually.true;
    });
    this.When(/^I click on Free Courses block/, function () {
        trainingLandingPagePO.getFreeCoursesBlock().click();
        protractor_1.browser.refresh();
    });
    this.When(/^Then I should go to catalog page$/, function () {
        let catalogURL = domainURL + "/catalog";
        expect(trainingLandingPagePO.getURL()).to.be.eventually.equals(catalogURL);
    });
    this.Then(/^I should see Video Library block\.$/, function () {
        expect(trainingLandingPagePO.getVideoLibraryBlock().isPresent()).to.be.eventually.true;
    });
    this.When(/^I click on Video Library block$/, function () {
        trainingLandingPagePO.getVideoLibraryBlock().click();
        protractor_1.browser.refresh();
    });
    this.Then(/^I should go to Video Library$/, function () {
        let tutorialURL = domainURL + "/video-library";
        expect(trainingLandingPagePO.getURL()).to.be.eventually.equals(tutorialURL);
    });
    this.Then(/^I should see Enterprise e\-Learning block$/, function () {
        expect(trainingLandingPagePO.getElearningBlock().isPresent()).to.be.eventually.true;
    });
    this.When(/^I click on  Enterprise e\-Learning block$/, function () {
        trainingLandingPagePO.getElearningBlock().click();
        protractor_1.browser.refresh();
    });
    this.Then(/^I should go to Enterprise e\-Learning$/, function () {
    });
    this.Then(/^I should see Learning Paths block$/, function () {
        expect(trainingLandingPagePO.getLearningPathBlock().isPresent()).to.be.eventually.true;
    });
    this.When(/^I click on Learning Paths block$/, function () {
        trainingLandingPagePO.getLearningPathBlock().click();
        protractor_1.browser.refresh();
    });
    this.Then(/^I should go to Learning path details$/, function () {
        let learningPathURL = domainURL + "/learning-paths";
        expect(trainingLandingPagePO.getURL()).to.be.eventually.equals(learningPathURL);
    });
    this.Then(/^I should see training features and its details$/, function () {
        trainingLandingPagePO.getTrainingFeatures().then(function (features) {
            expect(features.length).to.be.equal(3);
        });
        trainingLandingPagePO.getTrainingFeatures().each(function (element, index) {
            element.element(protractor_1.by.tagName('h3')).getText().then(function (text) {
                console.log(text);
                expect(trainingFeatures).to.contains(text);
            });
        });
    });
}
exports.trainingLandingSpec = trainingLandingSpec;
module.exports = trainingLandingSpec;
