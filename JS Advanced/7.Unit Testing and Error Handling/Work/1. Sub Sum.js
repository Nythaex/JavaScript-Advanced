function sum(array,start,end){

    if(!Array.isArray(array)){
      return NaN;
    }
    
    start=Math.max(start,0)
    end=Math.min(end,array.length);

    let slicedArray=array.slice(start,end+1)

    return slicedArray.reduce((a,n)=>{
        return a+Number(n);
    },0)

}

console.log(sum([10, 20, 30, 40, 50, 60], 3, 300)); 