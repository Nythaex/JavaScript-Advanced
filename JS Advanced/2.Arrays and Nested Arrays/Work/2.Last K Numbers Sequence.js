function lastNumbers(n,k){
   let arr=[1];
   for (let index = 1; index < n; index++) {
    let sum=0;
       for (let j=k-1; j>=0; j--) {
           if(index-1-j>=0){
           sum+=arr[index-1-j];
           }
       }
       arr.push(sum);
   }
   return arr;
}
