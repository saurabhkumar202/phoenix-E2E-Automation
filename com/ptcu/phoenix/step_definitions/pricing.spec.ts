import {pricingPage} from "../pages/pricing.page";
import {browser} from "protractor";
import {HeaderFooter} from "../pages/header.footer.page";
import {headerFooterSpecs} from "./header.footer.spec";
import {SpecHelper} from "../utils/specHelper";

const chai = require("chai").use(require("chai-smoothie"));
const expect = chai.expect;

export function pricingSpec() {
    let pricingPO = new pricingPage();
    var specHelper = new SpecHelper();
    var headerFooter = new HeaderFooter();

    this.When(/^I go to Pricing from the header$/, () => {
        pricingPO.getPricingFromHeader();
    });

    this.Then(/^I land on the Pricing page without login$/, () => {
        pricingPO.getURL().then((currentURL: string) => {
            expect(currentURL).to.contain('/pricing');
        });
        expect(pricingPO.getSignInAndRegister()).to.eventually.contain("Sign In");
        expect(pricingPO.getSignInAndRegister()).to.eventually.contain("Register");
        pricingPO.getPageTitle().then((pageTitle: string) => {
            expect(pageTitle).to.contain('PTC University Offerings & Pricing | PTC University');
        });
    });

    this.Then(/^I go to Pricing from the footer$/, () => {
        pricingPO.getPricingFromFooter();
    });

    this.Then(/^I see the 'PTC University Offerings' text, its description and the 'View Offerings' link$/, () => {
        expect(pricingPO.getPageHeading()).to.eventually.contain('PTC University Offerings');
        expect(pricingPO.getPageHeadingDesc()).to.eventually.contain
        ('Training and learning services designed to get your team up-to-speed quickly with PTC products.');
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

    this.Then(/^I see the marketing point blocks with its (.*), (.*) and (.*)$/,
        (image: string, title: string, description: string) => {
            expect(pricingPO.locateImageInCard(image)).to.be.eventually.equals(1, "Image is missing");
            expect(pricingPO.getTitleInCard(title)).to.be.eventually.equals(1, "Title is missing");
            expect(pricingPO.getDescriptionInCard(description)).to.be.eventually.equals(1, "Description is missing");
        });

    this.Then(/^I see the (.*) available in (.*), (.*) and (.*)$/,
        (items: string, forPublic: string, subscription: string, partners: string) => {
            expect(pricingPO.getItem1InOffer(items)).to.be.eventually.equals(1, "Item 1 is missing");
            // expect(pricingPO.item1InPublic()).to.eventually.contain(forPublic);
        });

    this.Then(/^I see the "([^"]*)" section$/, (sectionTitle: string) => {
        expect(pricingPO.sectionAbtOffering()).displayed;
        expect(pricingPO.sectionAbtOfferingTitle()).to.be.eventually.equals(sectionTitle, "Section title is missing");
    });

    this.Then(/^I see the block1 (.*) and the link1 (.*)$/, (blockTitle: string, blockLink: string) => {
        expect(pricingPO.blockeLearningTitle()).to.eventually.equals(blockTitle);
        expect(pricingPO.blockeLearnLink()).to.eventually.equals(blockLink);
    });

    this.Then(/^I see the block2 (.*) and the link2 (.*)$/, (blockTitle: string, blockLink: string) => {
        expect(pricingPO.getBlockILTTitle()).to.eventually.equals(blockTitle);
        expect(pricingPO.blockILTLink()).to.eventually.equals(blockLink);
    });

    this.When(/^I click on the block2 (.*)$/, (blockTitle: string) => {
        pricingPO.blockILTTitle().click();
    });

    this.Then(/^I land on the link2 (.*)$/, (blockLink: string) => {
        browser.sleep(4000);
        var SUPPORT_WINDOW="1";
        specHelper.switchWindow(SUPPORT_WINDOW);
        headerFooter.runOnNonAngular(()=>{
            browser.sleep(10000);
            this.expect(browser.getCurrentUrl()).to.be.eventually.contains(blockLink);
        });
    });

    this.Then(/^I see the block3 (.*) and the link3 (.*)$/, (blockTitle: string, blockLink: string) => {
        expect(pricingPO.blockMakerLab()).to.eventually.equals(blockTitle);
        expect(pricingPO.getMakerLabLink()).to.eventually.contain(blockLink);
    });

    this.When(/^I click on the block3 (.*)$/, (blockTitle: string) => {
        pricingPO.getMakerLabBlock().click();
    });

    this.Then(/^I land on the link3 (.*)$/, (blockLink: string) => {
        browser.sleep(3000);
        var PTC_WINDOW=1;
        specHelper.switchWindow(PTC_WINDOW);
        headerFooter.runOnNonAngular(()=>{
            browser.sleep(10000);
            this.expect(browser.driver.getCurrentUrl()).to.eventually.contain(blockLink);
        });
    });

    this.Then(/^I see the block4 (.*) and the link4 (.*)$/, (blockTitle: string, blockLink: string) => {
        expect(pricingPO.getBlockTWXSpec().getText()).to.eventually.equals(blockTitle);
        expect(pricingPO.getTWXSpecLink()).to.eventually.contain(blockLink);
    });

    this.When(/^I click on the block4 (.*)$/, (blockTitle: string) => {
        pricingPO.getBlockTWXSpec().click();
    });

    this.Then(/^I land on the link4 (.*)$/, (blockLink: string) => {
        this.expect(browser.getCurrentUrl()).to.eventually.contain(blockLink);
    });

    this.Then(/^I see the block5 (.*) and the link5 (.*)$/, (blockTitle: string, blockLink: string) => {
        expect(pricingPO.getBlockLearningServices().getText()).to.eventually.equals(blockTitle);
        expect(pricingPO.getLServicesLink()).to.eventually.contain(blockLink);
    });

    this.When(/^I click on the block5 (.*)$/, (blockTitle: string) => {
        pricingPO.getBlockLearningServices().click();
    });

    this.Then(/^I land on the link5 (.*)$/, (blockLink: string) => {
        browser.sleep(3000);
        var PTC_WINDOW=1;
        specHelper.switchWindow(PTC_WINDOW);
        headerFooter.runOnNonAngular(()=> {
            browser.sleep(10000);
            this.expect(headerFooter.getURL()).to.eventually.contain(blockLink);
        });
        headerFooter.getBrowserErrors((logs: any) => {
            console.log('Log message is' + logs);
        });
    });

    this.Then(/^I see the block6 (.*) and the link6 (.*)$/, (blockTitle: string, blockLink: string) => {
        expect(pricingPO.getBlockTrainingAdvisor()).to.eventually.contain(blockTitle);
        expect(pricingPO.getTrainingAdvisorLink().getAttribute('href')).to.eventually.contain(blockLink);
    });

    this.When(/^I click on the block6 (.*)$/, (blockTitle: string) => {
        pricingPO.getTrainingAdvisorLink().click();
    });

    this.Then(/^I land on the link6 (.*)$/, (blockLink: string) => {
        browser.sleep(3000);
        var PTC_WINDOW=1;
        specHelper.switchWindow(PTC_WINDOW);
        headerFooter.runOnNonAngular(()=> {
            browser.sleep(10000);
            this.expect(headerFooter.getURL()).to.eventually.contain(blockLink);
        });
    });
}

module.exports = pricingSpec;