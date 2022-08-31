const lookupChar = require('../3. Char Lookup');
const expect = require('chai').expect;


describe('Char Lookup', () => {

    it('invalid first parameter', () => {

        let string = 12;
        let index = 2
        let result = lookupChar(string, index);
        expect(result).to.be.undefined;
    })

    it('invalid second parameter', () => {

        let string = "asf";
        let index = "asf"
        let result = lookupChar(string, index);
        expect(result).to.be.undefined;
    })

    it('negative index parameter', () => {

        let string = 'test';
        let index = -1
        let result = lookupChar(string, index);
        expect(result).equals('Incorrect index')
    })
    it('higher index parameter', () => {

        let string = 'test';
        let index = 11
        let result = lookupChar(string, index);
        expect(result).equals('Incorrect index')
    })
    it('correct', () => {

        let string = 'test';
        let index = 1
        let result = lookupChar(string, index);
        expect(result).equals('e')
    })

    it('float index', () => {

        let string = 'test';
        let index = 1.2
        let result = lookupChar(string, index);
        expect(result).to.be.undefined
    })
})