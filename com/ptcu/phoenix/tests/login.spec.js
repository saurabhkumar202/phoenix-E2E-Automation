"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const login_page_1 = require("../pages/login.page");
const protractor_1 = require("protractor");
var loginData = require("../resources/loginData.json");
var obj = new login_page_1.Login();
describe('Given a valid user with a user name and pass key', function () {
    beforeAll(function () {
        protractor_1.browser.get('https://devenv.iotu.com/login');
    });
    it('Shoud be able to login', function () {
        obj.doSignin(String(loginData.uid), String(loginData.pwd));
        expect(obj.getURL()).toContain('my-learning');
    });
});
