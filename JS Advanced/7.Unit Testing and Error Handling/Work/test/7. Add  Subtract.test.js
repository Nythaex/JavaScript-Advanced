const expect=require('chai').expect;
const createCalculator=require('../7. Add  Subtract');

describe('Add/Substract',()=>{
    

     it('calling add is working with positive number',()=>{
        let command=createCalculator();
        command.add(12)

        expect(command.get()).equals(12)
     })
     it('calling add is working with negative number',()=>{
        let command=createCalculator();
        command.add(-2)
        expect(command.get()).equals(-2)
     })

     it('calling substract is working with positive number',()=>{
        let command=createCalculator();
        command.subtract(12)
        expect(command.get()).equals(-12)   
     })
     it('calling substract is working with negative number',()=>{
        let command=createCalculator();
        command.subtract(-12)
        expect(command.get()).equals(12)
     })

     it('calling substract with string',()=>{
        let command=createCalculator();
        command.subtract('afs12')
        expect(command.get()).to.be.NaN
     })

     it('calling add with string',()=>{
        let command=createCalculator();
        command.add('afs12')
        expect(command.get()).to.be.NaN
     })
     it('trying to change value',()=>{
        let command=createCalculator();
        expect(command.get()).equals(0)
     })

     it('calling add with array',()=>{
        let command=createCalculator();
        command.add([])
        expect(command.get()).equals(0)
     })
})