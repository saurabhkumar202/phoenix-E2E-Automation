"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const header_footer_page_1 = require("./header.footer.page");
const protractor_1 = require("protractor");
let myLearningLocRepo = require('../resources/myLearningLocatorRepository.json');
class MyLearningPage extends header_footer_page_1.HeaderFooter {
    findAnActiveCourse(course) {
        return protractor_1.element.all(this.getLocator(myLearningLocRepo.activeCourses)).filter(function (activeCourse) {
            return activeCourse.getAttribute('title').then(function (text) {
                return text === course;
            });
        });
    }
}
exports.MyLearningPage = MyLearningPage;
