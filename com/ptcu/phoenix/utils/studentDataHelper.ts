import {HeaderFooter} from "../pages/header.footer.page";
let studentDataRepo = require("../resources/studentData.json");

export class StudentDataHelper extends HeaderFooter {

     static email:string[]=["abc","def"];
     static status:string[]=["abc","def"];
     static password:string[]=["abc","def"];
     static courseToEnroll:string[]=["abc","def"];

     public static getEmail(studentId:number){
         return this.email[studentId-1];
     }

    public static getPassword(studentId:number){
        return this.password[studentId-1];
    }

    public static getSubmittableActivity(studentId:number){
        return studentDataRepo.Students[studentId-1].activities[0].asset;
    }

    public static getCourse(studentId:number){
        return studentDataRepo.Students[studentId-1].courseToEnroll;
    }


    public static updateStatus(studentId:number,status:string){
          this.status[studentId-1]=status;
          studentDataRepo.Students[studentId-1].status=this.status[studentId-1];

    }

    public static updateEmail(studentId:number,email:string){
        this.email[studentId-1]=email;
        studentDataRepo.Students[studentId-1].email=this.email[studentId-1];
    }

    public static updatePassword(studentId:number,password:string){
        this.password[studentId-1]=password;
        studentDataRepo.Students[studentId-1].password=this.password[studentId-1];
    }
    /*public static updateCourseToEnroll(course:string){
        this.courseToEnroll[1]=course;
        studentDataRepo.Students[1].courseToEnroll=this.courseToEnroll[1];
    }*/


}