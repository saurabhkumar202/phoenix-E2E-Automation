import * as faker from "faker";

export class CourseDataProvider {

    private AUTOMATION_IDENTIFIER = "automation test ";


    public getCourseData(){
        return{
            courseTitle:this.getCourseTitle(),
            courseSummary:this.getCourseSummary(),
            milestoneTitle:this.getMilestoneTitle(),
            milestoneSummary:this.getMilestoneSummary(),
            activityTitle:this.getActivityTitle(),
            activityInstruction:this.getActivityInstruction()
        }
    }




    public getCourseTitle(){
        return this.AUTOMATION_IDENTIFIER+ faker.random.words(4);
    }

    public getCourseSummary(){
        return this.AUTOMATION_IDENTIFIER+faker.lorem.paragraph(4);
    }

    public getMilestoneTitle(){
        return this.AUTOMATION_IDENTIFIER+ faker.random.words(5);
    }
    public getMilestoneSummary(){
        return this.AUTOMATION_IDENTIFIER+faker.lorem.paragraph(4);
    }
    public getActivityTitle(){
        return this.AUTOMATION_IDENTIFIER+faker.lorem.words(5);
    }
    public getActivityInstruction(){
        return this.AUTOMATION_IDENTIFIER+faker.lorem.paragraph(4);
    }
}