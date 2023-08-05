"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const course_author_page_1 = require("../pages/course.author.page");
function courseAuthorSpecs() {
    var courseAuthorPage = new course_author_page_1.CourseAuthorPage();
    this.Then(/^I should be able to author a course$/, () => {
        courseAuthorPage.authorCourse();
    });
}
exports.courseAuthorSpecs = courseAuthorSpecs;
module.exports = courseAuthorSpecs;
