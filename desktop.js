/*
Basic configuration to run your cucumber
feature files and step definitions with protractor.
**/
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    //The details of execution platform
    capabilities: {
      browserName: 'chrome',
      chromeOptions: {
        args: [ 'lang=en-gb', 'disable-infobars' ],
        prefs: {
          'profile.managed_default_content_settings.notifications': 1, 
          'credentials_enable_service': false, 
          'profile': {'password_manager_enabled': false}
        },
      }
    },

    resultJsonOutputFile: './reports/json/cucumber_report.json',

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    //cucumber command line options
    cucumberOpts: {
      strict: true,
      require: ['./step_definitions/*.js', './support/*.js'],
      format: "pretty",
      tags: ['@desktop', '@mobile'] //Tags are used for identify the test scenario
      },

      specs: ['./features/*.feature'],

    onPrepare: () => {
      browser.driver.manage().deleteAllCookies();
      browser.manage().window().maximize(); //maximize the browser before executing the feature files
      browser.ignoreSynchronization = true;
      global.expect = chai.expect; //Chai is a assertion library used on steps
         
    }
  }