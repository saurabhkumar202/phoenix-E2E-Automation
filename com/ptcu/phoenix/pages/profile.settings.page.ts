import {element} from "protractor";
import {HeaderFooter} from "./header.footer.page";

let locRepo = require('../resources/locatorRepository.json');


export class ProfileSettingsPage extends HeaderFooter {

    getEmailFromProfileForm() {
        return element(this.getLocator(locRepo.profileSettings.email));
    }
}