import {Login} from "../../pages/login.page";
import {browser} from "protractor";
import{SpecHelper} from "../../utils/specHelper"
import {ScenarioContext} from "../../utils/scenario.context";
export function hooks () {
     this.Before(function () {
         //console.log("");
         ScenarioContext.clearAll();
     });

     this.After(function(){
         var spec=new SpecHelper();
         return spec.cleanUp();
     })
 }
module.exports = hooks;
// export = hooks;
