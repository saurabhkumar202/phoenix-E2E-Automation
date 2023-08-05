"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const header_footer_page_1 = require("./header.footer.page");
let locRepo = require('../resources/locatorRepository.json');
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
class catalogPage extends header_footer_page_1.HeaderFooter {
    getFreeCoursesPageTitle() {
        return protractor_1.element(this.getLocator(locRepo.catalogPage.freeCoursesPageTitle)).getText();
    }
    courseInDeck(courseTitle) {
        return protractor_1.element.all(this.getLocator(locRepo.catalogPage.courseHeading)).filter((a) => {
            return a.getText().then((courseDeckTitle) => {
                return courseDeckTitle === courseTitle;
            });
        });
    }
    locateCourseTitleInDeck(courseTitle) {
        return this.courseInDeck(courseTitle).count();
    }
    courseImageInDeck(courseTitle) {
        return protractor_1.element.all(this.getLocator(locRepo.catalogPage.courseImage)).filter((b) => {
            return b.getAttribute('alt').then((courseImageName) => {
                return courseImageName === courseTitle;
            });
        });
    }
    locateCourseImageInDeck(courseTitle) {
        return this.courseImageInDeck(courseTitle).isPresent();
    }
    courseStatusInDeck(courseTitle) {
        return protractor_1.element(protractor_1.by.xpath("//*[contains(text(),'" + courseTitle + "')]/following-sibling::div")).getText();
    }
}
exports.catalogPage = catalogPage;
