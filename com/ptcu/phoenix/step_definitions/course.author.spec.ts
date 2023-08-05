import{CourseAuthorPage} from "../pages/course.author.page";

export function courseAuthorSpecs() {

    var courseAuthorPage=new CourseAuthorPage();
    this.Then(/^I should be able to author a course$/, () => {
        courseAuthorPage.authorCourse();
    });

}

module.exports = courseAuthorSpecs;