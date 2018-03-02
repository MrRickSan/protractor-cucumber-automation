//Chai ia a BDD / TDD assertion library
var chai = require('chai'),
  chaiAsPromised = require('chai-as-promised'),
  expect = chai.expect;

chai.use(chaiAsPromised);

var VegasPage = require("../pages/vegas-page.js"),
  page = new VegasPage();

var VegasSteps = function () {

    this.Given(/^I am on the William Hill Vegas page$/, function (callback) {
        page.get();
        callback();
      });

      this.When(/^The search magnifier button is visible$/, function (callback) {
        expect(page.searchButtonIsDisplayed()).to.be.true;
        callback();
      });

    this.When(/^I click on search magnifier button$/, function (callback) {
        page.clickSearchButton();
        callback();
      });

};

module.exports = VegasSteps;