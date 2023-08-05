import {HeaderFooter} from "./header.footer.page";
import {browser, element} from "protractor";
import {browseTutorialsPage} from "./browse.videoLibrary.page";
let locRepo = require('../resources/locatorRepository.json');
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const should=chai.should();

export class searchTutorialsPage extends browseTutorialsPage {

    getNoResultsMessage()
    {
        return element(this.getLocator(locRepo.searchTutorialPage.noResultFound)).getText().then(function (message) {
            return message;
        })
    }

    getTryChangingKeywordsMessage()
    {
        return element(this.getLocator(locRepo.searchTutorialPage.changeKeywords)).getText().then(function (message) {
            return message;
        })
    }

    getSearchTermMessage()
    {
        return element(this.getLocator(locRepo.tutorialLandingPage.searchTermMessageLabel)).getText();
    }

    setSharedURLinBrowser(sharedUrl: string)
    {
        browser.manage().deleteAllCookies();
        browser.get(sharedUrl);
    }
}