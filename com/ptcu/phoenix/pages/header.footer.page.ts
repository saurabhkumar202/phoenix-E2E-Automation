import {browser, by, element, ElementFinder, promise} from 'protractor';
import {helperObject} from "../utils/helper";

let locRepo = require('../resources/locatorRepository.json');

export class HeaderFooter extends helperObject {

    public goToSignIn() {
        element(this.getLocator(locRepo.header.signIn)).click();
    }

    public login(uid: string, pwd: string) {
        element(this.getLocator(locRepo.latch.userName)).sendKeys(uid);
        element(this.getLocator(locRepo.latch.passKey)).sendKeys(pwd);
        element(this.getLocator(locRepo.latch.loginBtn)).click();
    }

    public goToTraining() {
        element(this.getLocator(locRepo.header.training)).click();
    }

    public goToPricing() {
        element(this.getLocator(locRepo.header.pricing)).click();
    }

    public goToFreeCourses() {
        element(this.getLocator(locRepo.header.courses)).click();
    }

    public goToVideoLibrary() {
        element(this.getLocator(locRepo.header.training)).click();
        element(this.getLocator(locRepo.header.videoLibrary)).click();

    }


    public goToAbout() {
        element(this.getLocator(locRepo.header.aboutUs)).click();
    }

    public goToBlog() {
        console.log('I am here');
        element.all(this.getLocator(locRepo.header.blog)).first().click();
    }

    hoverOnTraining() {
        return element(this.getLocator(locRepo.header.training));
    }

    goToLearningPathFromHeader() {
        element(this.getLocator(locRepo.header.lnkHeaderLearningPath)).click();
    }

    goToLearningPathFromFooter() {
        element(this.getLocator(locRepo.header.lnkFooterLearningPath)).click();
    }

    public goToBlogFromFooter() {
        element.all(this.getLocator(locRepo.header.blog)).last().click();
    }

    public logout() {
        element(this.getLocator(locRepo.latch.logoutBtn)).click();

    }

    public goToRegister() {
        element(this.getLocator(locRepo.header.register)).click();
    }

    public myLearning() {
        return element(this.getLocator(locRepo.header.mylearning));
    }

    public goToMyLearning(){
        this.myLearning().click();
    }

    skipWhatsNew(){
        return element(this.getLocator(locRepo.footer.help.btnSkipWhatsNew));
    }

    public goToFreeCoursesFromFooter() {
        element.all(this.getLocator(locRepo.header.courses)).last().click();
    }

    public goToTutorialsFromFooter() {
        element.all(this.getLocator(locRepo.footer.tutorials)).last().click();
    }

    public goToPricingFromFooter() {
        element.all(this.getLocator(locRepo.header.pricing)).last().click();
    }

    public goToAboutFromFooter() {
        element.all(this.getLocator(locRepo.header.aboutUs)).last().click();
    }

    public goToElearningLibrariesFromFooter() {
        element(this.getLocator(locRepo.footer.enterprise.eLearningLibraries)).click();
    }

    public goToInstructoLedTrainingFromFooter() {
        element(this.getLocator(locRepo.footer.enterprise.instructorLedTraining)).click();
    }

    public goToMakersLabFromFooter() {
        element(this.getLocator(locRepo.footer.enterprise.makerLabs)).click();
    }

    public goToSpecializationsFromFooter() {
        element(this.getLocator(locRepo.footer.enterprise.specializations)).click();
    }

    public goToLearningServicesFromFooter() {
        element(this.getLocator(locRepo.footer.enterprise.learningServices)).click();
    }

    public goToForumFromFooter() {
        element(this.getLocator(locRepo.footer.help.forum)).click();
    }

    public gotToPTCUSupportFromFooter() {
        element(this.getLocator(locRepo.footer.help.support)).click();
    }

    public goToResourcesFromFooter() {
        element(this.getLocator(locRepo.footer.help.resources)).click();
    }

    public goToWhatsNewFromFooter() {
        element(this.getLocator(locRepo.footer.help.whatsNew)).click();
    }

    public goToContactUs() {
        element(this.getLocator(locRepo.footer.help.contactUs)).click();
    }

    public goToPrivacyPolicy() {
        element(this.getLocator(locRepo.footer.info.privacyPolicy)).click();
    }

    public goToTermsOfUse() {
        element(this.getLocator(locRepo.footer.info.termsOfUse)).click();
    }

    public runOnNonAngular(fn: any) {
        return browser.controlFlow().execute(function () {
            browser.controlFlow().execute(function () {
                browser.waitForAngularEnabled(false);
            });
            browser.controlFlow().execute(fn);
            browser.controlFlow().execute(function () {
                browser.waitForAngularEnabled(true);
            });
        });
    }

    public switchOn(windowHandle: any) {
        var that = this;
        return browser.controlFlow().execute(function () {
            return browser.getAllWindowHandles().then(function (handles) {
                var preserveSync = browser.waitForAngularEnabled();
                var promiseArray: any = [];
                browser.params.windowHandles.PTCU.handle = null;
                browser.params.windowHandles.PTCUEnterprise.handle = null;
                browser.params.windowHandles.PTCSupport.handle = null;
                browser.params.windowHandles.PTC.handle = null;
                browser.params.windowHandles.Forum.handle = null;
                browser.params.windowHandles.Blog.handle = null;
                browser.params.windowHandles.SSO.handle = null;
                handles.forEach(function (handle) {
                    promiseArray.push(that.runOnNonAngular(function () {
                        browser.switchTo().window(handle);
                        browser.getCurrentUrl().then(function (url) {
                            if (/https:\/\/pacific|uat|dev.*.ptcu.com/.test(url)) {
                                browser.params.windowHandles.PTCU.handle = handle;
                            } else if (/pacific-enterprise|enterprise-uat.*.ptcu.com/.test(url)) {
                                browser.params.windowHandles.PTCUEnterprise.handle = handle;
                            }
                            else if (/support.*.ptc.com/.test(url)) {
                                browser.params.windowHandles.PTCSupport.handle = handle;
                            }
                            else if (/www.ptc.com.*/.test(url)) {
                                browser.params.windowHandles.PTC.handle = handle;
                            }
                            else if (/forum.*/.test(url)) {
                                console.log('URL is' + url);
                                browser.params.windowHandles.Forum.handle = handle;
                            }
                            else if (/blog.ptcu.com.*/.test(url)) {
                                browser.params.windowHandles.Blog.handle = handle;
                            }
                            else if (/localhost.*/.test(url)) {
                                browser.params.windowHandles.PTCU.handle = handle;
                            }
                            else if (/sso.*/.test(url)) {
                                browser.params.windowHandles.SSO.handle = handle;
                            }

                        });
                    }));
                });

                return promise.all(promiseArray).then(function () {
                    browser.waitForAngularEnabled(preserveSync);
                    if (windowHandle.handle) {
                        console.log('switched to window');
                        return browser.switchTo().window(windowHandle.handle);
                    }
                    else {
                        (function iife_check_null() {
                            throw new Error("You are trying to switch to the window which doesn't exist");
                        })();
                    }
                });
            });
        });
    }

    public closeAllOtherWindows() {
        var that = this;
        return browser.controlFlow().execute(function () {
            return browser.getAllWindowHandles().then(function (handles) {
                var promiseArr = [];
                promiseArr.push(that.runOnNonAngular(function () {
                    for (var i = 1; i < handles.length; i++) {
                        browser.switchTo().window(handles[i]);
                        //  browser.sleep(5000);
                        browser.close();
                    }
                }));
                return promise.all(promiseArr).then(function () {
                    return browser.switchTo().window(handles[0]);
                    // browser.sleep(15000);
                });
            });
        });

    }


}
