function findBiggest(arr){


    let first=0;
    let second=0;


      for (let index = 0; index < arr.length; index++) {
         first+=arr[index][index]
      }

      for (let index = arr.length-1; index >=0; index--) {
       second+=arr[index][arr.length-1-index]
     }
     return [first,second].join(' ');
}