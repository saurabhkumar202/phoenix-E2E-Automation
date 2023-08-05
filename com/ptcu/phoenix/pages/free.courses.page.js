"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const header_footer_page_1 = require("./header.footer.page");
const protractor_1 = require("protractor");
class FreeCoursesPage extends header_footer_page_1.HeaderFooter {
    clickACourse(courseName) {
        protractor_1.element(protractor_1.by.xpath("//*[normalize-space(text())='" + courseName + "']")).click();
        protractor_1.browser.sleep(2000);
    }
}
exports.FreeCoursesPage = FreeCoursesPage;
