function extract(array) {
    let biggest = -222;
    let increasingArray = [];

    for (let index = 0; index < array.length; index++) {
        if (array[index] >= biggest) {
            biggest = array[index];
            increasingArray.push(array[index]);
        }

    }

   return increasingArray;
}

