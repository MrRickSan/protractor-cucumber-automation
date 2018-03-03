/*
Basic configuration to run your cucumber
feature files and step definitions with protractor.
**/

// var reporter = require('cucumber-html-reporter');

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    baseUrl: 'https://vegas.williamhill.com/',

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

    //resultJsonOutputFile: 'report.json',
    resultJsonOutputFile: './reports/json/cucumber_report.json',

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    //cucumber command line options
    cucumberOpts: {
      strict: true,
      require: ["./step_definitions/*.js"],
      format: "pretty",
      tags: '@search'
      
      },

      specs: ['./features/*.feature'],

    onPrepare: () => {
      browser.manage().window().maximize(); // maximize the browser before executing the feature files
    
      // var options = {
      //     theme: 'bootstrap',
      //     jsonFile: 'report.json',
      //     output: 'cucumber_report.html',
      //     reportSuiteAsScenarios: true,
      //     launchReport: true,
      //     metadata: {
      //         "App Version":"0.3.2",
      //         "Test Environment": "STAGING",
      //         "Browser": "Chrome  54.0.2840.98",
      //         "Platform": "Windows 10",
      //         "Parallel": "Scenarios",
      //         "Executed": "Remote"
      //     }
      //   };
      
      //   reporter.generate(options);
    
    }
  }