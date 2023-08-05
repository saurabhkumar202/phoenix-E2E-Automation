"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const header_footer_page_1 = require("./header.footer.page");
const protractor_1 = require("protractor");
class StudentCourseEnrollmentPage extends header_footer_page_1.HeaderFooter {
    EnrollACourse() {
        protractor_1.element(protractor_1.by.xpath("//*[normalize-space(text())='" + 'Enroll Now for Free' + "']")).click();
        protractor_1.browser.sleep(4000);
        protractor_1.element(protractor_1.by.xpath("//*[normalize-space(text())='" + 'Enroll Now' + "']")).click();
        protractor_1.browser.sleep(2000);
    }
}
exports.StudentCourseEnrollmentPage = StudentCourseEnrollmentPage;
