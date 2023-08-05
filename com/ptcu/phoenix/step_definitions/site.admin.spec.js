"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const site_admin_page_1 = require("../pages/site.admin.page");
let dataRepo = require("../resources/courseData.json");
function siteAdminSpecs() {
    var siteAdminPage = new site_admin_page_1.SiteAdminPage();
    this.Then(/^I should be able to Public a course$/, () => {
        var courseTitle = dataRepo.courses[0].info.title;
        var status = 'Public';
        siteAdminPage.updateCourseStatus(courseTitle, status);
    });
}
exports.siteAdminSpecs = siteAdminSpecs;
module.exports = siteAdminSpecs;
