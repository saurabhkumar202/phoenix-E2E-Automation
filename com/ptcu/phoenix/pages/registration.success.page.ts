import {HeaderFooter} from "./header.footer.page";
import {browser, element} from "protractor";

let locRepo = require('../resources/locatorRepository.json');

export class RegistrationSuccessPage extends HeaderFooter {

    getSuccessMessage() {
        return element(this.getLocator(locRepo.registrationSuccess.successMessage));
    }

    doViewAccountDashboard() {
        element(this.getLocator(locRepo.registrationSuccess.viewDashboardButton)).click();
    }

    getWhatsNewHeaderMessage() {
        return element(this.getLocator(locRepo.registrationSuccess.whatsNewHeaderMessage));
    }

    getWhatsNewDesc() {
        return element(this.getLocator(locRepo.registrationSuccess.whatsNewDesc));
    }

    doSkipWhatsNewModal() {
        element(this.getLocator(locRepo.registrationSuccess.whatsNewSkipModal)).click();
    }
}