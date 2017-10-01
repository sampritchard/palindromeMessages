const Browser = require('zombie');
const app = require('../server');
const throwError = new Error("Enter a string!")

Browser.localhost('localhosr', 3000);

  describe('User enters a form with spaces and punctuation', () => {
    const browser = new Browser();

    before(() => {
      return browser.visit('/');
    })

    before( async() => {
      browser.fill('palindrome', 'hello ..,/. olleh');
      await browser.pressButton('Submit');
    })

    it('can returns the false Page', () => {
      browser.assert.text('h1', 'TRUE!')
    })
  })

  describe('User enters a form with Capital Letters and Numbers', () => {
    const browser = new Browser();

    before(() => {
      return browser.visit('/');
    })

    before( async() => {
      browser.fill('palindrome', 'heH989');
      await browser.pressButton('Submit');
    })

    it('can returns the false Page', () => {
      browser.assert.text('h1', 'TRUE!')
    })
  })

  describe('User enters a blank form', () => {
    const browser = new Browser();

    before(() => {
      return browser.visit('/');
    })

    before( async() => {
      browser.fill('palindrome', '');
      await browser.pressButton('Submit');
    })

    it('can returns the false Page', () => {
      browser.assert.text('h1', 'ERROR! Please enter a valid string')
    })
  })
