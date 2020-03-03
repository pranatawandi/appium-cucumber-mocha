const env = require('dotenv').config();

class homeScreen {
    constructor() {
        this.buttonTest = process.env.PACKAGE+':id/buttonTest',
        this.buttonStartWebview = process.env.PACKAGE+':id/buttonStartWebview',
        this.startUserRegistration = process.env.PACKAGE+':id/startUserRegistration',
        this.my_text_field = process.env.PACKAGE+':id/my_text_field',
        this.waitingButtonTest = process.env.PACKAGE+':id/waitingButtonTest',
        this.input_adds_check_box = process.env.PACKAGE+':id/input_adds_check_box',
        this.visibleButtonTest = process.env.PACKAGE+':id/visibleButtonTest',
        this.showToastButton = process.env.PACKAGE+':id/showToastButton',
        this.showPopupWindowButton = process.env.PACKAGE+':id/showPopupWindowButton',
        this.exceptionTestButton = process.env.PACKAGE+':id/exceptionTestButton',
        this.exceptionTestField = process.env.PACKAGE+':id/exceptionTestField',
        this.topLevelElementTest = process.env.PACKAGE+':id/topLevelElementTest',
        this.message = 'android:id/message',
        this.button1 = 'android:id/button1',
        this.button2 = 'android:id/button2',
        this.focusedText = process.env.PACKAGE+':id/focusedText',
        this.visibleTextView = process.env.PACKAGE+':id/visibleTextView'
    }
}

module.exports = homeScreen;