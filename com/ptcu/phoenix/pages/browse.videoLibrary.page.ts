import {tutorialsLandingPage} from "./videoLibrary.landing.page";
import {element} from "protractor";
import {ElementArrayFinder} from "protractor/built/element";
import * as webdriver from "selenium-webdriver";
import {showRuleCrashWarning} from "tslint/lib/error";

let locRepo = require('../resources/locatorRepository.json');

export class browseTutorialsPage extends tutorialsLandingPage {

    public getBreadCrumbs(): ElementArrayFinder {
        return element.all(this.getLocator(locRepo.browseTutorials.breadCrumbs));
    }

    public getFamilyFromBreadCrumbs() {
        return this.getBreadCrumbs().get(1).getText();

    }

    public getProductFromBreadCrumbs() {
        return this.getBreadCrumbs().get(2).getText();

    }

    public getVersionFromBreadCrumbs() {
        return this.getBreadCrumbs().get(3).getText();
    }

    public browseBreadCrumb(token: string) {
        this.getBreadCrumbs().filter(function (elem, index) {
            return elem.getText().then(function (text) {
                return text === token;
            });
        }).first().click();
    }

    public browseProduct(product: string) {
        element.all(this.getLocator(locRepo.browseTutorials.browseProduct)).filter(function (elem, index) {
            return elem.getText().then(function (text) {
                return text.toLowerCase() === (product.toLowerCase());
            });
        }).first().click();
    }

    public browseFamily(product: string) {
        element.all(this.getLocator(locRepo.browseTutorials.browseFamily)).filter(function (elem, index) {
            return elem.getText().then(function (text) {
                return text.toLowerCase() === (product.toLowerCase());
            });
        }).first().click();
    }

    public browseLanguage(product: string) {
        element.all(this.getLocator(locRepo.browseTutorials.browseLanguage)).filter(function (elem, index) {
            return elem.getText().then(function (text) {
                return text.toLowerCase() === (product.toLowerCase());
            });
        }).first().click();
    }
}