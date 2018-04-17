/*jslint browser: true*/
/*global element,by,browser, module*/
class VegasLoginPage {
    constructor() {
        this.registerLabel = element(by.css('span.c-login-form__register-text'))
        this.joinNowBtn = element(by.buttonText('Join now'))
        this.logo = element(by.css('div.l-login-component__logo'))
        this.usrLabel = element(by.cssContainingText('label.sb-form-label', 'Username'))
        this.pwLabel = element(by.cssContainingText('label.sb-form-label', 'Password'))
        this.usrInputField = element(by.id('login-form-username'))
        this.pwInputField = element(by.id('login-form-password'))
        this.togglePw = element(by.css('span.c-login-form__toggle-password'))
        this.forgotLink = element(by.css('a.c-login-form__account-recovery-link'))
        this.loginBtn = element(by.buttonText('Log in'))
        this.rememberLabel = element(by.cssContainingText('label.c-login-form__checkboxes-label', 'Save username'))
        this.rememberCheckbox = element(by.id('rememberUsername'))
        this.usrNameNeeded = element(by.cssContainingText('p.c-login-form__input-group-error', 'Username is needed'))
        this.pwNeeded = element(by.cssContainingText('p.c-login-form__input-group-error', 'Password is needed'))
        this.usrNameError = element(by.cssContainingText('p.c-login-form__input-group-error', 'Username must be at least 6 characters'))
        this.pwError = element(by.cssContainingText('p.c-login-form__input-group-error', 'Password must be at least 6 characters'))
    }

    registerLabelDisplayed () {
        return this.registerLabel.isDisplayed()
    }
    
    joinNowBtnDisplayed() {
        return this.joinNowBtn.isDisplayed()
    }
    
    logoDisplayed() {
        return this.logo.isDisplayed()
    }
    
    usrLabelDisplayed() {
        return this.usrLabel.isDisplayed()
    }
    
    pwLabelDisplayed() {
        return this.pwLabel.isDisplayed()
    }
    
    usrInputFieldDisplayed() {
        return this.usrInputField.isDisplayed()
    }
    
    pwInputFieldDisplayed() {
        return this.pwInputField.isDisplayed()
    }
    
    togglePwDisplayed() {
        return this.togglePw.isDisplayed()
    }
    
    forgotLinkDisplayed() {
        return this.forgotLink.isDisplayed()
    }
    
    loginBtnDisplayed() {
        return this.loginBtn.isDisplayed()
    }
    
    rememberLabelDisplayed() {
        return this.rememberLabel.isDisplayed()
    }
    
    rememberCheckboxDisplayed() {
        return this.rememberCheckbox.isDisplayed()
    }
    
    clickPwInputField() {
        return this.pwInputField.click()
    }
    
    usrNameNeededDisplayed() {
        return this.usrNameNeeded.isDisplayed()
    }
    
    clickUsrInputField() {
        return this.usrInputField.click()
    }
    
    pwNeededDisplayed() {
        return this.pwNeeded.isDisplayed()
    }
    
    writeOnUsrInputField(arg1) {
        return this.usrInputField.sendKeys(arg1)
    }
    
    usrNameErrorDisplayed() {
        return this.usrNameError.isDisplayed()
    }
    
    writeOnPwInputField(arg1) {
        return this.pwInputField.sendKeys(arg1)
    }
    
    pwErrorDisplayed() {
        return this.pwError.isDisplayed()
    }
    
    clickLoginBtn() {
        return this.loginBtn.click()
    }
    
    failToLoginMsgTitleDisplayed() {
        return this.failToLoginMsgTitle.isDisplayed()
    }
    
    failToLoginMsgTextDisplayed() {
        return this.failToLoginMsgText.isDisplayed()
    }
    
}

module.exports = VegasLoginPage
