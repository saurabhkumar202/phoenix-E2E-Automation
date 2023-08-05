import {HeaderFooter} from "./header.footer.page"
import {browser, by, element, ElementArrayFinder, ElementFinder} from "protractor";
var siteAdminLocRepo = require('../resources/siteAdminLocatorRepository.json');
export class SiteAdminPage extends HeaderFooter {

    public getAllCourses(){
        return element.all(this.getLocator(siteAdminLocRepo.siteAdmin.courseApprovals.courseList));
    }

    gotoSiteAdmin() {
        element(this.getLocator(siteAdminLocRepo.siteAdmin.goToSiteAdmin)).click();
    }
    public updateCourseStatus(courseName:string,status:string){
        var menu: ElementArrayFinder;
        browser.sleep(10000);
        this.gotoSiteAdmin();
        //element(by.xpath('//a[text()=\' Site Admin \']')).click();
        browser.sleep(10000);
     var elem= this.getAllCourses().filter(function (courseLink) {
            return courseLink.getAttribute('title').then(function (linkName) {
                return linkName==courseName;
            });
        }).first().element(this.getLocator(siteAdminLocRepo.siteAdmin.courseApprovals.courseList.statusButton));
        menu = elem.all(this.getLocator(siteAdminLocRepo.siteAdmin.courseApprovals.courseList.statusList));
        this.selectFromMultiSelectByText(elem, status, menu);
        element(this.getLocator(siteAdminLocRepo.siteAdmin.courseApprovals.statusChangeMessageButton)).click();
       // element(by.xpath('//button[text()=\'Ok\']')).click();

    }

}