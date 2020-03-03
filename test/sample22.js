const { driver } = require('../capabilities');
const homeScreen = require('./support/objects/homeScreenActivity')
const webView = require('./support/objects/webViewActivity')
const home = new homeScreen();
const web = new webView();
const assert = require('assert');

const testCase = {
    describe: 'Node Sample22 Automation Code ',
    before: 'As an user, i should be able to successfully launch the apps',
    after: 'As an user, i should be able to successfully close the apps ',
    describePositive: 'Positive Testing',
    positive: {
        sampleTest22: 'As an user, i should be able to successfully testing 22'
    }
};

describe(`@nodeSampleTest22 ${testCase.describe}`, function() {
    it(`@sampleTest22 ${testCase.positive.sampleTest22}`, async function() {
        await driver.elementById(home.buttonStartWebview).click()
        await driver.setImplicitWaitTimeout(5000);
        const buttonBackText = await driver.elementById(web.goBack).getAttribute("text");
        assert.equal(buttonBackText, "Go to home screenx");
        await driver.elementById(web.goBack).click();
    });
});