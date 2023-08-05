"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const catalog_page_1 = require("../pages/catalog.page");
const chai = require("chai").use(require("chai-smoothie"));
const expect = chai.expect;
function catalogSpec() {
    var catalogPagePO = new catalog_page_1.catalogPage();
    this.Then(/^I should see the "([^"]*)" page title in the banner$/, (pageTitle) => {
        expect(catalogPagePO.getFreeCoursesPageTitle()).to.be.eventually.equals(pageTitle);
    });
    this.Then(/^I should see the (.*), (.*) and (.*) in the course thumbnail$/, (image, courseTitle, courseLevel) => {
        expect(catalogPagePO.locateCourseTitleInDeck(courseTitle))
            .to.be.eventually.equals(1);
        expect(catalogPagePO.locateCourseImageInDeck(courseTitle))
            .to.be.eventually.equals(Boolean(image));
        expect(catalogPagePO.courseStatusInDeck(courseTitle))
            .to.be.eventually.equals(courseLevel);
    });
}
exports.catalogSpec = catalogSpec;
module.exports = catalogSpec;
