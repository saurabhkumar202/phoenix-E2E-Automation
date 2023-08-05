"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const header_footer_page_1 = require("./header.footer.page");
const protractor_1 = require("protractor");
var siteAdminLocRepo = require('../resources/siteAdminLocatorRepository.json');
class SiteAdminPage extends header_footer_page_1.HeaderFooter {
    getAllCourses() {
        return protractor_1.element.all(this.getLocator(siteAdminLocRepo.siteAdmin.courseApprovals.courseList));
    }
    gotoSiteAdmin() {
        protractor_1.element(this.getLocator(siteAdminLocRepo.siteAdmin.goToSiteAdmin)).click();
    }
    updateCourseStatus(courseName, status) {
        var menu;
        protractor_1.browser.sleep(10000);
        this.gotoSiteAdmin();
        //element(by.xpath('//a[text()=\' Site Admin \']')).click();
        protractor_1.browser.sleep(10000);
        var elem = this.getAllCourses().filter(function (courseLink) {
            return courseLink.getAttribute('title').then(function (linkName) {
                return linkName == courseName;
            });
        }).first().element(this.getLocator(siteAdminLocRepo.siteAdmin.courseApprovals.courseList.statusButton));
        menu = elem.all(this.getLocator(siteAdminLocRepo.siteAdmin.courseApprovals.courseList.statusList));
        this.selectFromMultiSelectByText(elem, status, menu);
        protractor_1.element(this.getLocator(siteAdminLocRepo.siteAdmin.courseApprovals.statusChangeMessageButton)).click();
        // element(by.xpath('//button[text()=\'Ok\']')).click();
    }
}
exports.SiteAdminPage = SiteAdminPage;
