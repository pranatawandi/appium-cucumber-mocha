const {config, driver} = require('../capabilities');
const addContext = require('mochawesome/addContext');
const env = require('dotenv').config();

before(async function() {
  await driver.init(config);
});

beforeEach(async function() {
  await driver.startActivity({appPackage: process.env.PACKAGE, appActivity: process.env.PACKAGE+'.HomeScreenActivity'});
});

afterEach(async function() {
  if (this.currentTest.state !== 'passed') {
      const title = this.currentTest.title+'.png';
      const value = __dirname + '/reports/mochawesome/screenshots/'+this.currentTest.title+'.png';
      await driver.saveScreenshot(value);
      addContext(this, {
          title,
          value,
        });
  }
});

after(async function() {
  await driver.quit();
});


module.exports = {
  before, beforeEach, afterEach, after
};