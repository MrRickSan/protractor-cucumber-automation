//Chai ia a BDD / TDD assertion library
var chai = require('chai'),
  chaiAsPromised = require('chai-as-promised'),
  expect = chai.expect;

chai.use(chaiAsPromised);

var VegasPage = require("../page_objects/vegas-page.js"),
  vegasPage = new VegasPage();

var VegasSteps = function () {
  "use strict";

  this.Given(/^I am on the William Hill Vegas page$/, function (callback) {
    browser.wait(browser.driver.manage().deleteAllCookies());
    browser.ignoreSynchronization = true;
    vegasPage.get();
    callback();
  });

  this.When(/^The search magnifier button is visible$/, function (callback) {
    expect(vegasPage.searchButtonIsDisplayed()).to.eventually.equal(true);
    callback();   
  });

  this.When(/^I click on search magnifier button$/, function (callback) {
    vegasPage.clickSearchButton();
    expect(vegasPage.searchInputIsDisplayed()).to.eventually.equal(true);
    callback();
  });

};

module.exports = VegasSteps;