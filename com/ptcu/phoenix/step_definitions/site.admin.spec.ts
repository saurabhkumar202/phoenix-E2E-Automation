import {SiteAdminPage} from "../pages/site.admin.page";
let dataRepo = require("../resources/courseData.json");
export function siteAdminSpecs() {

    var siteAdminPage=new SiteAdminPage();
    this.Then(/^I should be able to Public a course$/, () => {

      var courseTitle:string= dataRepo.courses[0].info.title;
      var status:string='Public';
        siteAdminPage.updateCourseStatus(courseTitle,status);
    });

}

module.exports = siteAdminSpecs;