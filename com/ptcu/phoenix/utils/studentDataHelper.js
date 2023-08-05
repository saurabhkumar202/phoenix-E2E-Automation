"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const header_footer_page_1 = require("../pages/header.footer.page");
let studentDataRepo = require("../resources/studentData.json");
class StudentDataHelper extends header_footer_page_1.HeaderFooter {
    static getEmail(studentId) {
        return this.email[studentId - 1];
    }
    static getPassword(studentId) {
        return this.password[studentId - 1];
    }
    static getSubmittableActivity(studentId) {
        return studentDataRepo.Students[studentId - 1].activities[0].asset;
    }
    static getCourse(studentId) {
        return studentDataRepo.Students[studentId - 1].courseToEnroll;
    }
    static updateStatus(studentId, status) {
        this.status[studentId - 1] = status;
        studentDataRepo.Students[studentId - 1].status = this.status[studentId - 1];
    }
    static updateEmail(studentId, email) {
        this.email[studentId - 1] = email;
        studentDataRepo.Students[studentId - 1].email = this.email[studentId - 1];
    }
    static updatePassword(studentId, password) {
        this.password[studentId - 1] = password;
        studentDataRepo.Students[studentId - 1].password = this.password[studentId - 1];
    }
}
StudentDataHelper.email = ["abc", "def"];
StudentDataHelper.status = ["abc", "def"];
StudentDataHelper.password = ["abc", "def"];
StudentDataHelper.courseToEnroll = ["abc", "def"];
exports.StudentDataHelper = StudentDataHelper;
