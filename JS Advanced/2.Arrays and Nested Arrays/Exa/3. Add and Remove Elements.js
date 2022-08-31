function addAndRemove(array) {
    let arrayOfNums = [];

    for (let index = 0; index < array.length; index++) {
        let command = array[index];
        if (command === 'add') {
            arrayOfNums.push(index+1);
    
        } else {
            arrayOfNums.pop();
        }

    }
    if(arrayOfNums.length===0){
        console.log('Empty');
    }else{
        console.log(arrayOfNums.join('\n'));
    }

}
