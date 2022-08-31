function biggerHalf(arr){
        arr.sort((a,b)=>b-a);
        let newArr=arr.slice(0,Math.ceil(arr.length/2));
        return newArr.sort((a,b)=>a-b);
}

