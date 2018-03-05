//This is the page object where the locators are identified
var VegasPage = function(){
    "use strict";
    
    this.searchButton = element.all(by.css('button.btn-search-magnifier')).get(0);
    this.searchInput = element(by.xpath('//div[contains(@class, "search-input__input-wrapper")]/input'));
    
    this.firstResult = element(by.id('root'))
         .all(by.xpath('//div/div[3]')).get(0)
         .all(by.xpath('//section/div/div[1]/div[1]')).get(0);

    this.moreButton = element.all(by.id('root'))
        .all(by.xpath('//div/div[3]/section/div/div/div[1]/div/div')).get(0)
        .all(by.xpath('//div/div[3]/section/div/div/div[1]/div/div/div/div[3]/div/button[2]'));
    
    this.playButton = element(by.buttonText('Play Now'));
    this.gameTitle = element(by.css('h2.tile-details__title'));
    this.mobileGameTitle = element(by.id('root'))
        .all(by.xpath('//div/div[3]')).get(0)
        .all(by.xpath('//div/header/h3')).get(0);
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
    return browser.actions().mouseMove(this.firstResult).mouseMove({x: 50, y: 0}).perform().then(function() {
        browser.sleep(2000);
      });
}

VegasPage.prototype.clickFirstResult = function() {
    browser.sleep(3000);
    return this.firstResult.click().then(function() {
        browser.sleep(3000);
      });
}

VegasPage.prototype.clickMoreButton = function() {
    return this.moreButton.click().then(function() {
        browser.sleep(2000);
      });
}

VegasPage.prototype.getGameTitle = function() {
    return this.gameTitle.getText();
}

VegasPage.prototype.getMobileGameTitle = function() {
    return this.mobileGameTitle.getText();
}

VegasPage.prototype.clickPlayButton = function() {
    return this.playButton.click().then(function() {
        browser.sleep(3000);
      });
    
}

module.exports = VegasPage;