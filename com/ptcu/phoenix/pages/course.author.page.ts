import {HeaderFooter} from "./header.footer.page"
import {browser, by, By, element, ElementArrayFinder, ElementFinder, promise} from "protractor";
import {CourseDataProvider} from "../resources/courseDataProvider";


var path = require('path');

var locRepo = require('../resources/locatorRepository.json');
let dataRepo = require("../resources/courseData.json");

export class CourseAuthorPage extends HeaderFooter {

    private _courseTitle: string;
    private _courseSummary: string;
    private _difficulty: string;
    private _language: string;
    private _type: string;
    private _duration: number;


    get courseTitle(): string {
        return this._courseTitle;
    }

    set courseTitle(title: string) {
        this._courseTitle = title;
    }

    get courseSummary(): string {
        return this._courseSummary;
    }

    set courseSummary(summary: string) {
        this._courseSummary = summary;
    }

    get difficulty(): string {
        return this._difficulty;
    }

    set difficulty(difficulty: string) {
        this._difficulty = difficulty;
    }

    get language(): string {
        return this._language;
    }

    set language(language: string) {
        this._language = language;
    }

    get type(): string {
        return this._type;
    }

    set type(type: string) {
        this._type = type;
    }

    get duration(): number {
        return this._duration;
    }

    set duration(duration: number) {
        this._duration = duration;
    }


    public authorCourse() {
        for (let i in dataRepo.courses) {
            //console.log('Course ID is ' + i);
           // console.log('Length of courses is' + dataRepo.courses.length);
            var data = new CourseDataProvider();
            browser.sleep(10000);
            this.gotoCourseAuthor();
            this.createCourse();
            this.courseTitle = data.getCourseData().courseTitle;
            dataRepo.courses[i].info.title = this.courseTitle;
            this.courseSummary = data.getCourseData().courseSummary;
            dataRepo.courses[i].info.summary = this.courseSummary;
            this.difficulty = dataRepo.courses[i].info.difficulty;
            this.language = dataRepo.courses[i].info.language;
            this.type = dataRepo.courses[i].info.type;
            this.duration = dataRepo.courses[i].info.duration;
            this.enterCourseDetails(this.courseTitle, this.courseSummary, this.difficulty, this.language, this.type, this.duration);
            for (let j in dataRepo.courses[i].info.organization) {
                this.selectOrganization(dataRepo.courses[i].info.organization[j]);
            }
            for (let j in dataRepo.courses[i].info.technology) {
                this.selectTechnology(dataRepo.courses[i].info.technology[j]);
            }
            this.uploadTrailerVideo(dataRepo.courses[i].info.trailer);
            browser.sleep(40000);
            this.uploadThumbnail(dataRepo.courses[i].info.thumbnail);
            for (let j in dataRepo.courses[i].info.tags) {
                this.selectTags(dataRepo.courses[i].info.tags[j]);
            }

            this.uploadTrophy(dataRepo.courses[i].info.trophy);
            this.savePage();
            browser.sleep(5000);
            for(let j in dataRepo.courses[i].contributors) {
                for (let k in dataRepo.courses[i].contributors[j].roles) {
                    browser.sleep(10000);
                    this.selectRoles(dataRepo.courses[i].contributors[j].user ,dataRepo.courses[i].contributors[j].roles[k]);
                    browser.sleep(5000);
                }
            }
            this.goToMilestones();
            for (let j in dataRepo.courses[i].miles) {
                let t: number = Number(j) + 1;
                console.log('Mile ID is ' + j);
                browser.sleep(5000);
                browser.waitForAngular();
                this.addMilestone();
                this.enterMilestoneTitle(data.getCourseData().milestoneTitle);
                this.enterMilestoneSummary(data.getCourseData().milestoneSummary);
                this.savePage();
                browser.sleep(5000);
                this.toggleExpandCollapseMilestone("M" + t);
                for (let k in dataRepo.courses[i].miles[j].activities) {
                    console.log('Activity ID is ' + k);
                    browser.sleep(5000);
                    switch (dataRepo.courses[i].miles[j].activities[k].type) {
                        case 'text': {
                            console.log('Activity type is ' + 'text');
                            this.addTextActivity(data.getCourseData().activityTitle, data.getCourseData().activityInstruction);
                            this.updateActivityStatus('Publish');
                            break;
                        }
                        case 'video': {
                            browser.sleep(5000);
                            console.log('Activity type is ' + 'video');
                            this.addVideoActivity(data.getCourseData().activityTitle, dataRepo.courses[i].miles[j].activities[k].asset);
                            this.updateActivityStatus('Publish');
                            break;
                        }
                        case 'submittable': {
                            browser.sleep(5000);
                            console.log('Activity type is ' + 'submittable');
                            this.addSubmittableActivity(data.getCourseData().activityTitle, data.getCourseData().activityInstruction);
                            this.updateActivityStatus('Publish');
                            break;
                        }

                        case 'document': {
                            browser.sleep(5000);
                            console.log('Activity type is ' + 'document');
                            this.addDocumentActivity(data.getCourseData().activityTitle, data.getCourseData().activityInstruction, dataRepo.courses[i].miles[j].activities[k].asset);
                            this.updateActivityStatus('Publish');
                            break;
                        }
                    }
                }
            }
            browser.sleep(5000);
            this.goToPricing();
            this.selectFreeOrPaid('FREE');
            this.offerMentors('NO');
            this.savePage();
            this.submitForReview();
            browser.sleep(5000);
            browser.get(browser.params.URLOptions.iotuURL + '/my-learning');
            console.log('Course Title is ' + dataRepo.courses[i].info.title);
        }
    }

    gotoCourseAuthor() {
        element(this.getLocator(locRepo.courseAuthor)).click();
    }

    createCourse() {
        element(this.getLocator(locRepo.courseAuthor.createCourse)).click();
    }

    enterCourseTitle(data: string) {
        element(this.getLocator(locRepo.courseAuthor.createCourse.courseTitle)).sendKeys(data)
    }

    enterCourseSummary(data: string) {
        element(this.getLocator(locRepo.courseAuthor.createCourse.courseSummary)).sendKeys(data)
    }

    selectDifficultyLevel(text: string) {
        var elem: ElementFinder;
        elem = element(this.getLocator(locRepo.courseAuthor.difficulty));
        this.selectDropdownByText(elem, text);
    }

    selectLanguage(text: string) {
        var elem: ElementFinder;
        elem = element(this.getLocator(locRepo.courseAuthor.language));
        this.selectDropdownByText(elem, text);
    }

    selectCourseType(text: string) {
        var elem: ElementFinder;
        elem = element(this.getLocator(locRepo.courseAuthor.type));
        // this.selectDropdownByIndex(elem, index);
        this.selectDropdownByText(elem, text);
    }

    setCourseDuration(duration: number) {
        element(this.getLocator(locRepo.courseAuthor.duration)).sendKeys(duration);
    }

    selectOrganization(targetOrg: string) {
        var org: ElementFinder;
        var menu: ElementArrayFinder
        org = element(this.getLocator(locRepo.courseAuthor.organization));
        menu = element.all(this.getLocator(locRepo.courseAuthor.allOrganizations));
        this.selectFromMultiSelectByText(org, targetOrg, menu);
        /* return element.all(by.xpath('.//.')).filter(function(elem){
             return  elem.getText().then(function(txt){
                   return txt==text;
               });
          });*/


    }

    clearFocus() {
        return browser.actions().mouseMove({x: 9999, y: 9999}).click().perform();
    }

    selectTechnology(tech: string) {
        var elem: ElementFinder;
        var menu: ElementArrayFinder;
        elem = element(this.getLocator(locRepo.courseAuthor.technology));
        menu = element.all(by.xpath('//label[text()=\'TECHNOLOGY\']/..//a/span/span[2]'));
        this.selectFromMultiSelectByText(elem, tech, menu);
    }

    selectRoles(user:string,role:string){
        var elem: ElementFinder;
        var menu: ElementArrayFinder;
        //elem = element(this.getLocator(locRepo.courseAuthor.technology));

        menu = element.all(by.xpath('//a[text()="'+ user +'"]/../../../..//div//li/div'));
        this.selectFromExpandedListByText( role, menu);
    }
    selectActivity(activity: string,) {
        var elem: ElementFinder;
        var menu: ElementArrayFinder;
        elem = element(this.getLocator(locRepo.courseAuthor.createCourse.courseSections.milestones.addMilestone.addActivity));
        menu = element.all(by.xpath('//div[@class="card "]/div[not(@class=\'d-none\')]//button[text()=\' Add Activity \']/../div/a'));
        this.selectFromMultiSelectByText(elem, activity, menu);
    }

    addTextActivity(title: string, instruction: string) {
        this.selectActivity('Text');
        this.enterActivityTitle(title);
        this.enterActivityInstructions(instruction);
        this.savePage();
        browser.sleep(5000);

    }

    addVideoActivity(title: string, assetPath: string) {
        this.selectActivity('Video');
        this.enterActivityTitle(title);
        this.uploadVideoActivity(assetPath);
        browser.sleep(5000);
        this.savePage();
        browser.sleep(40000);

    }

    addSubmittableActivity(title: string, instruction: string) {
        this.selectActivity('Submittable');
        this.enterActivityTitle(title);
        //this.enterActivityInstructions(instruction);
        this.savePage();
        browser.sleep(5000);

    }
    addDocumentActivity(title: string, instruction: string,assetPath:string) {
        this.selectActivity('Document');
        this.enterActivityTitle(title);
        this.attachPDFFile(assetPath);
        //this.enterActivityInstructions(instruction);
        this.savePage();
        browser.sleep(5000);

    }
    attachPDFFile(assetPath:string){
        var filepath = path.resolve(assetPath);
        console.log('filepath is ' + filepath);
        element(this.getLocator(locRepo.courseAuthor.createCourse.courseSections.milestones.addMilestone.addActivity.attachFile)).sendKeys(filepath);
        browser.sleep(10000);
        //element(this.getLocator(locRepo.courseAuthor.uploadVideo)).click();
    }
    uploadTrailerVideo(pathToTrailerVideoFile: string) {
        var filepath = path.resolve(pathToTrailerVideoFile);
        console.log('filepath is ' + filepath);
        element(this.getLocator(locRepo.courseAuthor.browseVideo)).click();
        browser.sleep(5000);
        element(this.getLocator(locRepo.courseAuthor.selectVideo)).sendKeys(filepath);
        browser.sleep(5000);
        element(this.getLocator(locRepo.courseAuthor.uploadVideo)).click();
        //browser.sleep(5000);

    }

    uploadVideoActivity(pathToVideoFileActivity: string) {
        var filepath = path.resolve(pathToVideoFileActivity);
        console.log(' Video Activity filepath is ' + filepath);
        browser.sleep(5000);
        element(this.getLocator(locRepo.courseAuthor.createCourse.courseSections.milestones.addMilestone.addActivity.uploadVideoActivity)).sendKeys(filepath);
        browser.sleep(5000);
    }

    uploadThumbnail(pathToThumbnailFile: string) {
        var filepath = path.resolve(pathToThumbnailFile);
        console.log('filepath is ' + filepath);
        // element(this.getLocator(locRepo.courseAuthor.browseVideo)).click();
        //browser.sleep(5000);
        element(this.getLocator(locRepo.courseAuthor.selectThumbnail)).sendKeys(filepath);
        // browser.sleep(5000);
        //  element(this.getLocator(locRepo.courseAuthor.uploadVideo)).click();
    }

    selectTags(tag: string) {
        var elem: ElementFinder;
        var menu: ElementArrayFinder;
        elem = element(this.getLocator(locRepo.courseAuthor.tags));
        menu = element.all(by.xpath('//label[text()=\'COURSE TAGS\']/..//a/span/span[2]'));
        this.selectFromMultiSelectByText(elem, tag, menu);
    }

    uploadTrophy(pathToTrophyFile: string) {
        var filepath = path.resolve(pathToTrophyFile);
        console.log('filepath is ' + filepath);
        // element(this.getLocator(locRepo.courseAuthor.browseVideo)).click();
        //browser.sleep(5000);
        element(this.getLocator(locRepo.courseAuthor.selectTrophy)).sendKeys(filepath);
        browser.sleep(5000);
        //  element(this.getLocator(locRepo.courseAuthor.uploadVideo)).click();
    }

    savePage() {
        element(this.getLocator(locRepo.courseAuthor.savePage)).click();
    }

    goToContributors(){
        element(this.getLocator(locRepo.courseAuthor.createCourse.courseSections.contributors)).click()
    }

    goToMilestones() {
        element(this.getLocator(locRepo.courseAuthor.createCourse.courseSections.milestones)).click();
    }

    addMilestone() {
        element(this.getLocator(locRepo.courseAuthor.createCourse.courseSections.milestones.addMilestone)).click();
    }

    enterMilestoneTitle(title: string) {
        element(this.getLocator(locRepo.courseAuthor.createCourse.courseSections.milestones.addMilestone.milestoneTitle)).sendKeys(title);
    }

    enterMilestoneSummary(summary: string) {
        element(this.getLocator(locRepo.courseAuthor.createCourse.courseSections.milestones.addMilestone.milestoneSummary)).sendKeys(summary);
    }

    toggleExpandCollapseMilestone(mileNumber: string) {

        element.all(this.getLocator(locRepo.courseAuthor.createCourse.courseSections.milestones.addMilestone.toggleMilestone)).filter(function (elem) {
            return elem.getText().then(function (txt: string) {
                return txt == mileNumber;
            })
        }).first().click();
    }

    enterActivityTitle(title: string) {
        element(this.getLocator(locRepo.courseAuthor.createCourse.courseSections.milestones.addMilestone.activityTitle)).sendKeys(title);
    }

    enterActivityInstructions(instructions: string) {
        element(this.getLocator(locRepo.courseAuthor.createCourse.courseSections.milestones.addMilestone.activityInstructions)).sendKeys(instructions);
    }

    toggleExpandCollapseActivity(activityTitle: string) {
        element.all(this.getLocator(locRepo.courseAuthor.createCourse.courseSections.milestones.addMilestone.toggleActivity)).filter(function (elem) {
            return elem.getText().then(function (txt: string) {
                return txt == activityTitle;
            })
        }).first().click();
    }

    updateActivityStatus(activityTitle: string) {
        var elem: ElementFinder;
        var menu: ElementArrayFinder;
        elem = element.all(this.getLocator(locRepo.courseAuthor.createCourse.courseSections.milestones.addMilestone.actions)).last();
        menu = element.all(by.xpath('//div[@class="card "]/div[not(@class="d-none")]/div/div[@class="learning-assets"]//button[text()=" Actions "]/../div/a'));
        this.selectFromMultiSelectByText(elem, activityTitle, menu).then(() => {
            browser.sleep(4000);
            element(this.getLocator(locRepo.courseAuthor.createCourse.courseSections.milestones.addMilestone.updateStatus)).click();
        });
    }

    goToPricing() {
        element(this.getLocator(locRepo.courseAuthor.createCourse.courseSections.pricing)).click();
    }

    selectFreeOrPaid(value: string) {
        var elem: ElementFinder;
        elem = element(this.getLocator(locRepo.courseAuthor.createCourse.courseSections.pricing.priceDropdown));
        this.selectDropdownByValue(elem, value);
    }

    offerMentors(value: string) {
        var elem: ElementFinder;
        elem = element(this.getLocator(locRepo.courseAuthor.createCourse.courseSections.pricing.offerMentors));
        this.selectDropdownByValue(elem, value);
    }

    submitForReview() {
        element(this.getLocator(locRepo.courseAuthor.createCourse.courseSections.submitForReview)).click();
        browser.sleep(5000);
        element(this.getLocator(locRepo.courseAuthor.createCourse.courseSections.submitForReview.finalSubmit)).click();
        browser.sleep(5000);
        element(this.getLocator(locRepo.courseAuthor.createCourse.courseSections.submitForReview.finalSubmit.submitConfirmation)).click();
        browser.sleep(5000);
    }

    submitCourse() {
        element(this.getLocator(locRepo.courseAuthor.createCourse.createCourseSubmit)).click();
    }

    private enterCourseDetails(title: any, courseSummary: string, difficulty: any, language: any, type: any, duration: any) {
        this.enterCourseTitle(title);
        this.submitCourse();
        this.enterCourseSummary(courseSummary);
        this.selectDifficultyLevel(difficulty);
        this.selectLanguage(language);
        this.selectCourseType(type);
        this.setCourseDuration(duration);
    }
}