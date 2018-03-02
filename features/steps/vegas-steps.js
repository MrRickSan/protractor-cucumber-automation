//Chai is a BDD / TDD assertion library
var chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect;

var VegasPage = require('../page_objects/login.po.js'),
  vegas = new VegasPage();

var VegasSteps = function () {

}

module.exports = VegasSteps;