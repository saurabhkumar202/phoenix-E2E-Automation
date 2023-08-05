"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const header_footer_page_1 = require("./header.footer.page");
let loginData = require('../resources/loginData.json');
class Login extends header_footer_page_1.HeaderFooter {
    constructor() {
        /*public doSignin(uid:string,pwd:string){
            this.login(uid,pwd);
        }*/
        super(...arguments);
        this.doSignin = (uid, pwd) => {
            this.login(uid, pwd);
        };
        this.doSignout = () => {
            this.logout();
        };
    }
}
exports.Login = Login;
