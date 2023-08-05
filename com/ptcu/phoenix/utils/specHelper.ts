import {browser, by, element, ElementFinder, promise} from 'protractor';
import{HeaderFooter}from'../pages/header.footer.page';
import {ScenarioContext} from "./scenario.context";

const chai = require("chai").use(require("chai-smoothie"));
const expect = chai.expect;
var headerFooter = new HeaderFooter();
export class SpecHelper{

    public login( uid:string, pwd:string){
       // var world =new World();
        browser.waitForAngular();
        headerFooter.login(uid, pwd);
        expect(headerFooter.myLearning()).to.be.displayed;
    }

    public logout(){
        headerFooter.logout();
       // browser.sleep(10000);
    }

    public cleanUp():any{
        //console.log("Initially logging out from cleanup...");
        /*browser.sleep(10000);
        browser.waitForAngular();*/
        ScenarioContext.clearAll();
        headerFooter.switchOn(browser.params.windowHandles.PTCU);
        browser.waitForAngular();
        //Logout
        headerFooter.myLearning().isPresent().then(function (visibility) {
            if (visibility) {
                console.log("logging out from cleanup...");
                headerFooter.logout();
               // browser.sleep(10000);
            } else {
                console.log("didn't logged in.. cleanup");
               // browser.sleep(10000);
            }
        });
        // TBD - Is there any need to clean cookies
       return headerFooter.closeAllOtherWindows();

    }

    public switchWindow(state:any){
        browser.getAllWindowHandles().then(function (handles) {
            var newWindowHandle=handles[state];
            browser.switchTo().window(newWindowHandle);
        })
    }
}