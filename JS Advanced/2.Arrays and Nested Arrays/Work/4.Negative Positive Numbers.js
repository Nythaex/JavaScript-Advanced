function sortNumbers(arr){
    let newArr=[];
      for (let index = 0; index < arr.length; index++) {
         if(arr[index]<0){
            newArr.unshift(arr[index])
         }else{
            newArr.push(arr[index])
         }
        
      }

      newArr.forEach(item=>console.log(item));
}