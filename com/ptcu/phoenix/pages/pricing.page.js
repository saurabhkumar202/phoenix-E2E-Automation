"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const header_footer_page_1 = require("./header.footer.page");
let locRepo = require('../resources/locatorRepository.json');
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
class pricingPage extends header_footer_page_1.HeaderFooter {
    getPricingFromHeader() {
        return protractor_1.element(this.getLocator(locRepo.pricing.lnkPricingHeader)).click();
    }
    getSignInAndRegister() {
        return protractor_1.element(this.getLocator(locRepo.header.pageHeader)).getText();
    }
    getPricingFromFooter() {
        return protractor_1.element(this.getLocator(locRepo.pricing.lnkPricingFooter)).click();
    }
    getPageHeading() {
        return protractor_1.element(this.getLocator(locRepo.pricing.txtPageHeading)).getText();
    }
    getPageHeadingDesc() {
        return protractor_1.element(this.getLocator(locRepo.pricing.txtHeadingDesc)).getText();
    }
    getBtnViewOfferings() {
        return protractor_1.element(this.getLocator(locRepo.pricing.btnViewOfferings)).getText();
    }
    clickBtnViewOfferings() {
        return protractor_1.element(this.getLocator(locRepo.pricing.btnViewOfferings)).click();
    }
    getOfferTable() {
        return protractor_1.element(this.getLocator(locRepo.pricing.tableWhatWeOffer));
    }
    getMarketingSectionTitle() {
        return protractor_1.element(this.getLocator(locRepo.pricing.sectionMarketingTitle)).getText();
    }
    getMarketingSectionDesc() {
        return protractor_1.element(this.getLocator(locRepo.pricing.sectionMarketingDesc)).getText();
    }
    marketingImageInCard(ImageName) {
        return protractor_1.element.all(this.getLocator(locRepo.pricing.marketingCardImages)).filter((b) => {
            return b.getAttribute('src').then((getImageName) => {
                return getImageName.includes(ImageName);
            });
        });
    }
    locateImageInCard(ImageName) {
        return this.marketingImageInCard(ImageName).count();
    }
    titleInCard(title) {
        return protractor_1.element.all(this.getLocator(locRepo.pricing.marketingCardTitle)).filter((a) => {
            return a.getText().then((getTitle) => {
                return title.includes(getTitle);
            });
        });
    }
    getTitleInCard(title) {
        return this.titleInCard(title).count();
    }
    descriptionInCard(description) {
        return protractor_1.element.all(this.getLocator(locRepo.pricing.marketingCardDesc)).filter((a) => {
            return a.getText().then((getDescription) => {
                return getDescription.includes(description);
            });
        });
    }
    getDescriptionInCard(description) {
        return this.descriptionInCard(description).count();
    }
    item1InOffer(item) {
        return protractor_1.element.all(this.getLocator(locRepo.pricing.item1)).filter((a) => {
            return a.getText().then((getItemName) => {
                return getItemName === item;
            });
        });
    }
    getItem1InOffer(item) {
        return this.item1InOffer(item).count();
    }
    sectionAbtOffering() {
        return protractor_1.element(this.getLocator(locRepo.pricing.secAbtOffering));
    }
    sectionAbtOfferingTitle() {
        return protractor_1.element(this.getLocator(locRepo.pricing.secAbtOfferingTitle)).getText();
    }
    blockeLearningTitle() {
        return protractor_1.element(this.getLocator(locRepo.pricing.blockELearning)).getText();
    }
    blockeLearnLink() {
        return protractor_1.element(this.getLocator(locRepo.pricing.blockELearningLnk)).getAttribute('href');
    }
    blockILTTitle() {
        return protractor_1.element(this.getLocator(locRepo.pricing.blockILTTitleTxt));
    }
    getBlockILTTitle() {
        return protractor_1.element(this.getLocator(locRepo.pricing.blockILTTitleTxt)).getText();
    }
    blockILTLink() {
        return protractor_1.element(this.getLocator(locRepo.pricing.blockILTLnk)).getAttribute('href');
    }
    blockMakerLab() {
        return protractor_1.element(this.getLocator(locRepo.pricing.blockMakerLabTitle)).getText();
    }
    getMakerLabLink() {
        return protractor_1.element(this.getLocator(locRepo.pricing.lnkMakerLab)).getAttribute('href');
    }
    getMakerLabBlock() {
        return protractor_1.element(this.getLocator(locRepo.pricing.blockMakerLabTitle));
    }
    getBlockTWXSpec() {
        return protractor_1.element(this.getLocator(locRepo.pricing.blockTWXSpec));
    }
    getTWXSpecLink() {
        return protractor_1.element(this.getLocator(locRepo.pricing.lnkTWXSpec)).getAttribute('href');
    }
    getBlockLearningServices() {
        return protractor_1.element(this.getLocator(locRepo.pricing.blockLearnServices));
    }
    getLServicesLink() {
        return protractor_1.element(this.getLocator(locRepo.pricing.lnkLearningServices)).getAttribute('href');
    }
    getBlockTrainingAdvisor() {
        return protractor_1.element(this.getLocator(locRepo.pricing.blockTrainingAdvisor)).getText();
    }
    getTrainingAdvisorLink() {
        return protractor_1.element(this.getLocator(locRepo.pricing.lnkBlockTrainingAdvisor));
    }
}
exports.pricingPage = pricingPage;
