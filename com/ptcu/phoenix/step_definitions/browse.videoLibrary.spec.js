"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const browse_videoLibrary_page_1 = require("../pages/browse.videoLibrary.page");
const protractor_1 = require("protractor");
const { Given, When, Then } = require("cucumber");
const videoLibrary_landing_page_1 = require("../pages/videoLibrary.landing.page");
let locRepo = require('../resources/locatorRepository.json');
const chai = require("chai").use(require("chai-smoothie"));
const expect = chai.expect;
function browsespecs() {
    var tutorialsLandingPageObj = new videoLibrary_landing_page_1.tutorialsLandingPage();
    var browserTutorialPageObj = new browse_videoLibrary_page_1.browseTutorialsPage();
    this.Given(/^I go to PTCU site$/, () => {
        protractor_1.browser.get(protractor_1.browser.params.URLOptions.iotuURL);
    });
    this.When(/^I browse Video Library tab$/, () => {
        protractor_1.browser.waitForAngular();
        tutorialsLandingPageObj.goToVideoLibrary();
    });
    this.Then(/^I see the Video Library home page$/, () => {
        protractor_1.browser.waitForAngular();
        tutorialsLandingPageObj.getURL().then((currentURL) => {
            expect(currentURL).to.contain('video-library');
        });
    });
    this.When(/^I browse Video Library by product family$/, () => {
        tutorialsLandingPageObj.clickOnGivenProduct('creo');
    });
    this.Then(/^I see the results based on family selection$/, () => {
        expect(browserTutorialPageObj.getFamilyFromBreadCrumbs()).to.be.eventually.equals('Creo');
    });
    this.When(/^I browse Video Library by product name$/, () => {
        protractor_1.browser.waitForAngular();
        browserTutorialPageObj.browseProduct('parametric');
    });
    this.Then(/^I see the results based on product name selection$/, () => {
        expect(browserTutorialPageObj.getProductFromBreadCrumbs()).to.be.eventually.equals('Parametric');
    });
    this.Then(/^I browse Video Library by product release$/, () => {
        browserTutorialPageObj.browseVersion();
    });
    this.Then(/^I see the results based on product release selection$/, () => {
        expect(browserTutorialPageObj.getVersionFromBreadCrumbs()).to.be.eventually.equals('5.0');
    });
    this.When(/^I click on the bread crumbs$/, () => {
        protractor_1.browser.waitForAngular();
        browserTutorialPageObj.browseBreadCrumb('Creo');
    });
    this.Then(/^I see the results based on the bread crumb selected$/, () => {
        expect(tutorialsLandingPageObj.getURL()).to.eventually.contain('Creo');
        expect(tutorialsLandingPageObj.getURL()).to.eventually.not.contain('Parametric');
        expect(tutorialsLandingPageObj.getURL()).to.eventually.not.contain('5.0');
    });
    this.Then(/^I navigate back with browser button$/, () => {
        tutorialsLandingPageObj.goToBrowserBack();
    });
    this.Then(/^I see the browse history$/, () => {
        expect(tutorialsLandingPageObj.getURL()).to.eventually.contain('Creo');
        expect(tutorialsLandingPageObj.getURL()).to.eventually.not.contain('Parametric');
    });
    this.Then(/^I see the title, description, product family and duration for each result$/, () => {
        var that = tutorialsLandingPageObj;
        protractor_1.element.all(that.getLocator(locRepo.browseTutorials.getTutorials)).each(function (elem, index) {
            elem.element(that.getLocator(locRepo.browseTutorials.getThumbnail)).getAttribute('src').then(function (text) {
                expect(text).to.match(/https:\/\/.*cloudfront.net\/tutorials\/images\/original\/.*/);
            });
            expect(elem.element(that.getLocator(locRepo.browseTutorials.getTutorialTitle)).getText()).to.eventually.not.be.empty;
            expect(elem.element(that.getLocator(locRepo.browseTutorials.getTutorialSummary)).getText()).to.eventually.not.be.empty;
        });
    });
    this.When(/^I try the pagination$/, () => {
        protractor_1.browser.waitForAngular();
        browserTutorialPageObj.selectPageUsingpagination('2');
    });
    this.Then(/^I land on the another page$/, () => {
        expect(browserTutorialPageObj.getURL()).to.eventually.contain('page=2');
    });
}
exports.browsespecs = browsespecs;
module.exports = browsespecs;
