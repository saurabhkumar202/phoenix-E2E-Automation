import {browseTutorialsPage} from "../pages/browse.videoLibrary.page";
import {browser, by, element} from "protractor";

const {Given, When, Then} = require("cucumber");
import {tutorialsLandingPage} from "../pages/videoLibrary.landing.page";
import {searchTutorialsPage} from "../pages/search.videoLibrary.page";


let locRepo = require('../resources/locatorRepository.json');
const chai = require("chai").use(require("chai-smoothie"));
const expect = chai.expect;

export function searchspec() {

    var tutorialsLandingPageObj = new tutorialsLandingPage();
    var browserTutorialPageObj = new browseTutorialsPage();
    var searchTutorialPageObj = new searchTutorialsPage();

    this.When(/^I search tutorials by (.*) keyword$/, (searchTerm: string) => {
        tutorialsLandingPageObj.typeSearchKeyword(searchTerm);
        tutorialsLandingPageObj.clickSearchIcon();
    });

    this.Then(/^I see the search results based on (.*) keyword$/, (searchTerm: string) => {
        var showingReultLabel = searchTutorialPageObj.getSearchTermMessage();
        expect(showingReultLabel).to.eventually.equals("Showing results for " + "\"" + searchTerm + "\"");

        var searchTerm = "searchTerm=" + searchTerm;
        tutorialsLandingPageObj.getURL().then((currentURL: string) => {
            expect(currentURL).to.contain(searchTerm);
        });

        var searchString = "&language=en&page=1";
        tutorialsLandingPageObj.getURL().then((currentURL: string) => {
            expect(currentURL).to.contain(searchString);
        });
    });

    this.Then(/^I do not see the search results$/, () => {

        var expectedUrl = browser.params.URLOptions.iotuURL + "/video-library";

        tutorialsLandingPageObj.getURL().then((currentURL: string) => {
            expect(currentURL).to.equal(expectedUrl);
        });
    });

    this.Then(/^I see the \'(.*)\' message$/, (message: string) => {
        expect(searchTutorialPageObj.getNoResultsMessage()).to.eventually.equals(message);
        expect(searchTutorialPageObj.getTryChangingKeywordsMessage()).to.eventually.equals("Try changing your keywords and search again.");
    });

    this.When(/^Enter (.*)$/, (searchTerm: string) => {
        tutorialsLandingPageObj.typeSearchKeyword(searchTerm);
    });

    this.When(/^Click reset icon$/, () => {
        tutorialsLandingPageObj.clickResetIcon();
    });

    this.Then(/^I see the search term cleared in search box$/, () => {
        expect(tutorialsLandingPageObj.getSearchKeywordValue()).to.eventually.equals("");
    });

    this.When(/^I filter tutorials by product family$/, () => {
        tutorialsLandingPageObj.clickBrowseProductLink();
        browserTutorialPageObj.browseFamily("Creo");
    });

    this.Then(/^I see the filtered results based on product family$/, () => {
        tutorialsLandingPageObj.getURL().then((currentURL: string) => {
            expect(currentURL).to.contain("productFamily=Creo");
        });
    });

    this.Then(/^I see the filtered results based on product family and product name$/, () => {
        tutorialsLandingPageObj.getURL().then((currentURL: string) => {
            expect(currentURL).to.contain("productFamily=Creo&product=Parametric");
        });
    });

    this.Then(/^I see the filtered results based on product family, product name and product version$/, () => {
        tutorialsLandingPageObj.getURL().then((currentURL) => {
            expect(currentURL).to.contain("productFamily=Creo&product=Parametric&version=5.0");
        });
    });

    this.When(/^I filter tutorials by product name$/, () => {
        browser.waitForAngular();
        browserTutorialPageObj.browseProduct('parametric');
    });

    this.Then(/^I filter tutorials by product release$/, () => {
        browser.waitForAngular();
        browserTutorialPageObj.browseVersion();
    });

    this.When(/^I change language$/, () => {
        browserTutorialPageObj.clickLanguageLink();
        browserTutorialPageObj.browseLanguage("French");
    });

    this.Then(/^I see search results based on language change$/, () => {
        tutorialsLandingPageObj.getURL().then((currentURL) => {
            expect(currentURL).to.contain("language=fr&page=1");
        });
    });

    this.When(/^I share the URL$/, () => {
        tutorialsLandingPageObj.getURL().then((currentURL) => {
            searchTutorialPageObj.setSharedURLinBrowser(currentURL);
        });
    });

    this.Then(/^I see search results based on shared url$/, () => {
        tutorialsLandingPageObj.getURL().then((currentURL) => {
            expect(currentURL).to.contain("video-library/search?searchTerm=Creo&productFamily=Creo&product=Parametric&version=5.0&language=en&page=1");
        });
    });
}

module.exports = searchspec;