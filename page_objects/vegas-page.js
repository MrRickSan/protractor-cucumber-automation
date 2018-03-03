//This is the page object file
var VegasPage = function() {

    this.selectors = {
        'searchButton': '.btn-search-magnifier',
        'searchInput': '//div[contains(@class, "search-input__input-wrapper")]/input',
      };
    
      this.searchButton = browser.element.all(by.css(this.selectors.searchButton)).get(0);
      this.searchInput = browser.element(by.xpath(this.selectors.searchInput));

  };


VegasPage.prototype.get = function() {
    browser.get('https://vegas.williamhill.com/');
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



module.exports = VegasPage;