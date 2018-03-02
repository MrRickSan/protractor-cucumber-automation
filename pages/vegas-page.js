//This is the page object file
var VegasPage = function() {

    this.selectors = {
        'searchButton': '.btn-search-magnifier',
      };
    
      this.searchButton = browser.$(this.selectors.searchButton);

  };

VegasPage.prototype.get = function() {
    return browser.get('https://vegas.williamhill.com/');
};  

VegasPage.prototype.clickSearchButton = function() {
    return this.searchButton.click();
}



module.exports = VegasPage;