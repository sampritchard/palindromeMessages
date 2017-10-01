const Browser = require('zombie');
const app = require('../server');

Browser.localhost('localhosr', 3000);

  describe('User enters a form', () => {
    const browser = new Browser();

    before(() => {
      return browser.visit('/');
    })

    before( async() => {
      browser.fill('palindrome', 'Hello');
      await browser.pressButton('Submit');
    })

    it('can returns the false Page', () => {
      browser.assert.text('h1', 'FALSE!')
    })
  })
