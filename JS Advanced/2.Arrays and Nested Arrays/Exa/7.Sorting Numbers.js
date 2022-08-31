function sort(arr){
  arr.sort((a,b)=>a-b);
   let newArr=[];
    
   while(arr.length!==0){
    newArr.push(arr.shift());
    newArr.push(arr.pop())
   }
   
  return  newArr;

}
