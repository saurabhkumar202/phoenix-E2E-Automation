
import {HeaderFooter} from "./header.footer.page";
import {browser, by, element} from "protractor";

export class StudentCourseEnrollmentPage extends HeaderFooter {

    EnrollACourse(){
        element(by.xpath("//*[normalize-space(text())='" + 'Enroll Now for Free' + "']")).click();
        browser.sleep(4000);
        element(by.xpath("//*[normalize-space(text())='" + 'Enroll Now' + "']")).click();
        browser.sleep(2000);
    }
}