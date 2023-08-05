import {element} from "protractor";
import {HeaderFooter} from "./header.footer.page";
let locRepo = require('../resources/locatorRepository.json');

export class WhatsNew extends HeaderFooter{
    public getWhatsNewModal(){
        return element(this.getLocator(locRepo.footer.help.whatsNew));
    }
}