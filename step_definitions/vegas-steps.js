//Chai is used here as BDD / TDD assertion library

var VegasPage = require("../page_objects/vegas-page.js");
  
var VegasSteps = function () {
  "use strict";

  var vegasPage = new VegasPage();

  this.setDefaultTimeout(80 * 1000);

  this.Given(/^I am on the William Hill Vegas page$/, function () {
    return vegasPage.get();
  });

  this.When(/^The search magnifier button is visible$/, function () {
    return expect(vegasPage.searchButtonIsDisplayed()).to.eventually.equal(true);
  });

  this.Then(/^I click on search magnifier button$/, function () {
    return vegasPage.clickSearchButton();
  });

  this.Then(/^The search input is displayed$/, function () {
    return expect(vegasPage.searchInputIsDisplayed()).to.eventually.equal(true);
  });

  this.When(/^I click on the input field$/, function () {
    return vegasPage.clickInputSearch();
  });

  this.Then(/^I search for "([^"]*)" game$/, function (gameName) {
    return vegasPage.inputSearch(gameName);
  });

  this.Then(/^I will houver over the game card$/, function () {
    return vegasPage.mouseHoverFirstResult();
  });

  this.Then(/^I will click on more button$/, function () {
    return vegasPage.clickMoreButton();
  });

};

module.exports = VegasSteps;