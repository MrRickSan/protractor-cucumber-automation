/* 
Here is the basic configuration to run cucumber
feature files and step definitions with protractor.
*/
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
      browserName: 'chrome',
      chromeOptions: {
        args: [ 'lang=en-gb', 'disable-infobars' ],
        prefs: {'profile.managed_default_content_settings.notifications': 1, 'credentials_enable_service': false, 'profile': {'password_manager_enabled': false}},
        // mobileEmulation: {
        //   deviceName: 'Nexus 5'
        // }
      }
    },
  
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
  
    specs: [
      'features/*.feature'
    ],
    cucumberOpts: {
      require: 'features/steps/*_steps.js',
      format: 'pretty'
    }
  }
  