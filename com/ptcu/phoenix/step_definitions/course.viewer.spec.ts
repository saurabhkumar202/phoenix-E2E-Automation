import {MyLearningPage} from "../pages/my.learning.page";
import {StudentDataHelper} from "../utils/studentDataHelper";
import{CourseViewerPage} from "../pages/course.viewer.page";
import {browser, by, element} from "protractor";
import {freeCourseEnrollmentSpecs} from "./free.course.enrollment.spec";
import {DataProvider} from "../resources/dataProvider";
const myLearningPage=new MyLearningPage();
var courseViewerPage=new CourseViewerPage();

const chai = require("chai").use(require("chai-smoothie"));
const expect = chai.expect;

export function courseViewerSpec(){

    this.When(/^he launch an enrolled course from My Learning Active course list$/, function () {
        // Write code here that turns the phrase above into concrete actions
        browser.sleep(8000);
        myLearningPage.myLearning().click();
        browser.sleep(3000);
        browser.refresh();
        var course= StudentDataHelper.getCourse(2);
        console.log("course Name is "+course);
        myLearningPage.findAnActiveCourse(course).first().click();
        browser.sleep(10000);

    });

    this.Then(/^he should be able to traverse and complete it$/, function () {
        // Write code here that turns the phrase above into concrete actions

        courseViewerPage.traverseCourseViewer();
        expect(courseViewerPage.getCourseCompletionPercentage()).to.be.eventually.equals('100% COMPLETE');
        //expect(element(by.xpath('//course-view/div/div[1]/div/div[2]')).getText()).to.be.eventually.equals('100% COMPLETE');
    });

    this.Then(/^he should be able to see it in My Learning completed course list$/, function () {
        // Write code here that turns the phrase above into concrete actions
        browser.waitForAngularEnabled(true);
        browser.get(browser.params.URLOptions.iotuURL);
    })
}
module.exports = courseViewerSpec;