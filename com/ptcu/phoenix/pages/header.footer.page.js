"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const helper_1 = require("../utils/helper");
let locRepo = require('../resources/locatorRepository.json');
class HeaderFooter extends helper_1.helperObject {
    goToSignIn() {
        protractor_1.element(this.getLocator(locRepo.header.signIn)).click();
    }
    login(uid, pwd) {
        protractor_1.element(this.getLocator(locRepo.latch.userName)).sendKeys(uid);
        protractor_1.element(this.getLocator(locRepo.latch.passKey)).sendKeys(pwd);
        protractor_1.element(this.getLocator(locRepo.latch.loginBtn)).click();
    }
    goToTraining() {
        protractor_1.element(this.getLocator(locRepo.header.training)).click();
    }
    goToPricing() {
        protractor_1.element(this.getLocator(locRepo.header.pricing)).click();
    }
    goToFreeCourses() {
        protractor_1.element(this.getLocator(locRepo.header.courses)).click();
    }
    goToVideoLibrary() {
        protractor_1.element(this.getLocator(locRepo.header.training)).click();
        protractor_1.element(this.getLocator(locRepo.header.videoLibrary)).click();
    }
    goToAbout() {
        protractor_1.element(this.getLocator(locRepo.header.aboutUs)).click();
    }
    goToBlog() {
        console.log('I am here');
        protractor_1.element.all(this.getLocator(locRepo.header.blog)).first().click();
    }
    hoverOnTraining() {
        return protractor_1.element(this.getLocator(locRepo.header.training));
    }
    goToLearningPathFromHeader() {
        protractor_1.element(this.getLocator(locRepo.header.lnkHeaderLearningPath)).click();
    }
    goToLearningPathFromFooter() {
        protractor_1.element(this.getLocator(locRepo.header.lnkFooterLearningPath)).click();
    }
    goToBlogFromFooter() {
        protractor_1.element.all(this.getLocator(locRepo.header.blog)).last().click();
    }
    logout() {
        protractor_1.element(this.getLocator(locRepo.latch.logoutBtn)).click();
    }
    goToRegister() {
        protractor_1.element(this.getLocator(locRepo.header.register)).click();
    }
    myLearning() {
        return protractor_1.element(this.getLocator(locRepo.header.mylearning));
    }
    goToMyLearning() {
        this.myLearning().click();
    }
    skipWhatsNew() {
        return protractor_1.element(this.getLocator(locRepo.footer.help.btnSkipWhatsNew));
    }
    goToFreeCoursesFromFooter() {
        protractor_1.element.all(this.getLocator(locRepo.header.courses)).last().click();
    }
    goToTutorialsFromFooter() {
        protractor_1.element.all(this.getLocator(locRepo.footer.tutorials)).last().click();
    }
    goToPricingFromFooter() {
        protractor_1.element.all(this.getLocator(locRepo.header.pricing)).last().click();
    }
    goToAboutFromFooter() {
        protractor_1.element.all(this.getLocator(locRepo.header.aboutUs)).last().click();
    }
    goToElearningLibrariesFromFooter() {
        protractor_1.element(this.getLocator(locRepo.footer.enterprise.eLearningLibraries)).click();
    }
    goToInstructoLedTrainingFromFooter() {
        protractor_1.element(this.getLocator(locRepo.footer.enterprise.instructorLedTraining)).click();
    }
    goToMakersLabFromFooter() {
        protractor_1.element(this.getLocator(locRepo.footer.enterprise.makerLabs)).click();
    }
    goToSpecializationsFromFooter() {
        protractor_1.element(this.getLocator(locRepo.footer.enterprise.specializations)).click();
    }
    goToLearningServicesFromFooter() {
        protractor_1.element(this.getLocator(locRepo.footer.enterprise.learningServices)).click();
    }
    goToForumFromFooter() {
        protractor_1.element(this.getLocator(locRepo.footer.help.forum)).click();
    }
    gotToPTCUSupportFromFooter() {
        protractor_1.element(this.getLocator(locRepo.footer.help.support)).click();
    }
    goToResourcesFromFooter() {
        protractor_1.element(this.getLocator(locRepo.footer.help.resources)).click();
    }
    goToWhatsNewFromFooter() {
        protractor_1.element(this.getLocator(locRepo.footer.help.whatsNew)).click();
    }
    goToContactUs() {
        protractor_1.element(this.getLocator(locRepo.footer.help.contactUs)).click();
    }
    goToPrivacyPolicy() {
        protractor_1.element(this.getLocator(locRepo.footer.info.privacyPolicy)).click();
    }
    goToTermsOfUse() {
        protractor_1.element(this.getLocator(locRepo.footer.info.termsOfUse)).click();
    }
    runOnNonAngular(fn) {
        return protractor_1.browser.controlFlow().execute(function () {
            protractor_1.browser.controlFlow().execute(function () {
                protractor_1.browser.waitForAngularEnabled(false);
            });
            protractor_1.browser.controlFlow().execute(fn);
            protractor_1.browser.controlFlow().execute(function () {
                protractor_1.browser.waitForAngularEnabled(true);
            });
        });
    }
    switchOn(windowHandle) {
        var that = this;
        return protractor_1.browser.controlFlow().execute(function () {
            return protractor_1.browser.getAllWindowHandles().then(function (handles) {
                var preserveSync = protractor_1.browser.waitForAngularEnabled();
                var promiseArray = [];
                protractor_1.browser.params.windowHandles.PTCU.handle = null;
                protractor_1.browser.params.windowHandles.PTCUEnterprise.handle = null;
                protractor_1.browser.params.windowHandles.PTCSupport.handle = null;
                protractor_1.browser.params.windowHandles.PTC.handle = null;
                protractor_1.browser.params.windowHandles.Forum.handle = null;
                protractor_1.browser.params.windowHandles.Blog.handle = null;
                protractor_1.browser.params.windowHandles.SSO.handle = null;
                handles.forEach(function (handle) {
                    promiseArray.push(that.runOnNonAngular(function () {
                        protractor_1.browser.switchTo().window(handle);
                        protractor_1.browser.getCurrentUrl().then(function (url) {
                            if (/https:\/\/pacific|uat|dev.*.ptcu.com/.test(url)) {
                                protractor_1.browser.params.windowHandles.PTCU.handle = handle;
                            }
                            else if (/pacific-enterprise|enterprise-uat.*.ptcu.com/.test(url)) {
                                protractor_1.browser.params.windowHandles.PTCUEnterprise.handle = handle;
                            }
                            else if (/support.*.ptc.com/.test(url)) {
                                protractor_1.browser.params.windowHandles.PTCSupport.handle = handle;
                            }
                            else if (/www.ptc.com.*/.test(url)) {
                                protractor_1.browser.params.windowHandles.PTC.handle = handle;
                            }
                            else if (/forum.*/.test(url)) {
                                console.log('URL is' + url);
                                protractor_1.browser.params.windowHandles.Forum.handle = handle;
                            }
                            else if (/blog.ptcu.com.*/.test(url)) {
                                protractor_1.browser.params.windowHandles.Blog.handle = handle;
                            }
                            else if (/localhost.*/.test(url)) {
                                protractor_1.browser.params.windowHandles.PTCU.handle = handle;
                            }
                            else if (/sso.*/.test(url)) {
                                protractor_1.browser.params.windowHandles.SSO.handle = handle;
                            }
                        });
                    }));
                });
                return protractor_1.promise.all(promiseArray).then(function () {
                    protractor_1.browser.waitForAngularEnabled(preserveSync);
                    if (windowHandle.handle) {
                        console.log('switched to window');
                        return protractor_1.browser.switchTo().window(windowHandle.handle);
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
    closeAllOtherWindows() {
        var that = this;
        return protractor_1.browser.controlFlow().execute(function () {
            return protractor_1.browser.getAllWindowHandles().then(function (handles) {
                var promiseArr = [];
                promiseArr.push(that.runOnNonAngular(function () {
                    for (var i = 1; i < handles.length; i++) {
                        protractor_1.browser.switchTo().window(handles[i]);
                        //  browser.sleep(5000);
                        protractor_1.browser.close();
                    }
                }));
                return protractor_1.promise.all(promiseArr).then(function () {
                    return protractor_1.browser.switchTo().window(handles[0]);
                    // browser.sleep(15000);
                });
            });
        });
    }
}
exports.HeaderFooter = HeaderFooter;
