function slice(arr,start,end){
   let newArr=arr.slice(arr.findIndex(i=>i==start),arr.findIndex(i=>i==end)+1);
   return newArr;

}
