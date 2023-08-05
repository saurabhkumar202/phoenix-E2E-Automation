import {HeaderFooter} from "./header.footer.page";

let loginData = require('../resources/loginData.json');

export class Login extends HeaderFooter {
    /*public doSignin(uid:string,pwd:string){
        this.login(uid,pwd);
    }*/

    doSignin: any = (uid: string, pwd: string) => {
        this.login(uid, pwd);
    };
    doSignout: any = () => {
        this.logout();
    };
}
