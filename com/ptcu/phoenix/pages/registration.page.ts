import {HeaderFooter} from "./header.footer.page";
import{StudentDataHelper} from "../utils/studentDataHelper";
import {browser, element} from "protractor";

let locRepo = require('../resources/locatorRepository.json');
let dataRepo = require("../resources/studentData.json");

export class Registration extends HeaderFooter {


    doRegister() {
        this.goToRegister();
    }

    fillFormAndSubmit(data: any) {
        //let studentDataHelper= new StudentDataHelper();
        element(this.getLocator(locRepo.userRegisterForm.firstName)).sendKeys(data.firstName);
        element(this.getLocator(locRepo.userRegisterForm.lastName)).sendKeys(data.lastName);
        element(this.getLocator(locRepo.userRegisterForm.email)).sendKeys(data.email);
        StudentDataHelper.updateEmail(2, data.email);
        console.log('Student email is '+data.email);
       // dataRepo.Students[2].email=data.email; commented for student
       /* console.log('Student email id is '+dataRepo.Students[2].email);
        console.log('Student email id is '+dataRepo.Students[1].email);
        console.log('Student email id is '+dataRepo.Students[0].email);*/

        element(this.getLocator(locRepo.userRegisterForm.country)).$('[value="' + data.country + '"]').click();
        element(this.getLocator(locRepo.userRegisterForm.organization)).sendKeys(data.organization);
        element(this.getLocator(locRepo.userRegisterForm.job)).$('[value="' + data.job + '"]').click();
        element(this.getLocator(locRepo.userRegisterForm.password)).sendKeys(data.password);
        element(this.getLocator(locRepo.userRegisterForm.confirmPassword)).sendKeys(data.confirmPassword);
        StudentDataHelper.updatePassword(2,data.password);
        console.log('Student password is '+data.password);
        //dataRepo.Students[2].password=data.password;; commented for student
        element(this.getLocator(locRepo.userRegisterForm.acceptTermOfUse)).click();
        element(this.getLocator(locRepo.userRegisterForm.acknowledgePrivacyPolicy)).click();
        element(this.getLocator(locRepo.userRegisterForm.createAccountButton)).click();
    }


}