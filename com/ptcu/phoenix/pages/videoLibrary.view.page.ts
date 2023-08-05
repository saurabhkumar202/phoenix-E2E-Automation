import {browser, element, ElementArrayFinder} from "protractor";
import {HeaderFooter} from "./header.footer.page";

let locRepo = require('../resources/locatorRepository.json');
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

export class tutorialViewPage extends HeaderFooter {
    getTutorialContent() {
        return element(this.getLocator(locRepo.tutorialViewPage.tutorialContent));
    }

    getBreadCrumbsTutsView(): ElementArrayFinder {
        return element.all(this.getLocator(locRepo.tutorialViewPage.breadcrumbsTutsView));
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
        return element(this.getLocator(locRepo.tutorialViewPage.tutorialTitle))
            .getText();
    }

    getProductName() {
        return element(this.getLocator(locRepo.tutorialViewPage.productName))
            .getText();
    }

    getTutorialType() {
        return element(this.getLocator(locRepo.tutorialViewPage.tutorialType))
            .getText();
    }

    getTutorialAuthor() {
        return element(this.getLocator(locRepo.tutorialViewPage.tutorialAuthor))
            .getText();
    }

    getTutorialVideo() {
        browser.waitForAngular();
        return element(this.getLocator(locRepo.tutorialViewPage.libraryVideo));
    }

    getTutorialText() {
        return element(this.getLocator(locRepo.tutorialViewPage.tutorialText))
            .getText();
    }

    verifyVersionPreselected() {
        browser.getCurrentUrl().then((currentURL: string) => {
            expect(currentURL).to.contain('version');
        });
    }

    verifyProductPreselected() {
        browser.getCurrentUrl().then((currentURL: string) => {
            expect(currentURL).to.contain('product');
        });
    }

    verifyFamilyPreselected() {
        browser.getCurrentUrl().then((currentURL: string) => {
            expect(currentURL).to.contain('productFamily');
        });
    }

}