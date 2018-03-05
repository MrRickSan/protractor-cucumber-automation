//Chai is used here as BDD / TDD assertion library

//Here I require the Page Objects
var VegasPage = require("../page_objects/vegas-page.js");
var VegasLoginPage = require("../page_objects/vegas-login-page.js");

//Here is where the steps of the *.feature are executed
var VegasSteps = function () {
  "use strict";

  //variables created as an object of type Page Objects
  var vegasPage = new VegasPage();
  var vegasLoginPage = new VegasLoginPage();

  //The default timeout is too low, so I was getting error of function timed out
  //The solution was to set a increased default timeout
  this.setDefaultTimeout(100 * 1000);

  this.Given(/^I am on the William Hill Vegas page$/, function () {
    return vegasPage.get();
  });

  this.Then(/^The search magnifier button is visible$/, function () {
    return expect(vegasPage.searchButtonIsDisplayed()).to.eventually.equal(true);
  });

  this.When(/^I click on search magnifier button$/, function () {
    return vegasPage.clickSearchButton();
  });

  this.Then(/^The search input is displayed$/, function () {
    return expect(vegasPage.searchInputIsDisplayed()).to.eventually.equal(true);
  });

  this.When(/^I click on the input field$/, function () {
    return vegasPage.clickInputSearch();
  });

  this.Then(/^I search for "([^"]*)" game$/, function (arg1) {
    return vegasPage.inputSearch(arg1);
  });

  this.Then(/^I will houver over the game card$/, function () {
    return vegasPage.mouseHoverFirstResult();
  });

  this.Then(/^I will click on the game card$/, function () {
    return vegasPage.clickFirstResult();
  });

  this.Then(/^I click on More button$/, function () {
    return vegasPage.clickMoreButton();
  });

  this.Then(/^I will check if the game name "([^"]*)" is correctly displayed$/, function (arg1) {
    return expect(vegasPage.getGameTitle()).to.eventually.equal(arg1);
  });

  this.Then(/^I will check if the game name "([^"]*)" is correctly displayed on mobile$/, function (arg1) {
    return expect(vegasPage.getMobileGameTitle()).to.eventually.equal(arg1);
  });

  this.Then(/^I click on Play Now button$/, function () {
    return vegasPage.clickPlayButton();
  });

  this.Then(/^I will validate full Login Window displayed$/, function () {
    return browser.sleep(1000).then(function() {
      expect(vegasLoginPage.registerLabelDisplayed()).to.eventually.equal(true);
      expect(vegasLoginPage.joinNowBtnDisplayed()).to.eventually.equal(true);
      expect(vegasLoginPage.logoDisplayed()).to.eventually.equal(true);
      expect(vegasLoginPage.usrLabelDisplayed()).to.eventually.equal(true);
      expect(vegasLoginPage.pwLabelDisplayed()).to.eventually.equal(true);
      expect(vegasLoginPage.usrInputFieldDisplayed()).to.eventually.equal(true);
      expect(vegasLoginPage.pwInputFieldDisplayed()).to.eventually.equal(true);
      expect(vegasLoginPage.togglePwDisplayed()).to.eventually.equal(true);
      expect(vegasLoginPage.forgotLinkDisplayed()).to.eventually.equal(true);
      expect(vegasLoginPage.loginBtnDisplayed()).to.eventually.equal(true);
      expect(vegasLoginPage.rememberLabelDisplayed()).to.eventually.equal(true);
      expect(vegasLoginPage.rememberCheckboxDisplayed()).to.eventually.equal(true);
      vegasLoginPage.clickPwInputField();
      expect(vegasLoginPage.usrNameNeededDisplayed()).to.eventually.equal(true);
      vegasLoginPage.clickUsrInputField();
      expect(vegasLoginPage.pwNeededDisplayed()).to.eventually.equal(true);
      vegasLoginPage.writeOnUsrInputField('12345');
      vegasLoginPage.clickPwInputField();
      expect(vegasLoginPage.usrNameErrorDisplayed()).to.eventually.equal(true);
      vegasLoginPage.writeOnPwInputField('12345');
      vegasLoginPage.clickUsrInputField();
      expect(vegasLoginPage.pwErrorDisplayed()).to.eventually.equal(true);
      vegasLoginPage.writeOnUsrInputField('123456');
      vegasLoginPage.writeOnPwInputField('123456');
      vegasLoginPage.clickLoginBtn();
    });
    
  });

};

module.exports = VegasSteps;