const { driver } = require('../../capabilities') 


const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const homePage = require('../support/objects/home_page');
const activityPage = require('../support/activity/home_page')
const activityName = new activityPage();
const element = new homePage();

Given('I go to screen the apps', async () => {
  await driver.startActivity({appPackage: 'io.selendroid.testapp', appActivity: activityName.HomeScreenActivity});
  await driver.elementById(element.buttonTest).isDisplayed();
  const package = await driver.getCurrentPackage();
  const activity = await driver.getCurrentActivity();
});

When('I click the button', async () => {
  const text1 = await driver.elementById(element.buttonTest);
  text1.click();
  await driver.setImplicitWaitTimeout(5000);
  const btnNp = await driver.elementById(element.button2);
  btnNp.click();
});

Then('I see the hello world', async () => {
  const text1 = await driver.elementById(element.my_text_field);
  await text1.type("Hello World!")
  await driver.setImplicitWaitTimeout(5000);
  const tagName = await text1.getAttribute("text");
  assert.equal(tagName, "Hello World!");
});

Then('I see the test', async () => {
  const text1 = await driver.elementById(element.visibleButtonTest);
  await text1.type("Hello World!")
  await driver.setImplicitWaitTimeout(5000);
  const tagName = await text1.getAttribute("text");
  assert.equal(tagName, "Hello World!");
});


