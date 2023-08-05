"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const header_footer_page_1 = require("./header.footer.page");
const protractor_1 = require("protractor");
let locRepo = require('../resources/locatorRepository.json');
class RegistrationSuccessPage extends header_footer_page_1.HeaderFooter {
    getSuccessMessage() {
        return protractor_1.element(this.getLocator(locRepo.registrationSuccess.successMessage));
    }
    doViewAccountDashboard() {
        protractor_1.element(this.getLocator(locRepo.registrationSuccess.viewDashboardButton)).click();
    }
    getWhatsNewHeaderMessage() {
        return protractor_1.element(this.getLocator(locRepo.registrationSuccess.whatsNewHeaderMessage));
    }
    getWhatsNewDesc() {
        return protractor_1.element(this.getLocator(locRepo.registrationSuccess.whatsNewDesc));
    }
    doSkipWhatsNewModal() {
        protractor_1.element(this.getLocator(locRepo.registrationSuccess.whatsNewSkipModal)).click();
    }
}
exports.RegistrationSuccessPage = RegistrationSuccessPage;
