import {by, element} from "protractor";
import {HeaderFooter} from "./header.footer.page";

let locRepo = require('../resources/locatorRepository.json');
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

export class catalogPage extends HeaderFooter {
    getFreeCoursesPageTitle() {
        return element(this.getLocator(locRepo.catalogPage.freeCoursesPageTitle)).getText();
    }

    courseInDeck(courseTitle: string): any {
        return element.all(this.getLocator(locRepo.catalogPage.courseHeading)).filter((a) => {
            return a.getText().then((courseDeckTitle) => {
                return courseDeckTitle === courseTitle;
            });
        });
    }

    locateCourseTitleInDeck(courseTitle: string) {
        return this.courseInDeck(courseTitle).count();
    }

    courseImageInDeck(courseTitle: string) {
        return element.all(this.getLocator(locRepo.catalogPage.courseImage)).filter((b) => {
            return b.getAttribute('alt').then((courseImageName) => {
                return courseImageName === courseTitle;
            });
        });
    }

    locateCourseImageInDeck(courseTitle: string) {
        return this.courseImageInDeck(courseTitle).isPresent();
    }

    courseStatusInDeck(courseTitle: string) {
        return element(by.xpath("//*[contains(text(),'" + courseTitle + "')]/following-sibling::div")).getText();
    }
}