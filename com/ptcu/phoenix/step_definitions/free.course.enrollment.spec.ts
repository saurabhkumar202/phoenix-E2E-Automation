import {DataProvider} from "../resources/dataProvider";
import {HeaderFooter} from "../pages/header.footer.page";
import {FreeCoursesPage} from "../pages/free.courses.page";
import{MyLearningPage} from "../pages/my.learning.page";
import {Login} from "../pages/login.page";
import{StudentCourseEnrollmentPage} from "../pages/student.course.enrollment.page";
import {browser, by, element} from "protractor";
import {StudentDataHelper} from "../utils/studentDataHelper";
import {SpecHelper} from "../utils/specHelper";

let studentDataRepo = require("../resources/studentData.json");

const chai = require("chai").use(require("chai-smoothie"));
const expect = chai.expect;

export function freeCourseEnrollmentSpecs() {

    const data = DataProvider.getRegisterFormData();
    const headerFooter = new HeaderFooter();
    const freeCoursePage = new FreeCoursesPage();
    const myLearningPage=new MyLearningPage();
    const login = new Login();
    const studentCourseEnrollmentPage=new StudentCourseEnrollmentPage();
    // studentDataHelper= new StudentDataHelper();

    this.When(/^he login to IoTU portal$/, function () {
        // Write code here that turns the phrase above into concrete actions
        var spec=new SpecHelper();
         spec.cleanUp();
        headerFooter.goToSignIn();
        headerFooter.runOnNonAngular(function () {
            browser.sleep(3000);
            console.log('Valid student info is '+StudentDataHelper.getEmail(2) +' Password: '+StudentDataHelper.getPassword(2));
            login.doSignin('precisionautomation', 'ptcse1');
            //console.log('Valid student info is'+studentDataRepo.Students[1].email +' Pssword:'+studentDataRepo.Students[1].password );
           // login.doSignin(studentDataRepo.Students[1].email, studentDataRepo.Students[1].password);
        });
    });
    this.When(/^I enroll for a free course$/, function () {
        browser.refresh();
        headerFooter.goToFreeCoursesFromFooter();
        browser.sleep(8000);
        freeCoursePage.clickACourse(studentDataRepo.Students[1].courseToEnroll);
        studentCourseEnrollmentPage.EnrollACourse();
        browser.sleep(8000);
        StudentDataHelper.updateStatus(2,'Enrolled');
        browser.waitForAngularEnabled(false);
        headerFooter.goToMyLearning();
        browser.waitForAngularEnabled(true);
        // headerFooter.skipWhatsNew().click();
        browser.refresh();
    });

    this.Then(/^I should be able to see it in My Learning$/, function () {
        headerFooter.skipWhatsNew().click();
        expect(myLearningPage.findAnActiveCourse(StudentDataHelper.getCourse(2)).count()).to.be.eventually.equals(1);
    });

}

module.exports = freeCourseEnrollmentSpecs;