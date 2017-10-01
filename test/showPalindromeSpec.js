const Browser = require('zombie');
const app = require('../server');
const assert = require('assert');

Browser.localhost('localhost', 3000);

  describe('User visits index page', () => {
    const browser = new Browser;

    before(async() => {
      await browser.visit('/palindromes');
    })

    describe('sees the index page', () => {
      it('should be successful', () => {
        browser.assert.success();
      })

      it('should see the palindrome', () => {
        browser.assert.text('li', 'byybhelloollehheh')
      })
    })
  })
