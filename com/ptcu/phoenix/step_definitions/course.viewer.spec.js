"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const my_learning_page_1 = require("../pages/my.learning.page");
const studentDataHelper_1 = require("../utils/studentDataHelper");
const course_viewer_page_1 = require("../pages/course.viewer.page");
const protractor_1 = require("protractor");
const myLearningPage = new my_learning_page_1.MyLearningPage();
var courseViewerPage = new course_viewer_page_1.CourseViewerPage();
const chai = require("chai").use(require("chai-smoothie"));
const expect = chai.expect;
function courseViewerSpec() {
    this.When(/^he launch an enrolled course from My Learning Active course list$/, function () {
        // Write code here that turns the phrase above into concrete actions
        protractor_1.browser.sleep(8000);
        myLearningPage.myLearning().click();
        protractor_1.browser.sleep(3000);
        protractor_1.browser.refresh();
        var course = studentDataHelper_1.StudentDataHelper.getCourse(2);
        console.log("course Name is " + course);
        myLearningPage.findAnActiveCourse(course).first().click();
        protractor_1.browser.sleep(10000);
    });
    this.Then(/^he should be able to traverse and complete it$/, function () {
        // Write code here that turns the phrase above into concrete actions
        courseViewerPage.traverseCourseViewer();
        expect(courseViewerPage.getCourseCompletionPercentage()).to.be.eventually.equals('100% COMPLETE');
        //expect(element(by.xpath('//course-view/div/div[1]/div/div[2]')).getText()).to.be.eventually.equals('100% COMPLETE');
    });
    this.Then(/^he should be able to see it in My Learning completed course list$/, function () {
        // Write code here that turns the phrase above into concrete actions
        protractor_1.browser.waitForAngularEnabled(true);
        protractor_1.browser.get(protractor_1.browser.params.URLOptions.iotuURL);
    });
}
exports.courseViewerSpec = courseViewerSpec;
module.exports = courseViewerSpec;
