function printNth(arr,steps){
    let newArr=[];
    for (let index = 0; index < arr.length; index+=steps) {
        newArr.push(arr[index])
    }
   return newArr;
}

printNth(['5', 
'20', 
'31', 
'4', 
'20'], 
2
)