function solution(number){
 function add(firstNumber,secondNumber){
     return firstNumber+secondNumber
 }
 return add.bind(this,number)
}

   let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));

   
