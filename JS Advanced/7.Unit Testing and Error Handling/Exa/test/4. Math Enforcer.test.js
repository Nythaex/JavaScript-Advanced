const mathEnforcer = require('../4. Math Enforcer');
const expect = require('chai').expect;



describe('Math Enforcer', () => {
    describe('Add Five', () => {

      
        it('invalid parameter string', () => {
            let input = 'test'
            let result = mathEnforcer.addFive(input);
            expect(result).to.be.undefined

        })
      
        it('valid parameter', () => {
            let input = 4
            let result = mathEnforcer.addFive(input);
            expect(result).equals(9)

        })
        it('valid parameter', () => {
            let input = -4
            let result = mathEnforcer.addFive(input);
            expect(result).equals(1)

        })
        it('valid parameter floats', () => {
            let input = 4
            let result = mathEnforcer.addFive(12.2);
            expect(result).equals(17.2-17)

        })
        it('valid negative parameter floats', () => {
            let input = 4
            let result = mathEnforcer.addFive(-5.2);
            expect(result).to.be.closeTo(-0.2, 0.01)

        })
    })


    describe('Subtract Ten', () => {
       

        it('invalid parameter', () => {
            let input = 'test'
            let result = mathEnforcer.subtractTen(input);
            expect(result).to.be.undefined

        })
        it('valid parameter', () => {
            let input = 15
            let result = mathEnforcer.subtractTen(input);
            expect(result).equals(5)

        })
        it('valid parameter smaller', () => {
            let input = 5
            let result = mathEnforcer.subtractTen(input);
            expect(result).equals(-5)

        })
        it('valid parameter floats', () => {
            let input = 4
            let result = mathEnforcer.subtractTen(12.2);
            expect(result).to.be.closeTo(2.2, 0.01)

        })
        it('valid negative parameter floats', () => {
            let input = 4
            let result = mathEnforcer.subtractTen(-5.2);
            expect(result).equals(-15.2)

        })

    })
    describe('Sum', () => {
      

        it('first invalid parameter', () => {

            let result = mathEnforcer.sum(2, 'asf');
            expect(result).to.be.undefined

        })
        it('second invalid parameter', () => {

            let result = mathEnforcer.sum('asf', 21);
            expect(result).to.be.undefined

        })
        it('two invalid parameters', () => {

            let result = mathEnforcer.sum('asf', 'asf');
            expect(result).to.be.undefined

        })
        it('valid parameter', () => {
            let input = 4
            let result = mathEnforcer.sum(2, 4);
            expect(result).equals(6)

        })
        it('two valid decimal parameters', () => {
            let input = 4
            let result = mathEnforcer.sum(2.1, 4.1);
            expect(result).to.be.closeTo(6.2,0.1)

        })
        it('valid negative parameter', () => {
            let input = 4
            let result = mathEnforcer.sum(-2, -4);
            expect(result).equals(-6)

        })
        it('valid negative parameter floats', () => {
            let input = 4
            let result = mathEnforcer.sum(-2.2, 4);
            expect(result).to.be.closeTo(1.8, 0.01)

        })

    })
})