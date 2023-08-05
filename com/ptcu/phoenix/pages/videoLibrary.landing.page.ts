import {HeaderFooter} from "./header.footer.page";
import {browser, by, element} from "protractor";
let locRepo = require('../resources/locatorRepository.json');
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const should=chai.should();

export class tutorialsLandingPage extends HeaderFooter {

    static firstTutTitle : any;
    static firstTutClassification : any;
    static firstTutDesc : any;

    public browseVersion() {
        element(this.getLocator(locRepo.selectVersion)).click();
    }

    getFirstTutorial()
    {
        browser.waitForAngular();
        return element.all(this.getLocator(locRepo.tutorialLandingPage.tutorialList)).first();
    }

    getFirstTutorialTitle()
    {
        browser.waitForAngular();
        return this.getFirstTutorial().element(by.xpath("./app-tutorial-tile/a/section[2]/h3")).getText();
    }

    getFirstTutorialClassification()
    {
        browser.waitForAngular();
        return this.getFirstTutorial().element(by.xpath("./app-tutorial-tile/a/section[2]/dl/dd")).getText();
    }

    getFirstTutorialDesc()
    {
        browser.waitForAngular();
        return this.getFirstTutorial().element(by.xpath("./app-tutorial-tile/a/section[2]/span[1]")).getText();
    }

    getFirstTutorialDetails()
    {
        this.getFirstTutorialTitle().then( (result:any)=> {
            tutorialsLandingPage.firstTutTitle = result;
        });

        this.getFirstTutorialClassification().then( (result:any)=> {
            tutorialsLandingPage.firstTutClassification = result;
        });

        this.getFirstTutorialDesc().then( (result:any)=> {
            tutorialsLandingPage.firstTutDesc = result;
            });
    }

    selectFirstTutorial(){
        browser.waitForAngular();
        element.all(this.getLocator(locRepo.tutorialLandingPage.firstTutorial))
            .first().click();
    }

    typeSearchKeyword(searchTerm: string) {
        element(this.getLocator(locRepo.tutorialHomePage.searchTextbox)).sendKeys(searchTerm);
    }

    clickSearchIcon() {
        element(this.getLocator(locRepo.tutorialHomePage.searchIcon)).click();
    }

    clickResetIcon() {
        element(this.getLocator(locRepo.tutorialHomePage.searchResetIcon)).click();
    }

    getSearchKeywordValue() {
        return element(this.getLocator(locRepo.tutorialHomePage.searchTextbox)).getText().then(function (searchTerm) {
            return searchTerm;
        });
    }

    clickBrowseProductLink()
    {
        element(this.getLocator(locRepo.browseTutorials.productLink)).click();
    }

    clickLanguageLink()
    {
        element(this.getLocator(locRepo.browseTutorials.languageLink)).click();
    }

    featuredTutorialsCarousal(){
        return element(this.getLocator(locRepo.tutorialLandingPage.featuredTutorials));
    }

    getFeaturedTutorialLaneTitle(){
        return element(this.getLocator(locRepo.tutorialLandingPage.featuredTutorialLaneTitle))
            .getText();
    }

    selectFirstFeaturedTutorial(){
        element(this.getLocator(locRepo.tutorialLandingPage.viewTutorial)).click();
    }

    getPopularTutorialLaneTitle(){
        return element(this.getLocator(locRepo.tutorialLandingPage
            .popularTutorialLaneTitle)).getText();
    }

    getPopularSwimlane(){
        return element(this.getLocator(locRepo.tutorialLandingPage.popularSwimlane));
    }

    getTutorialsInPopularSwimlane(){
        return this.getPopularSwimlane().all(this.getLocator(locRepo.tutorialLandingPage.swimLaneItem));
    }

    getPopularTutorialCount(){
        return this.getTutorialsInPopularSwimlane().count();
    }

    selectFirstPopularTutorial(){
        this.getTutorialsInPopularSwimlane().first().click();
    }

    getRecentTutorialLaneTitle(){
        return element(this.getLocator(locRepo.tutorialLandingPage
            .recentTutorialLaneTitle)).getText();
    }

    getRecentlyAddedSwimlane(){
        return element(this.getLocator(locRepo.tutorialLandingPage.recentlyAddedSwimlane));
    }

    getTutorialsInRecentlyAddedSwimlane(){
        return this.getRecentlyAddedSwimlane()
            .all(this.getLocator(locRepo.tutorialLandingPage.swimLaneItem));
    }

    getRecentTutorialsCount(){
        return this.getTutorialsInRecentlyAddedSwimlane().count();
    }

    selectFirstRecentTutorial(){
        this.getTutorialsInRecentlyAddedSwimlane().first().click();
    }

}