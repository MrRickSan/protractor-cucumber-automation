//This is the page object where the locators are identified
var VegasPage = function(){
    "use strict";
    
    this.searchButton = element.all(by.css('.btn-search-magnifier')).get(0);
    this.searchInput = element(by.xpath('//div[contains(@class, "search-input__input-wrapper")]/input'));
    this.firstResult = element.all(by.id('root')).all(by.xpath('//div/div[3]/section/div/div/div[1]/div/div')).get(0);
    
    this.moreButton = element.all(by.id('root'))
        .all(by.xpath('//div/div[3]/section/div/div/div[1]/div/div')).get(0)
        .all(by.xpath('//div/div[3]/section/div/div/div[1]/div/div/div'))
        .all(by.xpath('//div/div[3]/section/div/div/div[1]/div/div/div/div[3]'))
        .all(by.xpath('//div/div[3]/section/div/div/div[1]/div/div/div/div[3]/div')) //quando botei esse funcionou..investigar.
        .all(by.xpath('//div/div[3]/section/div/div/div[1]/div/div/div/div[3]/div/button[2]'));
};

VegasPage.prototype.get = function() {
    return browser.get('https://vegas.williamhill.com/');
};

VegasPage.prototype.clickSearchButton = function() {
    return this.searchButton.click();
}

VegasPage.prototype.searchButtonIsDisplayed = function() {
    return this.searchButton.isDisplayed();
}

VegasPage.prototype.searchInputIsDisplayed = function() {
    return this.searchInput.isDisplayed();
}

VegasPage.prototype.clickInputSearch = function() {
    return this.searchInput.click();
}

VegasPage.prototype.inputSearch = function(input) {
    return this.searchInput.sendKeys(input);
}

VegasPage.prototype.mouseHoverFirstResult = function() {
    browser.sleep(2000);
    browser.actions().mouseMove(this.firstResult).mouseMove({x: 50, y: 0}).perform();
    browser.sleep(3000);
    return
}

VegasPage.prototype.clickMoreButton = function() {
    return this.moreButton.click();
}

module.exports = VegasPage;