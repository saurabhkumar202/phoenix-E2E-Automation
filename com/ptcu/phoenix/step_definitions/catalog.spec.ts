import {catalogPage} from "../pages/catalog.page";

const chai = require("chai").use(require("chai-smoothie"));
const expect = chai.expect;

export function catalogSpec() {
    var catalogPagePO = new catalogPage();

    this.Then(/^I should see the "([^"]*)" page title in the banner$/, (pageTitle: string) => {
        expect(catalogPagePO.getFreeCoursesPageTitle()).to.be.eventually.equals(pageTitle);
    });

    this.Then(/^I should see the (.*), (.*) and (.*) in the course thumbnail$/,
        (image: boolean, courseTitle: string, courseLevel: string) => {
            expect(catalogPagePO.locateCourseTitleInDeck(courseTitle))
                .to.be.eventually.equals(1);

            expect(catalogPagePO.locateCourseImageInDeck(courseTitle))
                .to.be.eventually.equals(Boolean(image));

            expect(catalogPagePO.courseStatusInDeck(courseTitle))
                .to.be.eventually.equals(courseLevel);
        });
}

module.exports = catalogSpec;