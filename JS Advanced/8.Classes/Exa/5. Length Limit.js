class Stringer {
  

    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength=innerLength
    }

    decrease(length){
        this.innerLength=this.innerLength-length<0?0:this.innerLength-length
    }
    increase(length){
        this.innerLength+=length
     }
     toString(){
         return this.innerLength>=this.innerString.length?this.innerString:this.innerString.slice(0,this.innerLength)+'...'
     }

}
let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // ...
