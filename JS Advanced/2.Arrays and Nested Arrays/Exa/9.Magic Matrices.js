function isitMagic(array){
   let isIt= true;
   let lastOne=0;

 for (let index = 0; index < array.length; index++) {
     let sum=0;
     
     if(index===0){
         lastOne=sum;
     }
    for (let j= 0; j< array[index].length; j++) {
      sum+=array[index][j];
    }


     if(sum!==lastOne){
         isIt=false;
         break;
     }
 }
 console.log(isIt);
}

console.log([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   );