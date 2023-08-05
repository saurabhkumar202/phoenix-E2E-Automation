"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const header_footer_page_1 = require("../pages/header.footer.page");
const whats_new_page_1 = require("../pages/whats.new.page");
const protractor_1 = require("protractor");
const specHelper_1 = require("../utils/specHelper");
function headerFooterSpecs() {
    var headerFooter = new header_footer_page_1.HeaderFooter();
    var whatsNew = new whats_new_page_1.WhatsNew();
    var specHelper = new specHelper_1.SpecHelper();
    this.When(/^I browse 'Training' from the header/, () => {
        headerFooter.goToTraining();
        //headerFooter.getBrowserErrors();
    });
    this.Then(/^I should go to training page$/, () => {
        this.expect(protractor_1.browser.getCurrentUrl()).to.be.eventually.equals(protractor_1.browser.params.URLOptions.iotuURL + '/training');
    });
    this.When(/^I browse 'Pricing' from the header$/, () => {
        headerFooter.goToPricing();
    });
    this.Then(/^I should go to Enterprise training page$/, () => {
        this.expect(protractor_1.browser.getCurrentUrl()).to.be.eventually.equals(protractor_1.browser.params.URLOptions.iotuURL + '/pricing');
    });
    this.When(/^I browse 'About' from the header$/, () => {
        headerFooter.goToAbout();
    });
    this.Then(/^I should go to About us page of PTCU$/, () => {
        this.expect(protractor_1.browser.getCurrentUrl()).to.be.eventually.equals(protractor_1.browser.params.URLOptions.iotuURL + '/about-us');
    });
    this.When(/^I browse 'Blog' from the header$/, () => {
        headerFooter.goToBlog();
    });
    this.Then(/^I should go to Blog application of PTCU$/, () => {
        headerFooter.runOnNonAngular(() => {
            protractor_1.browser.sleep(10000);
            this.expect(protractor_1.browser.getCurrentUrl()).to.be.eventually.equals(protractor_1.browser.params.URLOptions.blogURL);
        }).catch((error) => {
            console.log("Promise got rejected");
            console.log("error is " + error);
        });
    });
    this.When(/^I browse 'Free Course' from the footer$/, () => {
        headerFooter.goToFreeCoursesFromFooter();
    });
    this.Then(/^I should go to catalog page$/, () => {
        this.expect(protractor_1.browser.getCurrentUrl()).to.be.eventually.equals(protractor_1.browser.params.URLOptions.iotuURL + '/catalog');
    });
    this.When(/^I browse 'Tutorials' from the footer$/, () => {
        headerFooter.goToTutorialsFromFooter();
    });
    this.Then(/^I should go to tutorials page$/, () => {
        this.expect(protractor_1.browser.getCurrentUrl()).to.be.eventually.equals(protractor_1.browser.params.URLOptions.iotuURL + '/video-library');
    });
    this.When(/^I browse 'For Enterprise' from the footer$/, () => {
        headerFooter.goToPricingFromFooter();
    });
    this.When(/^I browse 'About' from the footer$/, () => {
        headerFooter.goToAboutFromFooter();
    });
    this.When(/^I browse 'Blog' from the footer$/, () => {
        headerFooter.goToBlogFromFooter();
    });
    this.When(/^I browse 'eLearning Libraries' from the footer$/, () => {
        headerFooter.goToElearningLibrariesFromFooter();
    });
    this.Then(/^I should go to PLMS page$/, () => {
        var PTCU_ENTERPRISE_WINDOW = 1;
        specHelper.switchWindow(PTCU_ENTERPRISE_WINDOW);
        headerFooter.runOnNonAngular(() => {
            //  browser.sleep(10000);
            this.expect(protractor_1.browser.driver.getCurrentUrl()).to.be.eventually.contains(protractor_1.browser.params.URLOptions.enterpriseURL);
        });
        /* headerFooter.getBrowserErrors((logs:any)=>{
             console.log('Log is Severe and message is'+logs);
           this.expect(logs.length).to.equal(0);
         });*/
    });
    this.When(/^I browse 'Instructor\-Led Training' from the footer$/, () => {
        headerFooter.goToInstructoLedTrainingFromFooter();
    });
    this.Then(/^I should go to Find a Training Page on the support site of PTC$/, () => {
        protractor_1.browser.sleep(4000);
        var SUPPORT_WINDOW = "1";
        specHelper.switchWindow(SUPPORT_WINDOW);
        this.expect(protractor_1.browser.getCurrentUrl()).to.be.eventually.contains(protractor_1.browser.params.URLOptions.supportURL + '/apps/ext/training/search.jsp?product=');
    });
    this.When(/^I browse 'MakerLabs' from the footer$/, () => {
        headerFooter.goToMakersLabFromFooter();
    });
    this.Then(/^I should go to Talk to a Training Advisor page of PTC site$/, () => {
        var PTC_WINDOW = 1;
        specHelper.switchWindow(PTC_WINDOW);
        headerFooter.runOnNonAngular(() => {
            protractor_1.browser.sleep(10000);
            this.expect(protractor_1.browser.driver.getCurrentUrl()).to.be.eventually.contains(protractor_1.browser.params.URLOptions.PTCURL + '/en/education');
        });
        /*headerFooter.getBrowserErrors((logs:any)=>{
            console.log('Log is Severe and message is'+logs);
            this.expect(logs.length).to.equal(0);
        });*/
    });
    this.When(/^I browse 'Specializations' from the footer$/, () => {
        headerFooter.goToSpecializationsFromFooter();
        protractor_1.browser.sleep(10000);
    });
    this.Then(/^I should go to specialization page of PTCU$/, () => {
        this.expect(protractor_1.browser.getCurrentUrl()).to.be.eventually.equals(protractor_1.browser.params.URLOptions.iotuURL + '/enrollment/specialization/thingworx-iot-developer-specialization');
        /*  headerFooter.getBrowserErrors((logs:any)=>{
              console.log('Log is Severe and message is'+logs);
              this.expect(logs.length).to.equal(0);
          });*/
    });
    this.When(/^I browse 'Learning Services' from the footer$/, () => {
        headerFooter.goToLearningServicesFromFooter();
    });
    this.Then(/^I should go to learning services page of PTC site$/, () => {
        protractor_1.browser.sleep(3000);
        var PTC_WINDOW = 1;
        specHelper.switchWindow(PTC_WINDOW);
        headerFooter.runOnNonAngular(() => {
            this.expect(headerFooter.getURL()).to.be.eventually.equals(protractor_1.browser.params.URLOptions.PTCURL + '/en/education/learning-services');
        });
        headerFooter.getBrowserErrors((logs) => {
            console.log('Log is Severe and message is' + logs);
            this.expect(logs.length).to.equal(0);
        });
    });
    this.When(/^I browse 'Forum' from the footer$/, () => {
        headerFooter.goToForumFromFooter();
    });
    this.Then(/^I should go to forum homepage$/, () => {
        var PTCU_WINDOW = 0;
        var FORUM_WINDOW = 1;
        specHelper.switchWindow(FORUM_WINDOW);
        headerFooter.runOnNonAngular(() => {
            //  browser.driver.sleep(10000);
            this.expect(protractor_1.browser.getCurrentUrl()).to.be.eventually.equals(protractor_1.browser.params.URLOptions.forumURL);
        });
    });
    this.When(/^I browse 'Support' from the footer$/, () => {
        headerFooter.gotToPTCUSupportFromFooter();
    });
    this.Then(/^I should go to overview section of help page$/, () => {
        this.expect(protractor_1.browser.getCurrentUrl()).to.be.eventually.equals(protractor_1.browser.params.URLOptions.iotuURL + '/help');
    });
    this.When(/^I browse 'Resources' from the footer$/, () => {
        headerFooter.goToResourcesFromFooter();
    });
    this.Then(/^I should go to resources page$/, () => {
        // Write code here that turns the phrase above into concrete actions
        // callback(null, 'pending');
        this.expect(protractor_1.browser.getCurrentUrl()).to.be.eventually.equals(protractor_1.browser.params.URLOptions.iotuURL + '/resources');
        headerFooter.getBrowserErrors((logs) => {
            console.log('Log is Severe and message is' + logs);
            this.expect(logs.length).to.equal(0);
        });
    });
    this.When(/^I browse 'What's New' from the footer$/, () => {
        headerFooter.goToWhatsNewFromFooter();
    });
    this.Then(/^I should see the Whats New modal$/, () => {
        this.expect(whatsNew.getWhatsNewModal()).to.be.displayed;
    });
    this.When(/^I browse Contact Us from the footer$/, () => {
        headerFooter.goToContactUs();
    });
    this.Then(/^I should go to the contact us section of help page$/, () => {
        this.expect(headerFooter.getURL()).to.eventually.be.equals(protractor_1.browser.params.URLOptions.iotuURL + '/contact-us');
    });
    this.When(/^I browse 'Privacy Policy' from the footer$/, () => {
        headerFooter.goToPrivacyPolicy();
    });
    this.Then(/^I should go to a privacy policy page of PTC site$/, () => {
        protractor_1.browser.sleep(3000);
        var PTC_WINDOW = 1;
        specHelper.switchWindow(PTC_WINDOW);
        headerFooter.runOnNonAngular(() => {
            //   browser.sleep(10000);
            this.expect(protractor_1.browser.getCurrentUrl()).to.eventually.be.equals(protractor_1.browser.params.URLOptions.PTCURL + '/en/documents/policies/privacy');
        });
    });
    this.When(/^I browse 'Terms of Use' from the footer$/, () => {
        headerFooter.goToTermsOfUse();
        protractor_1.browser.sleep(10000);
    });
    this.Then(/^I should go to Terms of Use section of help page$/, () => {
        var PTCU_WINDOW = 0;
        var PTC_WINDOW = 1;
        specHelper.switchWindow(PTC_WINDOW);
        this.expect(headerFooter.getURL()).to.be.eventually.equals(protractor_1.browser.params.URLOptions.iotuURL + '/terms-of-use');
    });
}
exports.headerFooterSpecs = headerFooterSpecs;
module.exports = headerFooterSpecs;
