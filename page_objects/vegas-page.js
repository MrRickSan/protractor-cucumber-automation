/*jslint browser: true*/
/*global element,by,browser, module*/
//This is the page object where the locators are identified
class VegasPage {
    constructor() {
        this.searchButton = element.all(by.css('button.btn-search-magnifier')).get(0)
        this.searchInput = element(by.xpath('//div[contains(@class, "search-input__input-wrapper")]/input'))

        this.firstResult = element(by.id('root'))
            .all(by.xpath('//div/div[3]')).get(0)
            .all(by.xpath('//section/div/div[1]/div[1]')).get(0)

        this.moreButton = element.all(by.id('root'))
            .all(by.xpath('//div/div[3]/section/div/div/div[1]/div/div')).get(0)
            .all(by.xpath('//div/div[3]/section/div/div/div[1]/div/div/div/div[3]/div/button[2]'))

        this.playButton = element(by.buttonText('Play Now'))
        this.gameTitle = element(by.css('h2.tile-details__title'))
        this.mobileGameTitle = element(by.id('root'))
            .all(by.xpath('//div/div[3]')).get(0)
            .all(by.xpath('//div/header/h3')).get(0)
    }

    get () {
        return browser.get('https://vegas.williamhill.com/')
    }
    
    clickSearchButton () {
        return this.searchButton.click()
    }
    
    searchButtonIsDisplayed () {
        return this.searchButton.isDisplayed()
    }
    
    searchInputIsDisplayed () {
        return this.searchInput.isDisplayed()
    }
    
    clickInputSearch () {
        return this.searchInput.click()
    }
    
    inputSearch (input) {
        return this.searchInput.sendKeys(input)
    }
    
    mouseHoverFirstResult () {
        browser.sleep(2000)
        return browser.actions().mouseMove(this.firstResult).mouseMove({x: 50, y: 0}).perform().then(function() {
            browser.sleep(2000)
          })
    }
    
    clickFirstResult () {
        browser.sleep(3000)
        return this.firstResult.click().then(function() {
            browser.sleep(3000)
          })
    }
    
    clickMoreButton () {
        return this.moreButton.click().then(function() {
            browser.sleep(2000)
          })
    }
    
    getGameTitle () {
        return this.gameTitle.getText()
    }
    
    getMobileGameTitle () {
        return this.mobileGameTitle.getText()
    }
    
    clickPlayButton () {
        return this.playButton.click().then(function() {
            browser.sleep(3000)
          })
    }
}

module.exports = VegasPage
