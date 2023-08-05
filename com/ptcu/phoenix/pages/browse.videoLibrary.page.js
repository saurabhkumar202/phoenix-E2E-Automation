"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const videoLibrary_landing_page_1 = require("./videoLibrary.landing.page");
const protractor_1 = require("protractor");
let locRepo = require('../resources/locatorRepository.json');
class browseTutorialsPage extends videoLibrary_landing_page_1.tutorialsLandingPage {
    getBreadCrumbs() {
        return protractor_1.element.all(this.getLocator(locRepo.browseTutorials.breadCrumbs));
    }
    getFamilyFromBreadCrumbs() {
        return this.getBreadCrumbs().get(1).getText();
    }
    getProductFromBreadCrumbs() {
        return this.getBreadCrumbs().get(2).getText();
    }
    getVersionFromBreadCrumbs() {
        return this.getBreadCrumbs().get(3).getText();
    }
    browseBreadCrumb(token) {
        this.getBreadCrumbs().filter(function (elem, index) {
            return elem.getText().then(function (text) {
                return text === token;
            });
        }).first().click();
    }
    browseProduct(product) {
        protractor_1.element.all(this.getLocator(locRepo.browseTutorials.browseProduct)).filter(function (elem, index) {
            return elem.getText().then(function (text) {
                return text.toLowerCase() === (product.toLowerCase());
            });
        }).first().click();
    }
    browseFamily(product) {
        protractor_1.element.all(this.getLocator(locRepo.browseTutorials.browseFamily)).filter(function (elem, index) {
            return elem.getText().then(function (text) {
                return text.toLowerCase() === (product.toLowerCase());
            });
        }).first().click();
    }
    browseLanguage(product) {
        protractor_1.element.all(this.getLocator(locRepo.browseTutorials.browseLanguage)).filter(function (elem, index) {
            return elem.getText().then(function (text) {
                return text.toLowerCase() === (product.toLowerCase());
            });
        }).first().click();
    }
}
exports.browseTutorialsPage = browseTutorialsPage;
