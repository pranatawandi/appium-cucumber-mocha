# Automation Testing on Android apps

## Appium x Cucumberjs
```
npm run cucumberjs -- --tags @tag3
npm run cucumberjs -- --tags 'not @skip'
npm run cucumberjs -- --tags '@tag1 or @tag3'
npm run cucumberjs -- --tags 'not @tag1 and (@tag2 or @tag3)'
```
https://github.com/cucumber/cucumber/tree/master/tag-expressions

## Appium x Mocha
```
npm run test-apps -- --grep @skip --invert
npm run test-apps -- --grep @tag3
```

## Env
```
cp env.sample .env
```

```
PLATFORM_NAME=android
PLATFORM_VERSION=8.1.0
DEVICE_NAME=31ebd68a7d94
APP=selendroid-test-app.apk
PACKAGE=io.selendroid.testapp
HOST=localhost
PORT=4723
```

## Requirement
- android sdk
- setup enviroment variable (on mac ~/.bash_profile)
- setup enviroment variable: java_home, android_home
- appium desktop version 1.10.0
- emulator or device

## Checking device already connected on laptop
- adb devices

## Checking enviroment ($JAVA_HOME, $ANDROID_HOME) on laptop
- npm run appium-doctor

## Inspect element tools
- Uiautomatorviewer

```
~/Library/Android/sdk/tools/bin/uiautomatorviewer
```

- Appium inspector

Desired capabilities

```
{
  "platformName": "android",
  "platformVersion": "8.1.0",
  "deviceName": "31ebd68a7d94",
  "noReset": "True",
  "appPackage": "io.appium.android.apis",
  "appActivity": "io.appium.android.apis.ApiDemos",
  "automationName": "Appium",
  "app": "/Users/damar/APK/ApiDemos-debug.apk"
}
```

## Structure
    .
    ...
    features/test           # Test directory (alternatively `features` or `test`)
    ├── reports             # Report files
    ├── step_definitions    # Step definition files
    ├── support             # Support files
    │   ├── activity        # Activity list
    │   ├── data            # Data test
    │   ├── objects         # Page object files
    │   └── hook            # Hook files (before - after test)
    ├── sample.feature      # Test files using feature format (cucumber)
    └── sample.js           # Test files using js format (mocha)
    ...

## More NPM Scripts
- Please check on package.json

## Reporter
- Mochawesome

```
npm run mochawesome-reports
```

![mochawesome-reports](https://github.com/damarmustiko/appium-cucumber-mocha/blob/master/helpers/readme/mochawesome.png)

- Cucumber html report

```
npm run cucumber-reports
```
![cucumber-reports](https://github.com/damarmustiko/appium-cucumber-mocha/blob/master/helpers/readme/cucumber.png)
