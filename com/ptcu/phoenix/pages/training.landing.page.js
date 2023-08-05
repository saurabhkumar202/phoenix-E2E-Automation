"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const header_footer_page_1 = require("./header.footer.page");
let locRepo = require('../resources/locatorRepository.json');
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
class trainingLandingPage extends header_footer_page_1.HeaderFooter {
    getTrainingPageHeading() {
        return protractor_1.element(this.getLocator(locRepo.trainingLandingPage.pageHeading)).getText();
    }
    getTrainingPageDescription() {
        return protractor_1.element(this.getLocator(locRepo.trainingLandingPage.pageHeadingDescription)).getText();
    }
    getTrainingPageTitle() {
        return this.getPageTitle();
    }
    getEnterpriseBanner() {
        return protractor_1.element(this.getLocator(locRepo.trainingLandingPage.btnEntTrainingLearnMore));
    }
    getWhatWeOffer() {
        return protractor_1.element.all(this.getLocator(locRepo.trainingLandingPage.offerings));
    }
    getFreeCoursesBlock() {
        return protractor_1.element(this.getLocator(locRepo.trainingLandingPage.freeCourseBlock));
    }
    getVideoLibraryBlock() {
        return protractor_1.element(this.getLocator(locRepo.trainingLandingPage.videoLibraryBlock));
    }
    getElearningBlock() {
        return protractor_1.element(this.getLocator(locRepo.trainingLandingPage.enterpriseELearningBlock));
    }
    getLearningPathBlock() {
        return protractor_1.element(this.getLocator(locRepo.trainingLandingPage.learningPathBlock));
    }
    getTrainingFeatures() {
        return protractor_1.element.all(this.getLocator(locRepo.trainingLandingPage.trainingFeatures));
    }
}
exports.trainingLandingPage = trainingLandingPage;
