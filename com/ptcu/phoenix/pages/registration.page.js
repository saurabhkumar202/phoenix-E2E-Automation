"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const header_footer_page_1 = require("./header.footer.page");
const studentDataHelper_1 = require("../utils/studentDataHelper");
const protractor_1 = require("protractor");
let locRepo = require('../resources/locatorRepository.json');
let dataRepo = require("../resources/studentData.json");
class Registration extends header_footer_page_1.HeaderFooter {
    doRegister() {
        this.goToRegister();
    }
    fillFormAndSubmit(data) {
        //let studentDataHelper= new StudentDataHelper();
        protractor_1.element(this.getLocator(locRepo.userRegisterForm.firstName)).sendKeys(data.firstName);
        protractor_1.element(this.getLocator(locRepo.userRegisterForm.lastName)).sendKeys(data.lastName);
        protractor_1.element(this.getLocator(locRepo.userRegisterForm.email)).sendKeys(data.email);
        studentDataHelper_1.StudentDataHelper.updateEmail(2, data.email);
        console.log('Student email is ' + data.email);
        // dataRepo.Students[2].email=data.email; commented for student
        /* console.log('Student email id is '+dataRepo.Students[2].email);
         console.log('Student email id is '+dataRepo.Students[1].email);
         console.log('Student email id is '+dataRepo.Students[0].email);*/
        protractor_1.element(this.getLocator(locRepo.userRegisterForm.country)).$('[value="' + data.country + '"]').click();
        protractor_1.element(this.getLocator(locRepo.userRegisterForm.organization)).sendKeys(data.organization);
        protractor_1.element(this.getLocator(locRepo.userRegisterForm.job)).$('[value="' + data.job + '"]').click();
        protractor_1.element(this.getLocator(locRepo.userRegisterForm.password)).sendKeys(data.password);
        protractor_1.element(this.getLocator(locRepo.userRegisterForm.confirmPassword)).sendKeys(data.confirmPassword);
        studentDataHelper_1.StudentDataHelper.updatePassword(2, data.password);
        console.log('Student password is ' + data.password);
        //dataRepo.Students[2].password=data.password;; commented for student
        protractor_1.element(this.getLocator(locRepo.userRegisterForm.acceptTermOfUse)).click();
        protractor_1.element(this.getLocator(locRepo.userRegisterForm.acknowledgePrivacyPolicy)).click();
        protractor_1.element(this.getLocator(locRepo.userRegisterForm.createAccountButton)).click();
    }
}
exports.Registration = Registration;
