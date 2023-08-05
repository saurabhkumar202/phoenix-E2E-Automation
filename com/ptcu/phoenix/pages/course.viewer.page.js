"use strict";
//import {tutorialsLandingPage} from "./tutorials.landing.page";
Object.defineProperty(exports, "__esModule", { value: true });
const header_footer_page_1 = require("./header.footer.page");
const protractor_1 = require("protractor");
const studentDataHelper_1 = require("../utils/studentDataHelper");
var locRepo = require('../resources/locatorRepository.json');
var courseViewerLocRepo = require('../resources/courseViewerLocatorRepository.json');
var path = require('path');
class CourseViewerPage extends header_footer_page_1.HeaderFooter {
    get ProjectText() {
        return this._projectText;
    }
    set ProjectText(txt) {
        this._projectText = txt;
    }
    expandLeftMenu() {
        protractor_1.element(this.getLocator(courseViewerLocRepo.course.expandLeftMenu)).click();
    }
    getAllMilestones() {
        // var that=this;
        return protractor_1.element.all(this.getLocator(courseViewerLocRepo.course.allMilestones));
    }
    getAllActivitiesInAMilestone(elem) {
        // var that=this;
        return elem.all(this.getLocator(courseViewerLocRepo.course.allActivitiesInAMilestone));
    }
    nextAvailableActivity() {
        //var that=this;
        return protractor_1.element(this.getLocator(courseViewerLocRepo.course.nextActivity));
    }
    isNextActivityAvailable() {
        return this.nextAvailableActivity().isPresent().then(function (flag) {
            if (flag) {
                return true;
            }
            return false;
        });
    }
    getCourseCompletionPercentage() {
        return protractor_1.element(this.getLocator(courseViewerLocRepo.course.completionPercentage)).getText();
    }
    getAllQuestions() {
        return protractor_1.element.all(this.getLocator(courseViewerLocRepo.course.allQuestions));
    }
    answerAQuestion(i) {
        protractor_1.element(protractor_1.by.xpath('//question-view/div[' + (i + 1) + ']/div/label[1]/div/div/div[2]/label')).click();
        protractor_1.browser.sleep(5000);
        protractor_1.element(protractor_1.by.xpath('//question-view/div[' + (i + 1) + ']/div/div[2]/button')).click();
        protractor_1.browser.sleep(5000);
        protractor_1.element(protractor_1.by.xpath('//question-view/div[' + (i + 1) + ']/div/div[2]/a/div')).click();
        protractor_1.browser.sleep(5000);
    }
    addProject() {
        return protractor_1.element(this.getLocator(courseViewerLocRepo.course.addProject)).click();
    }
    enterProjectText(txt) {
        protractor_1.element(this.getLocator(courseViewerLocRepo.course.projectText)).sendKeys(txt);
    }
    attachFile(assetPath) {
        //var assetPath='com/ptcu/phoenix/assets/documents/activity.pdf';
        var filepath = path.resolve(assetPath);
        console.log('filepath is ' + filepath);
        protractor_1.element(this.getLocator(locRepo.courseAuthor.createCourse.courseSections.milestones.addMilestone.addActivity.attachFile)).sendKeys(filepath);
        protractor_1.browser.sleep(20000);
    }
    traverseCourseViewer() {
        protractor_1.browser.waitForAngularEnabled(false);
        this.expandLeftMenu();
        //element(by.css('.collapse-expand')).click();
        //Get All Milestones and then iterate on each milestone for its activities
        var that = this;
        this.getAllMilestones().each(function (elem) {
            //elem.click();
            that.getAllActivitiesInAMilestone(elem).each(function (ele) {
                ele.getAttribute('class').then(function (attrVal) {
                    console.log('Attribute value is' + attrVal);
                    var temp;
                    that.getCourseCompletionPercentage().then(function (tmp) {
                        temp = tmp;
                        if (temp != '100% COMPLETE') {
                            if (attrVal == 'demo-icon icon-text-activity') {
                                console.log('The status is ' + temp);
                                protractor_1.browser.waitForAngularEnabled(false);
                                that.isNextActivityAvailable().then(function (flag) {
                                    if (flag) {
                                        that.nextAvailableActivity().click();
                                        protractor_1.browser.sleep(5000);
                                    }
                                });
                            }
                            else if (attrVal.includes('icon-play-activity')) {
                                that.isNextActivityAvailable().then(function (flag) {
                                    if (flag) {
                                        that.nextAvailableActivity().click();
                                        protractor_1.browser.sleep(5000);
                                    }
                                });
                            }
                            else if (attrVal.includes('icon-document-file-pdf')) {
                                that.isNextActivityAvailable().then(function (flag) {
                                    if (flag) {
                                        that.nextAvailableActivity().click();
                                        protractor_1.browser.sleep(5000);
                                    }
                                });
                            }
                            else if (attrVal.includes('icon-quiz-activity')) {
                                var questionCount;
                                that.getAllQuestions().count().then(function (count) {
                                    // var inner=that;
                                    questionCount = count;
                                    for (let i = 0; i < questionCount; i++) {
                                        that.answerAQuestion(i);
                                    }
                                    that.isNextActivityAvailable().then(function (flag) {
                                        if (flag) {
                                            that.nextAvailableActivity().click();
                                            protractor_1.browser.sleep(5000);
                                        }
                                    });
                                });
                            }
                            else if (attrVal.includes('icon-project-activity')) {
                                protractor_1.browser.sleep(8000);
                                // element(by.xpath('//button[text()="Add Project "]')).click();
                                that.addProject();
                                let txt;
                                txt = 'This is for my project';
                                that.ProjectText = txt;
                                that.enterProjectText(that.ProjectText);
                                //element(by.xpath('//div[@contenteditable="true"]')).sendKeys('This is for my project');
                                protractor_1.browser.sleep(8000);
                                that.attachFile(studentDataHelper_1.StudentDataHelper.getSubmittableActivity(2));
                                protractor_1.element(protractor_1.by.xpath('//button[text()="Submit"]')).click();
                                protractor_1.browser.sleep(5000);
                                // element(by.xpath('//input[@type="file"]')).
                                that.isNextActivityAvailable().then(function (flag) {
                                    if (flag) {
                                        that.nextAvailableActivity().click();
                                        protractor_1.browser.sleep(5000);
                                    }
                                });
                            }
                        }
                    });
                });
            });
        });
    }
}
exports.CourseViewerPage = CourseViewerPage;
