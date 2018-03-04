var VegasLoginPage = function(){
    "use strict";

    this.registerLabel = element(by.css('span.c-login-form__register-text'));
    this.joinNowBtn = element(by.buttonText('Join now'));
    this.logo = element(by.css('div.l-login-component__logo'));
    this.usrLabel = element(by.cssContainingText('label.sb-form-label', 'Username'));
    this.pwLabel = element(by.cssContainingText('label.sb-form-label', 'Password'));
    this.usrInputField = element(by.id('login-form-username'));
    this.pwInputField = element(by.id('login-form-password'));
    this.togglePw = element(by.css('span.c-login-form__toggle-password'));
    this.forgotLink = element(by.css('a.c-login-form__account-recovery-link'));
    this.loginBtn = element(by.buttonText('Log in'));
    this.rememberLabel = element(by.cssContainingText('label.c-login-form__checkboxes-label', 'Save username'));
    this.rememberCheckbox = element(by.id('rememberUsername'));
    this.usrNameNeeded= element(by.cssContainingText('p.c-login-form__input-group-error', 'Username is needed'));
    this.pwNeeded = element(by.cssContainingText('p.c-login-form__input-group-error', 'Password is needed'));
    this.usrNameError = element(by.cssContainingText('p.c-login-form__input-group-error', 'Username must be at least 6 characters'));
    this.pwError = element(by.cssContainingText('p.c-login-form__input-group-error', 'Password must be at least 6 characters'));
};

VegasLoginPage.prototype.registerLabelDisplayed = function() {
    return this.registerLabel.isDisplayed();
}

VegasLoginPage.prototype.joinNowBtnDisplayed = function() {
    return this.joinNowBtn.isDisplayed();
}

VegasLoginPage.prototype.logoDisplayed = function() {
    return this.logo.isDisplayed();
}

VegasLoginPage.prototype.usrLabelDisplayed = function() {
    return this.usrLabel.isDisplayed();
}

VegasLoginPage.prototype.pwLabelDisplayed = function() {
    return this.pwLabel.isDisplayed();
}

VegasLoginPage.prototype.usrInputFieldDisplayed = function() {
    return this.usrInputField.isDisplayed();
}

VegasLoginPage.prototype.pwInputFieldDisplayed = function() {
    return this.pwInputField.isDisplayed();
}

VegasLoginPage.prototype.togglePwDisplayed = function() {
    return this.togglePw.isDisplayed();
}

VegasLoginPage.prototype.forgotLinkDisplayed = function() {
    return this.forgotLink.isDisplayed();
}

VegasLoginPage.prototype.loginBtnDisplayed = function() {
    return this.loginBtn.isDisplayed();
}

VegasLoginPage.prototype.rememberLabelDisplayed = function() {
    return this.rememberLabel.isDisplayed();
}

VegasLoginPage.prototype.rememberCheckboxDisplayed = function() {
    return this.rememberCheckbox.isDisplayed();
}

VegasLoginPage.prototype.clickPwInputField = function() {
    return this.pwInputField.click();
}

VegasLoginPage.prototype.usrNameNeededDisplayed = function() {
    return this.usrNameNeeded.isDisplayed();
}

VegasLoginPage.prototype.clickUsrInputField = function() {
    return this.usrInputField.click();
}

VegasLoginPage.prototype.pwNeededDisplayed = function() {
    return this.pwNeeded.isDisplayed();
}

VegasLoginPage.prototype.writeOnUsrInputField = function(arg1) {
    return this.usrInputField.sendKeys(arg1);
}

VegasLoginPage.prototype.usrNameErrorDisplayed = function() {
    return this.usrNameError.isDisplayed();
}

VegasLoginPage.prototype.writeOnPwInputField = function(arg1) {
    return this.pwInputField.sendKeys(arg1);
}

VegasLoginPage.prototype.pwErrorDisplayed = function() {
    return this.pwError.isDisplayed();
}

VegasLoginPage.prototype.clickLoginBtn = function() {
    return this.loginBtn.click();
}

VegasLoginPage.prototype.failToLoginMsgTitleDisplayed = function() {
    return this.failToLoginMsgTitle.isDisplayed();
}

VegasLoginPage.prototype.failToLoginMsgTextDisplayed = function() {
    return this.failToLoginMsgText.isDisplayed();
}

module.exports = VegasLoginPage;