import {by, element} from "protractor";
import {HeaderFooter} from "./header.footer.page";

let locRepo = require('../resources/locatorRepository.json');
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;



export class trainingLandingPage extends HeaderFooter {
    getTrainingPageHeading() {
        return element(this.getLocator(locRepo.trainingLandingPage.pageHeading)).getText();
    }

    getTrainingPageDescription() {
        return element(this.getLocator(locRepo.trainingLandingPage.pageHeadingDescription)).getText();
    }

    getTrainingPageTitle() {
        return this.getPageTitle();
    }

    getEnterpriseBanner() {
        return element(this.getLocator(locRepo.trainingLandingPage.btnEntTrainingLearnMore));
    }
    getWhatWeOffer(){
        return element.all(this.getLocator(locRepo.trainingLandingPage.offerings));
    }
    getFreeCoursesBlock() {
        return element(this.getLocator(locRepo.trainingLandingPage.freeCourseBlock));
    }
    getVideoLibraryBlock() {
        return element(this.getLocator(locRepo.trainingLandingPage.videoLibraryBlock));
    }
    getElearningBlock() {
        return element(this.getLocator(locRepo.trainingLandingPage.enterpriseELearningBlock));
    }
    getLearningPathBlock() {
        return element(this.getLocator(locRepo.trainingLandingPage.learningPathBlock));
    }
    getTrainingFeatures() {
        return element.all(this.getLocator(locRepo.trainingLandingPage.trainingFeatures));
    }

}