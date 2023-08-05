"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const header_footer_page_1 = require("./header.footer.page");
let locRepo = require('../resources/locatorRepository.json');
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
class tutorialViewPage extends header_footer_page_1.HeaderFooter {
    getTutorialContent() {
        return protractor_1.element(this.getLocator(locRepo.tutorialViewPage.tutorialContent));
    }
    getBreadCrumbsTutsView() {
        return protractor_1.element.all(this.getLocator(locRepo.tutorialViewPage.breadcrumbsTutsView));
    }
    getFamilyFromBreadcrumb() {
        return this.getBreadCrumbsTutsView().get(1).getText();
    }
    getProductFromBreadcrumb() {
        return this.getBreadCrumbsTutsView().get(2).getText();
    }
    versionFromBreadcrumb() {
        return this.getBreadCrumbsTutsView().get(3);
    }
    getVersionFromBreadcrumb() {
        return this.getBreadCrumbsTutsView().get(3).getText();
    }
    selectVersionFromBreadcrumb() {
        this.versionFromBreadcrumb().click();
    }
    productFromBreadCrumb() {
        return this.getBreadCrumbsTutsView().get(2);
    }
    selectProductFromBreadcrumb() {
        this.productFromBreadCrumb().click();
    }
    familyFromBreadcrumb() {
        return this.getBreadCrumbsTutsView().get(1);
    }
    selectFamilyFromBreadcrumb() {
        this.familyFromBreadcrumb().click();
    }
    getTutorialTitle() {
        return protractor_1.element(this.getLocator(locRepo.tutorialViewPage.tutorialTitle))
            .getText();
    }
    getProductName() {
        return protractor_1.element(this.getLocator(locRepo.tutorialViewPage.productName))
            .getText();
    }
    getTutorialType() {
        return protractor_1.element(this.getLocator(locRepo.tutorialViewPage.tutorialType))
            .getText();
    }
    getTutorialAuthor() {
        return protractor_1.element(this.getLocator(locRepo.tutorialViewPage.tutorialAuthor))
            .getText();
    }
    getTutorialVideo() {
        return protractor_1.element(this.getLocator(locRepo.tutorialViewPage.tutorialVideo));
    }
    getTutorialText() {
        return protractor_1.element(this.getLocator(locRepo.tutorialViewPage.tutorialText))
            .getText();
    }
    verifyVersionPreselected() {
        protractor_1.browser.getCurrentUrl().then((currentURL) => {
            expect(currentURL).to.contain('version');
        });
    }
    verifyProductPreselected() {
        protractor_1.browser.getCurrentUrl().then((currentURL) => {
            expect(currentURL).to.contain('product');
        });
    }
    verifyFamilyPreselected() {
        protractor_1.browser.getCurrentUrl().then((currentURL) => {
            expect(currentURL).to.contain('productFamily');
        });
    }
}
exports.tutorialViewPage = tutorialViewPage;
