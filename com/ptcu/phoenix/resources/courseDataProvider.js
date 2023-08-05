"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker = require("faker");
class CourseDataProvider {
    constructor() {
        this.AUTOMATION_IDENTIFIER = "automation test ";
    }
    getCourseData() {
        return {
            courseTitle: this.getCourseTitle(),
            courseSummary: this.getCourseSummary(),
            milestoneTitle: this.getMilestoneTitle(),
            milestoneSummary: this.getMilestoneSummary(),
            activityTitle: this.getActivityTitle(),
            activityInstruction: this.getActivityInstruction()
        };
    }
    getCourseTitle() {
        return this.AUTOMATION_IDENTIFIER + faker.random.words(4);
    }
    getCourseSummary() {
        return this.AUTOMATION_IDENTIFIER + faker.lorem.paragraph(4);
    }
    getMilestoneTitle() {
        return this.AUTOMATION_IDENTIFIER + faker.random.words(5);
    }
    getMilestoneSummary() {
        return this.AUTOMATION_IDENTIFIER + faker.lorem.paragraph(4);
    }
    getActivityTitle() {
        return this.AUTOMATION_IDENTIFIER + faker.lorem.words(5);
    }
    getActivityInstruction() {
        return this.AUTOMATION_IDENTIFIER + faker.lorem.paragraph(4);
    }
}
exports.CourseDataProvider = CourseDataProvider;
