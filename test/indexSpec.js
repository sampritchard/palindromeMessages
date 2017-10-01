const Browser = require('zombie');
const app = require('../server');
const assert = require('assert');

Browser.localhost('localhost', 3000);

  describe('User visits index page', () => {
    const browser = new Browser;

    before(() => {
      return browser.visit('/');
    })

    describe('sees the index page', () => {
      it('should be successful', () => {
        browser.assert.success();
      })

      it('should see the heading', () => {
        browser.assert.text('h1', 'Palindrome Finder')
      })

      it('should see a form', () => {
        browser.assert.element('form')
      })
    })
  })
