import {HeaderFooter} from "./header.footer.page";
import {browser, element} from "protractor";

let locRepo = require('../resources/locatorRepository.json');
const chai = require("chai").use(require("chai-smoothie"));
const expect = chai.expect;

export class learningPathPage extends HeaderFooter {
    verifyLearningPathPage() {
        browser.getCurrentUrl().then((URL: string) => {
            expect(URL).to.contain('learning-paths');
        });
    }

    verifyUserNotLoggedIn() {
        element(this.getLocator(locRepo.header.signIn)).getText().then((signInText: string) => {
            expect(signInText).to.contain('Sign In');
        });
    }

    learningPathInList(LPTitle: string): any {
        return element.all(this.getLocator(locRepo.learningPathsPage.learningPaths)).filter((a) => {
            return a.getText().then((LPInList) => {
                return LPInList === LPTitle;
            });
        });
    }

    locateLPInList(LPTitle: string) {
        return this.learningPathInList(LPTitle).count();
    }

    learningPathImageInList(LPImage: string): any {
        return element.all(this.getLocator(locRepo.learningPathsPage.lpImages)).filter((b) => {
            return b.getAttribute('src').then((LPInList) => {
                return LPInList.includes(LPImage);
            });
        });
    }

    locateLPImageInList(LPImage: string) {
        return this.learningPathImageInList(LPImage).count();
    }
}