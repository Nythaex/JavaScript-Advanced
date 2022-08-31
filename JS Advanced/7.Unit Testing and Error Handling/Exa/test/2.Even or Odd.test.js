const isOddOrEven=require('../2. Even Or Odd');
const expect=require('chai').expect;


describe('Even or Odd',()=>{

it('number input',()=>{
    let input=123;
    let result=isOddOrEven(input);
    expect(result).to.be.undefined;
})

it('even input',()=>{
    let input="evenText";
    let result=isOddOrEven(input);
    expect(result).equals('even');
})
it('even input',()=>{
    let input="oddText";
    let result=isOddOrEven(input);
    expect(result).equals('odd');
})


})