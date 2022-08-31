function doubleOddIndexes(arr){

    let newArr=arr.filter((a, i) => i % 2 !== 0)
    
       console.log(newArr.reverse().map(i=>i*2).join(' '));

}