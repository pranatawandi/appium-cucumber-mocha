const wd = require('wd');
const env = require('dotenv').config();

const config = {
  platformName: process.env.PLATFORM_NAME,
  platformVersion: process.env.PLATFORM_VERSION,
  deviceName: process.env.DEVICE_NAME,
  automationName: 'UiAutomator2',
  noReset: false,
  app: '/Users/damar/BELAJAR/Android/coba2/apps/selendroid-test-app.apk',
};
const driver = wd.promiseChainRemote(process.env.HOST, process.env.PORT);

module.exports = {
    driver, config
  };