//import {tutorialsLandingPage} from "./tutorials.landing.page";

import {HeaderFooter} from "./header.footer.page";
import {browser, by, element, ElementFinder} from "protractor";
import {StudentDataHelper} from "../utils/studentDataHelper";
var locRepo = require('../resources/locatorRepository.json');
var courseViewerLocRepo=require('../resources/courseViewerLocatorRepository.json');
var path = require('path');


export class CourseViewerPage extends HeaderFooter {

    private _projectText:string;

    get ProjectText(){
        return this._projectText;
    }

    set ProjectText(txt:string){
        this._projectText=txt;
    }

    public expandLeftMenu(){
        element(this.getLocator(courseViewerLocRepo.course.expandLeftMenu)).click();
    }

    public getAllMilestones(){
       // var that=this;
       return element.all(this.getLocator(courseViewerLocRepo.course.allMilestones));
    }

    public getAllActivitiesInAMilestone(elem:ElementFinder){
       // var that=this;
        return elem.all(this.getLocator(courseViewerLocRepo.course.allActivitiesInAMilestone))
    }

    public nextAvailableActivity(){
        //var that=this;
        return element(this.getLocator(courseViewerLocRepo.course.nextActivity));
    }

    public isNextActivityAvailable(){
       return this.nextAvailableActivity().isPresent().then(function(flag){
            if(flag)
            {
                return true;
            }
            return false;
        })
    }

    public getCourseCompletionPercentage(){
        return  element(this.getLocator(courseViewerLocRepo.course.completionPercentage)).getText();
    }

    public  getAllQuestions() {
        return element.all(this.getLocator(courseViewerLocRepo.course.allQuestions));
    }

    public answerAQuestion(i:number)
    {
        element(by.xpath('//question-view/div['+(i+1)+']/div/label[1]/div/div/div[2]/label')).click();
        browser.sleep(5000);
        element(by.xpath('//question-view/div['+(i+1)+']/div/div[2]/button')).click();
        browser.sleep(5000);
        element(by.xpath('//question-view/div['+(i+1)+']/div/div[2]/a/div')).click();
        browser.sleep(5000);

    }

    public addProject(){
        return element(this.getLocator(courseViewerLocRepo.course.addProject)).click();
    }

    public enterProjectText(txt:string){
         element(this.getLocator(courseViewerLocRepo.course.projectText)).sendKeys(txt);
    }

    public attachFile(assetPath:string){
        //var assetPath='com/ptcu/phoenix/assets/documents/activity.pdf';
        var filepath = path.resolve(assetPath);
        console.log('filepath is ' + filepath);
        element(this.getLocator(locRepo.courseAuthor.createCourse.courseSections.milestones.addMilestone.addActivity.attachFile)).sendKeys(filepath);
        browser.sleep(20000);
    }



    public traverseCourseViewer(){
        browser.waitForAngularEnabled(false);
        this.expandLeftMenu();
        //element(by.css('.collapse-expand')).click();
        //Get All Milestones and then iterate on each milestone for its activities
        var that=this;
        this.getAllMilestones().each(function(elem){
            //elem.click();
            that.getAllActivitiesInAMilestone(elem).each(function(ele){
                ele.getAttribute('class').then(function(attrVal){
                    console.log('Attribute value is'+attrVal);
                    var temp;
                    that.getCourseCompletionPercentage().then(function(tmp){
                        temp=tmp;
                        if(temp!='100% COMPLETE')
                        {
                            if(attrVal=='demo-icon icon-text-activity')
                            {
                                console.log('The status is '+temp);
                                browser.waitForAngularEnabled(false);
                                that.isNextActivityAvailable().then(function(flag:any){
                                    if(flag)
                                    {
                                        that.nextAvailableActivity().click();
                                        browser.sleep(5000);
                                    }
                                });
                            }
                            else  if(attrVal.includes('icon-play-activity'))
                            {
                                that.isNextActivityAvailable().then(function(flag:any){
                                    if(flag)
                                    {
                                        that.nextAvailableActivity().click();
                                        browser.sleep(5000);
                                    }
                                });

                            }
                            else  if(attrVal.includes('icon-document-file-pdf'))
                            {
                                that.isNextActivityAvailable().then(function(flag:any){
                                    if(flag)
                                    {
                                        that.nextAvailableActivity().click();
                                        browser.sleep(5000);
                                    }
                                });

                            }
                            else  if(attrVal.includes('icon-quiz-activity'))
                            {

                               var questionCount;
                               that.getAllQuestions().count().then(function(count){
                                  // var inner=that;
                                   questionCount=count;
                                   for(let i=0;i< questionCount;i++)
                                   {
                                       that.answerAQuestion(i);

                                   }

                                   that.isNextActivityAvailable().then(function(flag:any){
                                       if(flag)
                                       {
                                           that.nextAvailableActivity().click();
                                           browser.sleep(5000);
                                       }
                                   });
                               });
                            }
                            else if(attrVal.includes('icon-project-activity')){
                                browser.sleep(8000);
                               // element(by.xpath('//button[text()="Add Project "]')).click();
                                that.addProject();
                                let txt :string;
                                txt='This is for my project';
                                that.ProjectText=txt;
                                that.enterProjectText(that.ProjectText);
                                //element(by.xpath('//div[@contenteditable="true"]')).sendKeys('This is for my project');
                                browser.sleep(8000);
                                that.attachFile(StudentDataHelper.getSubmittableActivity(2));
                                element(by.xpath('//button[text()="Submit"]')).click();
                                browser.sleep(5000);
                                // element(by.xpath('//input[@type="file"]')).
                                that.isNextActivityAvailable().then(function(flag:any){
                                    if(flag)
                                    {
                                        that.nextAvailableActivity().click();
                                        browser.sleep(5000);
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