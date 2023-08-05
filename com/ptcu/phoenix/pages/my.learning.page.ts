
import {HeaderFooter} from "./header.footer.page";
import {browser, by, element} from "protractor";
let myLearningLocRepo = require('../resources/myLearningLocatorRepository.json');
export class MyLearningPage extends HeaderFooter {

    findAnActiveCourse(course:string){
        return element.all(this.getLocator(myLearningLocRepo.activeCourses)).filter(function(activeCourse:any) {
                        return  activeCourse.getAttribute('title').then(function(text:string){
                           return  text===course})});


    }
}