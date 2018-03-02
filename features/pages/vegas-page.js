
var VegasPage = () => {

    this.selectors = {
        'searchButton': '.btn-search-magnifier',
      };
    
      this.searchButton = browser.$(this.selectors.searchButton);

  };

VegasPage.prototype.clickSearchButton = () => {
    return this.searchButton.click();
  }

VegasPage.prototype.get = () => {
  browser.get('https://vegas.williamhill.com/');
};  

module.exports = VegasPage;