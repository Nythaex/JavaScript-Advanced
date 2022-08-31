const sum=require('../4. Sum of Numbers')
const expect=require('chai').expect;

describe('test exa',()=>{
    it('it should return sum',()=>{
        let array=[2,14,52];
        let expectedOutput=68

        let outPut=sum(array);

        expect(outPut).to.equal(expectedOutput)

    })
    it('it should return 0',()=>{
        let array=[];
        let expectedOutput=0

        let outPut=sum(array);

        expect(outPut).to.equal(expectedOutput)

    })
    it('it should return NaN',()=>{
        let array=[2,'asf'];
        let expectedOutput=0

        let outPut=sum(array);

        expect(outPut).to.be.NaN

    })
})