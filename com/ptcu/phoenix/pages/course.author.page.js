"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const header_footer_page_1 = require("./header.footer.page");
const protractor_1 = require("protractor");
const courseDataProvider_1 = require("../resources/courseDataProvider");
var path = require('path');
var locRepo = require('../resources/locatorRepository.json');
let dataRepo = require("../resources/courseData.json");
class CourseAuthorPage extends header_footer_page_1.HeaderFooter {
    get courseTitle() {
        return this._courseTitle;
    }
    set courseTitle(title) {
        this._courseTitle = title;
    }
    get courseSummary() {
        return this._courseSummary;
    }
    set courseSummary(summary) {
        this._courseSummary = summary;
    }
    get difficulty() {
        return this._difficulty;
    }
    set difficulty(difficulty) {
        this._difficulty = difficulty;
    }
    get language() {
        return this._language;
    }
    set language(language) {
        this._language = language;
    }
    get type() {
        return this._type;
    }
    set type(type) {
        this._type = type;
    }
    get duration() {
        return this._duration;
    }
    set duration(duration) {
        this._duration = duration;
    }
    authorCourse() {
        for (let i in dataRepo.courses) {
            //console.log('Course ID is ' + i);
            // console.log('Length of courses is' + dataRepo.courses.length);
            var data = new courseDataProvider_1.CourseDataProvider();
            protractor_1.browser.sleep(10000);
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
            protractor_1.browser.sleep(40000);
            this.uploadThumbnail(dataRepo.courses[i].info.thumbnail);
            for (let j in dataRepo.courses[i].info.tags) {
                this.selectTags(dataRepo.courses[i].info.tags[j]);
            }
            this.uploadTrophy(dataRepo.courses[i].info.trophy);
            this.savePage();
            protractor_1.browser.sleep(5000);
            for (let j in dataRepo.courses[i].contributors) {
                for (let k in dataRepo.courses[i].contributors[j].roles) {
                    protractor_1.browser.sleep(10000);
                    this.selectRoles(dataRepo.courses[i].contributors[j].user, dataRepo.courses[i].contributors[j].roles[k]);
                    protractor_1.browser.sleep(5000);
                }
            }
            this.goToMilestones();
            for (let j in dataRepo.courses[i].miles) {
                let t = Number(j) + 1;
                console.log('Mile ID is ' + j);
                protractor_1.browser.sleep(5000);
                protractor_1.browser.waitForAngular();
                this.addMilestone();
                this.enterMilestoneTitle(data.getCourseData().milestoneTitle);
                this.enterMilestoneSummary(data.getCourseData().milestoneSummary);
                this.savePage();
                protractor_1.browser.sleep(5000);
                this.toggleExpandCollapseMilestone("M" + t);
                for (let k in dataRepo.courses[i].miles[j].activities) {
                    console.log('Activity ID is ' + k);
                    protractor_1.browser.sleep(5000);
                    switch (dataRepo.courses[i].miles[j].activities[k].type) {
                        case 'text': {
                            console.log('Activity type is ' + 'text');
                            this.addTextActivity(data.getCourseData().activityTitle, data.getCourseData().activityInstruction);
                            this.updateActivityStatus('Publish');
                            break;
                        }
                        case 'video': {
                            protractor_1.browser.sleep(5000);
                            console.log('Activity type is ' + 'video');
                            this.addVideoActivity(data.getCourseData().activityTitle, dataRepo.courses[i].miles[j].activities[k].asset);
                            this.updateActivityStatus('Publish');
                            break;
                        }
                        case 'submittable': {
                            protractor_1.browser.sleep(5000);
                            console.log('Activity type is ' + 'submittable');
                            this.addSubmittableActivity(data.getCourseData().activityTitle, data.getCourseData().activityInstruction);
                            this.updateActivityStatus('Publish');
                            break;
                        }
                        case 'document': {
                            protractor_1.browser.sleep(5000);
                            console.log('Activity type is ' + 'document');
                            this.addDocumentActivity(data.getCourseData().activityTitle, data.getCourseData().activityInstruction, dataRepo.courses[i].miles[j].activities[k].asset);
                            this.updateActivityStatus('Publish');
                            break;
                        }
                    }
                }
            }
            protractor_1.browser.sleep(5000);
            this.goToPricing();
            this.selectFreeOrPaid('FREE');
            this.offerMentors('NO');
            this.savePage();
            this.submitForReview();
            protractor_1.browser.sleep(5000);
            protractor_1.browser.get(protractor_1.browser.params.URLOptions.iotuURL + '/my-learning');
            console.log('Course Title is ' + dataRepo.courses[i].info.title);
        }
    }
    gotoCourseAuthor() {
        protractor_1.element(this.getLocator(locRepo.courseAuthor)).click();
    }
    createCourse() {
        protractor_1.element(this.getLocator(locRepo.courseAuthor.createCourse)).click();
    }
    enterCourseTitle(data) {
        protractor_1.element(this.getLocator(locRepo.courseAuthor.createCourse.courseTitle)).sendKeys(data);
    }
    enterCourseSummary(data) {
        protractor_1.element(this.getLocator(locRepo.courseAuthor.createCourse.courseSummary)).sendKeys(data);
    }
    selectDifficultyLevel(text) {
        var elem;
        elem = protractor_1.element(this.getLocator(locRepo.courseAuthor.difficulty));
        this.selectDropdownByText(elem, text);
    }
    selectLanguage(text) {
        var elem;
        elem = protractor_1.element(this.getLocator(locRepo.courseAuthor.language));
        this.selectDropdownByText(elem, text);
    }
    selectCourseType(text) {
        var elem;
        elem = protractor_1.element(this.getLocator(locRepo.courseAuthor.type));
        // this.selectDropdownByIndex(elem, index);
        this.selectDropdownByText(elem, text);
    }
    setCourseDuration(duration) {
        protractor_1.element(this.getLocator(locRepo.courseAuthor.duration)).sendKeys(duration);
    }
    selectOrganization(targetOrg) {
        var org;
        var menu;
        org = protractor_1.element(this.getLocator(locRepo.courseAuthor.organization));
        menu = protractor_1.element.all(this.getLocator(locRepo.courseAuthor.allOrganizations));
        this.selectFromMultiSelectByText(org, targetOrg, menu);
        /* return element.all(by.xpath('.//.')).filter(function(elem){
             return  elem.getText().then(function(txt){
                   return txt==text;
               });
          });*/
    }
    clearFocus() {
        return protractor_1.browser.actions().mouseMove({ x: 9999, y: 9999 }).click().perform();
    }
    selectTechnology(tech) {
        var elem;
        var menu;
        elem = protractor_1.element(this.getLocator(locRepo.courseAuthor.technology));
        menu = protractor_1.element.all(protractor_1.by.xpath('//label[text()=\'TECHNOLOGY\']/..//a/span/span[2]'));
        this.selectFromMultiSelectByText(elem, tech, menu);
    }
    selectRoles(user, role) {
        var elem;
        var menu;
        //elem = element(this.getLocator(locRepo.courseAuthor.technology));
        menu = protractor_1.element.all(protractor_1.by.xpath('//a[text()="' + user + '"]/../../../..//div//li/div'));
        this.selectFromExpandedListByText(role, menu);
    }
    selectActivity(activity) {
        var elem;
        var menu;
        elem = protractor_1.element(this.getLocator(locRepo.courseAuthor.createCourse.courseSections.milestones.addMilestone.addActivity));
        menu = protractor_1.element.all(protractor_1.by.xpath('//div[@class="card "]/div[not(@class=\'d-none\')]//button[text()=\' Add Activity \']/../div/a'));
        this.selectFromMultiSelectByText(elem, activity, menu);
    }
    addTextActivity(title, instruction) {
        this.selectActivity('Text');
        this.enterActivityTitle(title);
        this.enterActivityInstructions(instruction);
        this.savePage();
        protractor_1.browser.sleep(5000);
    }
    addVideoActivity(title, assetPath) {
        this.selectActivity('Video');
        this.enterActivityTitle(title);
        this.uploadVideoActivity(assetPath);
        protractor_1.browser.sleep(5000);
        this.savePage();
        protractor_1.browser.sleep(40000);
    }
    addSubmittableActivity(title, instruction) {
        this.selectActivity('Submittable');
        this.enterActivityTitle(title);
        //this.enterActivityInstructions(instruction);
        this.savePage();
        protractor_1.browser.sleep(5000);
    }
    addDocumentActivity(title, instruction, assetPath) {
        this.selectActivity('Document');
        this.enterActivityTitle(title);
        this.attachPDFFile(assetPath);
        //this.enterActivityInstructions(instruction);
        this.savePage();
        protractor_1.browser.sleep(5000);
    }
    attachPDFFile(assetPath) {
        var filepath = path.resolve(assetPath);
        console.log('filepath is ' + filepath);
        protractor_1.element(this.getLocator(locRepo.courseAuthor.createCourse.courseSections.milestones.addMilestone.addActivity.attachFile)).sendKeys(filepath);
        protractor_1.browser.sleep(10000);
        //element(this.getLocator(locRepo.courseAuthor.uploadVideo)).click();
    }
    uploadTrailerVideo(pathToTrailerVideoFile) {
        var filepath = path.resolve(pathToTrailerVideoFile);
        console.log('filepath is ' + filepath);
        protractor_1.element(this.getLocator(locRepo.courseAuthor.browseVideo)).click();
        protractor_1.browser.sleep(5000);
        protractor_1.element(this.getLocator(locRepo.courseAuthor.selectVideo)).sendKeys(filepath);
        protractor_1.browser.sleep(5000);
        protractor_1.element(this.getLocator(locRepo.courseAuthor.uploadVideo)).click();
        //browser.sleep(5000);
    }
    uploadVideoActivity(pathToVideoFileActivity) {
        var filepath = path.resolve(pathToVideoFileActivity);
        console.log(' Video Activity filepath is ' + filepath);
        protractor_1.browser.sleep(5000);
        protractor_1.element(this.getLocator(locRepo.courseAuthor.createCourse.courseSections.milestones.addMilestone.addActivity.uploadVideoActivity)).sendKeys(filepath);
        protractor_1.browser.sleep(5000);
    }
    uploadThumbnail(pathToThumbnailFile) {
        var filepath = path.resolve(pathToThumbnailFile);
        console.log('filepath is ' + filepath);
        // element(this.getLocator(locRepo.courseAuthor.browseVideo)).click();
        //browser.sleep(5000);
        protractor_1.element(this.getLocator(locRepo.courseAuthor.selectThumbnail)).sendKeys(filepath);
        // browser.sleep(5000);
        //  element(this.getLocator(locRepo.courseAuthor.uploadVideo)).click();
    }
    selectTags(tag) {
        var elem;
        var menu;
        elem = protractor_1.element(this.getLocator(locRepo.courseAuthor.tags));
        menu = protractor_1.element.all(protractor_1.by.xpath('//label[text()=\'COURSE TAGS\']/..//a/span/span[2]'));
        this.selectFromMultiSelectByText(elem, tag, menu);
    }
    uploadTrophy(pathToTrophyFile) {
        var filepath = path.resolve(pathToTrophyFile);
        console.log('filepath is ' + filepath);
        // element(this.getLocator(locRepo.courseAuthor.browseVideo)).click();
        //browser.sleep(5000);
        protractor_1.element(this.getLocator(locRepo.courseAuthor.selectTrophy)).sendKeys(filepath);
        protractor_1.browser.sleep(5000);
        //  element(this.getLocator(locRepo.courseAuthor.uploadVideo)).click();
    }
    savePage() {
        protractor_1.element(this.getLocator(locRepo.courseAuthor.savePage)).click();
    }
    goToContributors() {
        protractor_1.element(this.getLocator(locRepo.courseAuthor.createCourse.courseSections.contributors)).click();
    }
    goToMilestones() {
        protractor_1.element(this.getLocator(locRepo.courseAuthor.createCourse.courseSections.milestones)).click();
    }
    addMilestone() {
        protractor_1.element(this.getLocator(locRepo.courseAuthor.createCourse.courseSections.milestones.addMilestone)).click();
    }
    enterMilestoneTitle(title) {
        protractor_1.element(this.getLocator(locRepo.courseAuthor.createCourse.courseSections.milestones.addMilestone.milestoneTitle)).sendKeys(title);
    }
    enterMilestoneSummary(summary) {
        protractor_1.element(this.getLocator(locRepo.courseAuthor.createCourse.courseSections.milestones.addMilestone.milestoneSummary)).sendKeys(summary);
    }
    toggleExpandCollapseMilestone(mileNumber) {
        protractor_1.element.all(this.getLocator(locRepo.courseAuthor.createCourse.courseSections.milestones.addMilestone.toggleMilestone)).filter(function (elem) {
            return elem.getText().then(function (txt) {
                return txt == mileNumber;
            });
        }).first().click();
    }
    enterActivityTitle(title) {
        protractor_1.element(this.getLocator(locRepo.courseAuthor.createCourse.courseSections.milestones.addMilestone.activityTitle)).sendKeys(title);
    }
    enterActivityInstructions(instructions) {
        protractor_1.element(this.getLocator(locRepo.courseAuthor.createCourse.courseSections.milestones.addMilestone.activityInstructions)).sendKeys(instructions);
    }
    toggleExpandCollapseActivity(activityTitle) {
        protractor_1.element.all(this.getLocator(locRepo.courseAuthor.createCourse.courseSections.milestones.addMilestone.toggleActivity)).filter(function (elem) {
            return elem.getText().then(function (txt) {
                return txt == activityTitle;
            });
        }).first().click();
    }
    updateActivityStatus(activityTitle) {
        var elem;
        var menu;
        elem = protractor_1.element.all(this.getLocator(locRepo.courseAuthor.createCourse.courseSections.milestones.addMilestone.actions)).last();
        menu = protractor_1.element.all(protractor_1.by.xpath('//div[@class="card "]/div[not(@class="d-none")]/div/div[@class="learning-assets"]//button[text()=" Actions "]/../div/a'));
        this.selectFromMultiSelectByText(elem, activityTitle, menu).then(() => {
            protractor_1.browser.sleep(4000);
            protractor_1.element(this.getLocator(locRepo.courseAuthor.createCourse.courseSections.milestones.addMilestone.updateStatus)).click();
        });
    }
    goToPricing() {
        protractor_1.element(this.getLocator(locRepo.courseAuthor.createCourse.courseSections.pricing)).click();
    }
    selectFreeOrPaid(value) {
        var elem;
        elem = protractor_1.element(this.getLocator(locRepo.courseAuthor.createCourse.courseSections.pricing.priceDropdown));
        this.selectDropdownByValue(elem, value);
    }
    offerMentors(value) {
        var elem;
        elem = protractor_1.element(this.getLocator(locRepo.courseAuthor.createCourse.courseSections.pricing.offerMentors));
        this.selectDropdownByValue(elem, value);
    }
    submitForReview() {
        protractor_1.element(this.getLocator(locRepo.courseAuthor.createCourse.courseSections.submitForReview)).click();
        protractor_1.browser.sleep(5000);
        protractor_1.element(this.getLocator(locRepo.courseAuthor.createCourse.courseSections.submitForReview.finalSubmit)).click();
        protractor_1.browser.sleep(5000);
        protractor_1.element(this.getLocator(locRepo.courseAuthor.createCourse.courseSections.submitForReview.finalSubmit.submitConfirmation)).click();
        protractor_1.browser.sleep(5000);
    }
    submitCourse() {
        protractor_1.element(this.getLocator(locRepo.courseAuthor.createCourse.createCourseSubmit)).click();
    }
    enterCourseDetails(title, courseSummary, difficulty, language, type, duration) {
        this.enterCourseTitle(title);
        this.submitCourse();
        this.enterCourseSummary(courseSummary);
        this.selectDifficultyLevel(difficulty);
        this.selectLanguage(language);
        this.selectCourseType(type);
        this.setCourseDuration(duration);
    }
}
exports.CourseAuthorPage = CourseAuthorPage;
