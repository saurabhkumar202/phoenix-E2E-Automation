"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const header_footer_page_1 = require("./header.footer.page");
let locRepo = require('../resources/locatorRepository.json');
class ProfileSettingsPage extends header_footer_page_1.HeaderFooter {
    getEmailFromProfileForm() {
        return protractor_1.element(this.getLocator(locRepo.profileSettings.email));
    }
}
exports.ProfileSettingsPage = ProfileSettingsPage;
