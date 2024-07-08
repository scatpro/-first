const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')
const browserCommands = require('../../commands/browserCommands')

// test/specs/example.spec.js

describe('Custom Command Test', () => {
    it('should compare the title of the page', async () => {
        await browser.url('https://www.example.com');
        
        // Используем нашу пользовательскую команду для сравнения заголовка страницы
        const isTitleCorrect = await browserCommands.getTitleAndCompare('Example Domain');
        
        console.log('Is title correct? ', isTitleCorrect);
        expect(isTitleCorrect).toBe(true);
    });
});
