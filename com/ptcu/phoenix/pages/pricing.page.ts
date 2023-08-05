import {by, element} from "protractor";
import {HeaderFooter} from "./header.footer.page";

let locRepo = require('../resources/locatorRepository.json');
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

export class pricingPage extends HeaderFooter {
    getPricingFromHeader() {
        return element(this.getLocator(locRepo.pricing.lnkPricingHeader)).click();
    }

    getSignInAndRegister() {
        return element(this.getLocator(locRepo.header.pageHeader)).getText();
    }

    getPricingFromFooter() {
        return element(this.getLocator(locRepo.pricing.lnkPricingFooter)).click();
    }

    getPageHeading() {
        return element(this.getLocator(locRepo.pricing.txtPageHeading)).getText();
    }

    getPageHeadingDesc() {
        return element(this.getLocator(locRepo.pricing.txtHeadingDesc)).getText();
    }

    getBtnViewOfferings() {
        return element(this.getLocator(locRepo.pricing.btnViewOfferings)).getText();
    }

    clickBtnViewOfferings() {
        return element(this.getLocator(locRepo.pricing.btnViewOfferings)).click();
    }

    getOfferTable() {
        return element(this.getLocator(locRepo.pricing.tableWhatWeOffer));
    }

    getMarketingSectionTitle() {
        return element(this.getLocator(locRepo.pricing.sectionMarketingTitle)).getText();
    }

    getMarketingSectionDesc() {
        return element(this.getLocator(locRepo.pricing.sectionMarketingDesc)).getText();
    }

    marketingImageInCard(ImageName: string): any {
        return element.all(this.getLocator(locRepo.pricing.marketingCardImages)).filter((b) => {
            return b.getAttribute('src').then((getImageName) => {
                return getImageName.includes(ImageName);
            });
        });
    }

    locateImageInCard(ImageName: string) {
        return this.marketingImageInCard(ImageName).count();
    }

    titleInCard(title: string) {
        return element.all(this.getLocator(locRepo.pricing.marketingCardTitle)).filter((a) => {
            return a.getText().then((getTitle) => {
                return title.includes(getTitle);
            });
        });
    }

    getTitleInCard(title: string) {
        return this.titleInCard(title).count();
    }

    descriptionInCard(description: string) {
        return element.all(this.getLocator(locRepo.pricing.marketingCardDesc)).filter((a) => {
            return a.getText().then((getDescription) => {
                return getDescription.includes(description);
            });
        });
    }

    getDescriptionInCard(description: string) {
        return this.descriptionInCard(description).count();
    }

    item1InOffer(item: string) {
        return element.all(this.getLocator(locRepo.pricing.item1)).filter((a) => {
            return a.getText().then((getItemName) => {
                return getItemName === item;
            });
        });
    }

    getItem1InOffer(item: string) {
        return this.item1InOffer(item).count();
    }

    sectionAbtOffering() {
        return element(this.getLocator(locRepo.pricing.secAbtOffering));
    }

    sectionAbtOfferingTitle() {
        return element(this.getLocator(locRepo.pricing.secAbtOfferingTitle)).getText();
    }

    blockeLearningTitle() {
        return element(this.getLocator(locRepo.pricing.blockELearning)).getText();
    }

    blockeLearnLink() {
        return element(this.getLocator(locRepo.pricing.blockELearningLnk)).getAttribute('href');
    }

    blockILTTitle() {
        return element(this.getLocator(locRepo.pricing.blockILTTitleTxt));
    }

    getBlockILTTitle(){
        return element(this.getLocator(locRepo.pricing.blockILTTitleTxt)).getText();
    }

    blockILTLink() {
        return element(this.getLocator(locRepo.pricing.blockILTLnk)).getAttribute('href');
    }

    blockMakerLab(){
        return element(this.getLocator(locRepo.pricing.blockMakerLabTitle)).getText();
    }

    getMakerLabLink(){
       return element(this.getLocator(locRepo.pricing.lnkMakerLab)).getAttribute('href');
    }

    getMakerLabBlock(){
        return element(this.getLocator(locRepo.pricing.blockMakerLabTitle));
    }

    getBlockTWXSpec(){
        return element(this.getLocator(locRepo.pricing.blockTWXSpec));
    }

    getTWXSpecLink(){
        return element(this.getLocator(locRepo.pricing.lnkTWXSpec)).getAttribute('href');
    }

    getBlockLearningServices(){
        return element(this.getLocator(locRepo.pricing.blockLearnServices));
    }

    getLServicesLink(){
        return element(this.getLocator(locRepo.pricing.lnkLearningServices)).getAttribute('href');
    }

    getBlockTrainingAdvisor(){
        return element(this.getLocator(locRepo.pricing.blockTrainingAdvisor)).getText();
    }

    getTrainingAdvisorLink(){
        return element(this.getLocator(locRepo.pricing.lnkBlockTrainingAdvisor));
    }
}