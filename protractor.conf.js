/*
Basic configuration to run your cucumber
feature files and step definitions with protractor.
**/
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
      browserName: 'chrome',
      chromeOptions: {
        args: [ 'lang=en-gb', 'disable-infobars' ],
        prefs: {
          'profile.managed_default_content_settings.notifications': 1, 
          'credentials_enable_service': false, 
          'profile': {'password_manager_enabled': false}
        }
        // mobileEmulation: {
        //   deviceName: 'Nexus 5'
        // }
      }
    },
    
    directConnect: true,

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    //cucumber command line options
    cucumberOpts: {
      require: ["./step_definitions/*.js"],
      format: "pretty"
      },

      specs: ['./features/*.feature'],

    onPrepare: () => {
      browser.manage().window().maximize(); // maximize the browser before executing the feature files
    }
  }

  // var reporter = require('cucumber-html-reporter');

  // var options = {
  //   theme: 'bootstrap',
  //   jsonFile: 'test/report/cucumber_report.json',
  //   output: 'test/report/cucumber_report.html',
  //   reportSuiteAsScenarios: true,
  //   launchReport: true,
  //   metadata: {
  //       "App Version":"0.3.2",
  //       "Test Environment": "STAGING",
  //       "Browser": "Chrome  54.0.2840.98",
  //       "Platform": "Windows 10",
  //       "Parallel": "Scenarios",
  //       "Executed": "Remote"
  //   }
  // };

  // reporter.generate(options);
