function findBiggest(arr){
    let biggest=Math.min;
      for (let index = 0; index < arr.length; index++) {
         for (let j = 0; j < arr[index].length; j++) {
             if(arr[index][j]>biggest){
                 biggest=arr[index][j];
             } 
         }
      }
      return biggest;
}