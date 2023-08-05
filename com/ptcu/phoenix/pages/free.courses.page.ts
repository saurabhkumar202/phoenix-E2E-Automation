import {HeaderFooter} from "./header.footer.page";
import {browser, by, element} from "protractor";

export class FreeCoursesPage extends HeaderFooter {

    clickACourse(courseName: string){
         element(by.xpath("//*[normalize-space(text())='" + courseName + "']")).click();
         browser.sleep(2000);
    }
}