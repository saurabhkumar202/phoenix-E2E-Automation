"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataProvider_1 = require("../resources/dataProvider");
const header_footer_page_1 = require("../pages/header.footer.page");
const free_courses_page_1 = require("../pages/free.courses.page");
const my_learning_page_1 = require("../pages/my.learning.page");
const login_page_1 = require("../pages/login.page");
const student_course_enrollment_page_1 = require("../pages/student.course.enrollment.page");
const protractor_1 = require("protractor");
const studentDataHelper_1 = require("../utils/studentDataHelper");
const specHelper_1 = require("../utils/specHelper");
let studentDataRepo = require("../resources/studentData.json");
const chai = require("chai").use(require("chai-smoothie"));
const expect = chai.expect;
function freeCourseEnrollmentSpecs() {
    const data = dataProvider_1.DataProvider.getRegisterFormData();
    const headerFooter = new header_footer_page_1.HeaderFooter();
    const freeCoursePage = new free_courses_page_1.FreeCoursesPage();
    const myLearningPage = new my_learning_page_1.MyLearningPage();
    const login = new login_page_1.Login();
    const studentCourseEnrollmentPage = new student_course_enrollment_page_1.StudentCourseEnrollmentPage();
    // studentDataHelper= new StudentDataHelper();
    this.When(/^he login to IoTU portal$/, function () {
        // Write code here that turns the phrase above into concrete actions
        var spec = new specHelper_1.SpecHelper();
        spec.cleanUp();
        headerFooter.goToSignIn();
        headerFooter.runOnNonAngular(function () {
            protractor_1.browser.sleep(3000);
            console.log('Valid student info is ' + studentDataHelper_1.StudentDataHelper.getEmail(2) + ' Password: ' + studentDataHelper_1.StudentDataHelper.getPassword(2));
            login.doSignin('precisionautomation', 'ptcse1');
            //console.log('Valid student info is'+studentDataRepo.Students[1].email +' Pssword:'+studentDataRepo.Students[1].password );
            // login.doSignin(studentDataRepo.Students[1].email, studentDataRepo.Students[1].password);
        });
    });
    this.When(/^I enroll for a free course$/, function () {
        protractor_1.browser.refresh();
        headerFooter.goToFreeCoursesFromFooter();
        protractor_1.browser.sleep(8000);
        freeCoursePage.clickACourse(studentDataRepo.Students[1].courseToEnroll);
        studentCourseEnrollmentPage.EnrollACourse();
        protractor_1.browser.sleep(8000);
        studentDataHelper_1.StudentDataHelper.updateStatus(2, 'Enrolled');
        protractor_1.browser.waitForAngularEnabled(false);
        headerFooter.goToMyLearning();
        protractor_1.browser.waitForAngularEnabled(true);
        // headerFooter.skipWhatsNew().click();
        protractor_1.browser.refresh();
    });
    this.Then(/^I should be able to see it in My Learning$/, function () {
        headerFooter.skipWhatsNew().click();
        expect(myLearningPage.findAnActiveCourse(studentDataHelper_1.StudentDataHelper.getCourse(2)).count()).to.be.eventually.equals(1);
    });
}
exports.freeCourseEnrollmentSpecs = freeCourseEnrollmentSpecs;
module.exports = freeCourseEnrollmentSpecs;
