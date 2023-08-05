"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const Q = require("q");
let locRepo = require('../resources/locatorRepository.json');
var Proxy = require("browsermob-proxy-api");
class helperObject {
    getLocator(locator) {
        switch (locator.method) {
            case "id":
                return protractor_1.by.id(locator.value);
            case "name":
                return protractor_1.by.name(locator.value);
            case "model":
                return protractor_1.by.model(locator.value);
            case "binding":
                return protractor_1.by.binding(locator.value);
            case "repeater":
                return protractor_1.by.repeater(locator.value);
            case "xpath":
                return protractor_1.by.xpath(locator.value);
            case "css":
                return protractor_1.by.css(locator.value);
            case "options":
                return protractor_1.by.options(locator.value);
            case "linkText":
                return protractor_1.by.linkText(locator.value);
            case "buttonText":
                return protractor_1.by.buttonText(locator.value);
        }
    }
    goToUrl(url) {
        protractor_1.browser.get(url);
    }
    getURL() {
        return protractor_1.browser.getCurrentUrl();
    }
    goToBrowserBack() {
        return protractor_1.browser.navigate().back();
    }
    getPageTitle() {
        return protractor_1.browser.getTitle();
    }
    clearFocus() {
        return protractor_1.browser.actions().mouseMove({ x: 9999, y: 9999 }).click().perform();
    }
    selectDropdownByIndex(element, index) {
        return protractor_1.promise.all([element.click(), element.all(protractor_1.by.tagName('option')).get(index).click(), this.clearFocus()]);
    }
    selectDropdownByValue(element, value) {
        return protractor_1.promise.all([element.click(), element.all(protractor_1.by.css('option[value="' + value + '"]')).first().click(), this.clearFocus()]);
    }
    selectFromMultiSelectByText(menu, tech, menuList) {
        return protractor_1.promise.all([menu.click(), menuList.filter(function (elem) {
                return elem.getText().then(function (text) {
                    return text.trim() == tech;
                });
            }).first().click(), this.clearFocus()]);
    }
    selectFromExpandedListByText(role, menuList) {
        return protractor_1.promise.all([menuList.filter(function (elem) {
                return elem.getText().then(function (text) {
                    return text.trim() == role;
                });
            }).first().element(protractor_1.by.css('.rectangle-white')).click(), this.clearFocus()]);
    }
    selectDropdownByText(element, desiredText) {
        console.log('Desired Text is' + desiredText);
        var desiredOption = null;
        return protractor_1.promise.all([element.click(),
            element.all(protractor_1.by.tagName("option")).then((options) => {
                options.some(function (option) {
                    option.getText().then((text) => {
                        if (text.trim() === desiredText) {
                            desiredOption = option;
                            return true;
                        }
                    });
                });
            }).then(() => {
                if (desiredOption) {
                    desiredOption.click();
                }
            }),
            this.clearFocus()]);
    }
    selectPageUsingpagination(value) {
        protractor_1.element(protractor_1.by.linkText(value)).click();
    }
    productFamily() {
        return protractor_1.element.all(this.getLocator(locRepo.tutorialHomePage.family));
    }
    clickOnGivenProduct(productName) {
        // var EC = protractor.ExpectedConditions;
        return this.productFamily().filter(function (prodFamily) {
            return prodFamily.isDisplayed().then(function (val) {
                return val;
            });
        }).filter(function (prodLink) {
            return prodLink.getAttribute("class").then(function (linkName) {
                return linkName == (productName.toLowerCase());
            });
        }).click();
    }
    startFreshNetworkCapture() {
        return protractor_1.browser.controlFlow().execute(function () {
            var proxy = new Proxy(protractor_1.browser.params.proxy);
            return Q.ninvoke(proxy, 'createHAR', protractor_1.browser.params.proxyPort, {
                'initialPageRef': 'ULC1',
                'captureContent': 'true'
            });
        });
    }
    getCurrentHARDetails(apiType, getData, cb) {
        getData = getData || "both";
        var that = this;
        return protractor_1.browser.controlFlow().execute(function () {
            var proxy = new Proxy(protractor_1.browser.params.proxy);
            return Q.ninvoke(proxy, 'getHAR', protractor_1.browser.params.proxyPort).then(function (harData) {
                var harJSONData = JSON.parse(harData);
                var regex = new RegExp(apiType);
                var data = harJSONData.log.entries.filter(function (obj) {
                    return regex.test(obj.request.url);
                }).map(function (obj) {
                    if (getData === "both") {
                        return {
                            "queryString": that.formatQueryString(obj.request.queryString),
                            "url": obj.request.url,
                            "status": obj.response.status,
                            "content": that.formatContent(obj.response.content.text)
                        };
                    }
                    else if (getData == "queryString") {
                        return {
                            "queryString": that.formatQueryString(obj.request.queryString),
                            "url": obj.request.url
                        };
                    }
                    else if (getData == "content")
                        return {
                            "url": obj.request.url,
                            "content": that.formatContent(obj.response.content.text)
                        };
                    else if (getData == "status")
                        return {
                            "status": obj.response.status
                        };
                });
                cb(data);
            }, function (err) {
                console.log(err);
            });
        });
    }
    formatQueryString(queryStringArray) {
        var queryStringObj = {};
        queryStringArray.forEach(function (query) {
            queryStringObj[query.name] = query.value;
        });
        return queryStringObj;
    }
    formatContent(content) {
        return /\((.*)\)/.exec(content) &&
            (/{(.*)}/.exec(/\((.*)\)/.exec(content)[1]) &&
                JSON.parse(/\((.*)\)/.exec(content)[1]) ||
                /\((.*)\)/.exec(content)[1]) ||
            (/{(.*)}/.exec(content) &&
                JSON.parse(content) ||
                content);
    }
    getBrowserErrors(cb) {
        protractor_1.browser.manage().logs().get('browser').then(function (browserLogs) {
            cb(browserLogs.filter(function (log) {
                return /SEVERE/.test(log.level.name_);
            }).map(function (log) {
                return log.message;
            }));
        });
    }
}
exports.helperObject = helperObject;
