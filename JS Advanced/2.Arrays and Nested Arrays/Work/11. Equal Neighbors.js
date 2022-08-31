function findPairs(arr){
    let pairs=0;


    for (let index = 0; index < arr.length; index++) {
       for (let j = 0; j < arr[index].length; j++) {


        if(index!==0){
            if(arr[index][j]===arr[index-1][j]){
                arr[index][j]=null;
                pairs++;
            }
        }

        if(index!==arr.length-1){
            if(arr[index][j]===arr[index+1][j]){
                arr[index][j]=null;
                pairs++;
            }
        }

        if(j!==0){
            if(arr[index][j]===arr[index][j-1]){
                arr[index][j]=null;
                pairs++;
            }
        }

        if(j!==arr.length){
            if(arr[index][j]===arr[index][j+1]){
                arr[index][j]=null;
                pairs++;
            }
        }

       }
    }
    return pairs;
}


 console.log(findPairs([['test', 'yes', 'yo', 'ho'],
 ['well', 'done', 'yo', '6'],
 ['not', 'done', 'yet', '5']]

));