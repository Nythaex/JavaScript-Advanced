function printSmallest(arr){
     arr.sort((a,b)=>a-b);
    let newArr=[arr[0],arr[1]];
    console.log(newArr.join(' '));
}

