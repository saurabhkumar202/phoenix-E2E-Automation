import {browser, by, element, ElementArrayFinder, ElementFinder, Locator, promise} from 'protractor';
import  * as Q from "q";
let locRepo = require('../resources/locatorRepository.json');
var Proxy = require("browsermob-proxy-api");

export class helperObject {
    getLocator(locator: any):Locator {
        switch (locator.method) {
            case "id":
                return by.id(locator.value);
            case "name":
                return by.name(locator.value);
            case "model":
                return by.model(locator.value);
            case "binding":
                return by.binding(locator.value);
            case "repeater":
                return by.repeater(locator.value);
            case "xpath":
                return by.xpath(locator.value);
            case "css":
                return by.css(locator.value);
            case "options":
                return by.options(locator.value);
            case "linkText":
                return by.linkText(locator.value);
            case "buttonText":
                return by.buttonText(locator.value);
        }
    }

    goToUrl(url: any) {
        browser.get(url);
    }

    getURL() {
        return browser.getCurrentUrl();
    }

    goToBrowserBack() {
       return browser.navigate().back();
    }

    getPageTitle() {
        return browser.getTitle();
    }

    clearFocus() {
        return browser.actions().mouseMove({x: 9999, y: 9999}).click().perform();
    }

    selectDropdownByIndex(element: ElementFinder, index: number) {
        return promise.all([element.click(), element.all(by.tagName('option')).get(index).click(),this.clearFocus()]);
    }

    selectDropdownByValue(element: ElementFinder, value: string) {
        return promise.all([element.click(),element.all(by.css('option[value="' + value + '"]')).first().click(),this.clearFocus()]);
    }
    selectFromMultiSelectByText(menu:ElementFinder,tech:string,menuList:ElementArrayFinder){
       return promise.all( [menu.click(), menuList.filter(function(elem){
            return  elem.getText().then(function(text)
            {
                return  text.trim()==tech;
            });
        }).first().click() ,this.clearFocus()]) ;
    }

    selectFromExpandedListByText(role:string,menuList:ElementArrayFinder){
        return promise.all( [ menuList.filter(function(elem){
            return  elem.getText().then(function(text)
            {
                return  text.trim()==role;
            });
        }).first().element(by.css('.rectangle-white')).click() ,this.clearFocus()]) ;
    }

    selectDropdownByText(element:any, desiredText:any) {
        console.log('Desired Text is'+desiredText);
        var desiredOption:any = null;
        return promise.all([    element.click(),
            element.all(by.tagName("option")).then( (options:any)=> {
                options.some(function (option:any) {
                    option.getText().then( (text:any)=> {
                        if (text.trim() === desiredText) {
                            desiredOption = option;
                            return true;
                        }
                    });
                });
            }).then( ()=> {
    if (desiredOption) {
        desiredOption.click();
    }
}),
    this.clearFocus()]);
}

    selectPageUsingpagination(value: string){
        element(by.linkText(value)).click();
    }
    productFamily () {
        return element.all(this.getLocator(locRepo.tutorialHomePage.family));
    }

    clickOnGivenProduct(productName: string) {
       // var EC = protractor.ExpectedConditions;

        return this.productFamily().filter(function (prodFamily) {
        return prodFamily.isDisplayed().then(function (val) {
        return val;
    })
}).filter(function (prodLink) {
    return prodLink.getAttribute("class").then(function (linkName) {
        return linkName == (productName.toLowerCase());
    });
}).click();
}
   public startFreshNetworkCapture() {

        return browser.controlFlow().execute(function () {
        var proxy = new Proxy(browser.params.proxy);
        return Q.ninvoke(proxy, 'createHAR', browser.params.proxyPort, {
        'initialPageRef': 'ULC1',
        'captureContent': 'true'
    });
});
}
   public getCurrentHARDetails (apiType:string, getData:string, cb:Function) {

        getData = getData || "both";
        var that = this;

        return browser.controlFlow().execute(function () {

        var proxy = new Proxy(browser.params.proxy);
        return Q.ninvoke(proxy, 'getHAR', browser.params.proxyPort).then(function (harData:any) {
        var harJSONData = JSON.parse(harData);
        var regex = new RegExp(apiType);
        var data = harJSONData.log.entries.filter(function (obj:any) {
        return regex.test(obj.request.url);
    }).map(function (obj:any) {
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

    public formatQueryString (queryStringArray:any) {
        var queryStringObj :any= {};
    queryStringArray.forEach(function (query:any) {
        queryStringObj[query.name] = query.value;
    });

    return queryStringObj;
}


   public formatContent (content:any) {
        return /\((.*)\)/.exec(content) &&
            (   /{(.*)}/.exec(/\((.*)\)/.exec(content)[1]) &&
                JSON.parse(/\((.*)\)/.exec(content)[1]) ||
                /\((.*)\)/.exec(content)[1]
            ) ||
            (   /{(.*)}/.exec(content) &&
                JSON.parse(content) ||
                content
            );
    }

    getBrowserErrors (cb:any){
        browser.manage().logs().get('browser').then(function (browserLogs) {
            cb(browserLogs.filter(function (log) {
                return /SEVERE/.test(log.level.name_);
            }).map(function (log) {
                return log.message;
            }));
        });
}


}