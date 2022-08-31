const expect = require('chai').expect;
const isSymmetric = require('../5. Check for Symmetry');


describe('is array correct', () => {
    it('input is string', () => {

        let input = 'asf'
        let output = isSymmetric(input);
        expect(output).to.be.false;


    })
    it('input is array with different types', () => {

        let input = [2,'2']
        let output = isSymmetric(input);
        expect(output).to.be.false;


    })
    it('input is mixed array', () => {

        let input = [2,-1,function(){return 1},new Date]
        let output = isSymmetric(input);
        expect(output).to.be.false;


    })
    it('input is number', () => {

        let input = 2
        let output = isSymmetric(input);
        expect(output).to.be.false;


    })
    it('input is function', () => {

        let input = function(){}
        let output = isSymmetric(input);
        expect(output).to.be.false;


    })

    it('must be symetric', () => {

        let input = [2, 4, 4, 2]
        let output = isSymmetric(input);
        expect(output).to.be.true;


    })
    it('must be symetric with odd lenght', () => {

        let input = [2, 4, 2]
        let output = isSymmetric(input);
        expect(output).to.be.true;


    })
    it('it is not symetric', () => {

        let input = [2, 4, 4, 3, 2]
        let output = isSymmetric(input);
        expect(output).to.be.false;


    })
    it('it is not symetric with odd lenght', () => {

        let input = [2, 4, 1]
        let output = isSymmetric(input);
        expect(output).to.be.false;


    })


})
