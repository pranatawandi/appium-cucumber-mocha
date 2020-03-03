const env = require('dotenv').config();

class webView {
    constructor() {
        this.buttonTest = process.env.PACKAGE+':id/spinner_webdriver_test_data',
        this.goBack = process.env.PACKAGE+':id/goBack',
        this.name_input = 'name_input'
    }
}

module.exports = webView;