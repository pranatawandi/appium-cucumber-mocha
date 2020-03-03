var reporter = require('cucumber-html-reporter');
const env = require('dotenv').config();
 
var options = {
        theme: 'bootstrap',
        jsonFile: 'features/reports/cucumber_report.json',
        output: 'features/reports/cucumber_report.html',
        screenshotsDirectory: 'features/reports/screenshots/',
        storeScreenshots: true,
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "Platform Name": process.env.PLATFORM_NAME,
            "Platform Version": process.env.PLATFORM_VERSION,
            "Device Name": process.env.DEVICE_NAME,
            "Apps": process.env.APP,
            "Package Apps": process.env.PACKAGE
        }
    };
 
    reporter.generate(options);