const { driver } = require('../capabilities');
const homeScreen = require('./support/objects/homeScreenActivity')
const webView = require('./support/objects/webViewActivity')
const home = new homeScreen();
const web = new webView();
const assert = require('assert');

const testCase = {
    describe: 'Node Sample Automation Code ',
    before: 'As an user, i should be able to successfully launch the apps',
    after: 'As an user, i should be able to successfully close the apps ',
    describePositive: 'Positive Testing',
    positive: {
        sampleTest1: 'As an user, i should be able to successfully testing 1',
        sampleTest2: 'As an user, i should be able to successfully testing 2',
        sampleTest3: 'As an user, i should be able to successfully testing 3',
        sampleTest4: 'As an user, i should be able to successfully testing 4',
        sampleTest5: 'As an user, i should be able to successfully testing 5'
    }
};

describe(`@nodeSampleTest ${testCase.describe}`, function() {
    it(`@sampleTest1 ${testCase.positive.sampleTest1}`, async function() {
        await driver.elementById(home.buttonTest).click();
        await driver.setImplicitWaitTimeout(5000);
        const modal = await driver.elementById(home.message).getAttribute("text");
        assert.equal(modal, "This will end the activity");
        const buttonNo = await driver.elementById(home.button2);
        buttonNo.click()
    });
    it(`@sampleTest2 @skip ${testCase.positive.sampleTest2}`, async function() {
        const buttonNo = await driver.elementById(home.button2).getAttribute("text");
        assert.equal(buttonNo, 'No, no');
    });
    it(`@sampleTest3 ${testCase.positive.sampleTest3}`, async function() {
        await driver.elementById(home.buttonStartWebview).click()
        await driver.setImplicitWaitTimeout(5000);
        const package = await driver.getCurrentPackage();
        const activity = await driver.getCurrentActivity();
        await driver.elementById(web.goBack).click()
    });
    it(`@sampleTest4 ${testCase.positive.sampleTest4}`, async function() {
        const text = "Hello World!";
        const textField = await driver.elementById(home.my_text_field).type(text)
        await driver.setImplicitWaitTimeout(5000);
        const textValue = await textField.getAttribute("text");
        assert.equal(textValue, text);
    });
    it.skip(`@sampleTest5 @skip ${testCase.positive.sampleTest5}`, async function() {
        const testX = 'testX';
    });
});