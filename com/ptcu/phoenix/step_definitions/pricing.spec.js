"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pricing_page_1 = require("../pages/pricing.page");
const protractor_1 = require("protractor");
const header_footer_page_1 = require("../pages/header.footer.page");
const specHelper_1 = require("../utils/specHelper");
const chai = require("chai").use(require("chai-smoothie"));
const expect = chai.expect;
function pricingSpec() {
    let pricingPO = new pricing_page_1.pricingPage();
    var specHelper = new specHelper_1.SpecHelper();
    var headerFooter = new header_footer_page_1.HeaderFooter();
    this.When(/^I go to Pricing from the header$/, () => {
        pricingPO.getPricingFromHeader();
    });
    this.Then(/^I land on the Pricing page without login$/, () => {
        pricingPO.getURL().then((currentURL) => {
            expect(currentURL).to.contain('/pricing');
        });
        expect(pricingPO.getSignInAndRegister()).to.eventually.contain("Sign In");
        expect(pricingPO.getSignInAndRegister()).to.eventually.contain("Register");
        pricingPO.getPageTitle().then((pageTitle) => {
            expect(pageTitle).to.contain('PTC University Offerings & Pricing | PTC University');
        });
    });
    this.Then(/^I go to Pricing from the footer$/, () => {
        pricingPO.getPricingFromFooter();
    });
    this.Then(/^I see the 'PTC University Offerings' text, its description and the 'View Offerings' link$/, () => {
        expect(pricingPO.getPageHeading()).to.eventually.contain('PTC University Offerings');
        expect(pricingPO.getPageHeadingDesc()).to.eventually.contain('Training and learning services designed to get your team up-to-speed quickly with PTC products.');
        expect(pricingPO.getBtnViewOfferings()).to.eventually.contain('View Offerings');
    });
    this.When(/^I go to the 'View Offerings' link$/, () => {
        pricingPO.clickBtnViewOfferings();
    });
    this.Then(/^I see the 'What We Offer' table$/, () => {
        expect(pricingPO.getOfferTable().isDisplayed()).to.be.eventually.true;
    });
    this.Then(/^I see the marketing section text and its description$/, () => {
        expect(pricingPO.getMarketingSectionTitle()).to.eventually.contain('Bring Expert Knowledge to Your Organization');
        expect(pricingPO.getMarketingSectionDesc()).to.eventually.contain('Enable your team with industry skills through on-demand training, expert workshops, and custom learning services.');
    });
    this.Then(/^I see the marketing point blocks with its (.*), (.*) and (.*)$/, (image, title, description) => {
        expect(pricingPO.locateImageInCard(image)).to.be.eventually.equals(1, "Image is missing");
        expect(pricingPO.getTitleInCard(title)).to.be.eventually.equals(1, "Title is missing");
        expect(pricingPO.getDescriptionInCard(description)).to.be.eventually.equals(1, "Description is missing");
    });
    this.Then(/^I see the (.*) available in (.*), (.*) and (.*)$/, (items, forPublic, subscription, partners) => {
        expect(pricingPO.getItem1InOffer(items)).to.be.eventually.equals(1, "Item 1 is missing");
        // expect(pricingPO.item1InPublic()).to.eventually.contain(forPublic);
    });
    this.Then(/^I see the "([^"]*)" section$/, (sectionTitle) => {
        expect(pricingPO.sectionAbtOffering()).displayed;
        expect(pricingPO.sectionAbtOfferingTitle()).to.be.eventually.equals(sectionTitle, "Section title is missing");
    });
    this.Then(/^I see the block1 (.*) and the link1 (.*)$/, (blockTitle, blockLink) => {
        expect(pricingPO.blockeLearningTitle()).to.eventually.equals(blockTitle);
        expect(pricingPO.blockeLearnLink()).to.eventually.equals(blockLink);
    });
    this.Then(/^I see the block2 (.*) and the link2 (.*)$/, (blockTitle, blockLink) => {
        expect(pricingPO.getBlockILTTitle()).to.eventually.equals(blockTitle);
        expect(pricingPO.blockILTLink()).to.eventually.equals(blockLink);
    });
    this.When(/^I click on the block2 (.*)$/, (blockTitle) => {
        pricingPO.blockILTTitle().click();
    });
    this.Then(/^I land on the link2 (.*)$/, (blockLink) => {
        protractor_1.browser.sleep(4000);
        var SUPPORT_WINDOW = "1";
        specHelper.switchWindow(SUPPORT_WINDOW);
        headerFooter.runOnNonAngular(() => {
            protractor_1.browser.sleep(10000);
            this.expect(protractor_1.browser.getCurrentUrl()).to.be.eventually.contains(blockLink);
        });
    });
    this.Then(/^I see the block3 (.*) and the link3 (.*)$/, (blockTitle, blockLink) => {
        expect(pricingPO.blockMakerLab()).to.eventually.equals(blockTitle);
        expect(pricingPO.getMakerLabLink()).to.eventually.contain(blockLink);
    });
    this.When(/^I click on the block3 (.*)$/, (blockTitle) => {
        pricingPO.getMakerLabBlock().click();
    });
    this.Then(/^I land on the link3 (.*)$/, (blockLink) => {
        protractor_1.browser.sleep(3000);
        var PTC_WINDOW = 1;
        specHelper.switchWindow(PTC_WINDOW);
        headerFooter.runOnNonAngular(() => {
            protractor_1.browser.sleep(10000);
            this.expect(protractor_1.browser.driver.getCurrentUrl()).to.eventually.contain(blockLink);
        });
    });
    this.Then(/^I see the block4 (.*) and the link4 (.*)$/, (blockTitle, blockLink) => {
        expect(pricingPO.getBlockTWXSpec().getText()).to.eventually.equals(blockTitle);
        expect(pricingPO.getTWXSpecLink()).to.eventually.contain(blockLink);
    });
    this.When(/^I click on the block4 (.*)$/, (blockTitle) => {
        pricingPO.getBlockTWXSpec().click();
    });
    this.Then(/^I land on the link4 (.*)$/, (blockLink) => {
        this.expect(protractor_1.browser.getCurrentUrl()).to.eventually.contain(blockLink);
    });
    this.Then(/^I see the block5 (.*) and the link5 (.*)$/, (blockTitle, blockLink) => {
        expect(pricingPO.getBlockLearningServices().getText()).to.eventually.equals(blockTitle);
        expect(pricingPO.getLServicesLink()).to.eventually.contain(blockLink);
    });
    this.When(/^I click on the block5 (.*)$/, (blockTitle) => {
        pricingPO.getBlockLearningServices().click();
    });
    this.Then(/^I land on the link5 (.*)$/, (blockLink) => {
        protractor_1.browser.sleep(3000);
        var PTC_WINDOW = 1;
        specHelper.switchWindow(PTC_WINDOW);
        headerFooter.runOnNonAngular(() => {
            protractor_1.browser.sleep(10000);
            this.expect(headerFooter.getURL()).to.eventually.contain(blockLink);
        });
        headerFooter.getBrowserErrors((logs) => {
            console.log('Log message is' + logs);
        });
    });
    this.Then(/^I see the block6 (.*) and the link6 (.*)$/, (blockTitle, blockLink) => {
        expect(pricingPO.getBlockTrainingAdvisor()).to.eventually.contain(blockTitle);
        expect(pricingPO.getTrainingAdvisorLink().getAttribute('href')).to.eventually.contain(blockLink);
    });
    this.When(/^I click on the block6 (.*)$/, (blockTitle) => {
        pricingPO.getTrainingAdvisorLink().click();
    });
    this.Then(/^I land on the link6 (.*)$/, (blockLink) => {
        protractor_1.browser.sleep(3000);
        var PTC_WINDOW = 1;
        specHelper.switchWindow(PTC_WINDOW);
        headerFooter.runOnNonAngular(() => {
            protractor_1.browser.sleep(10000);
            this.expect(headerFooter.getURL()).to.eventually.contain(blockLink);
        });
    });
}
exports.pricingSpec = pricingSpec;
module.exports = pricingSpec;
