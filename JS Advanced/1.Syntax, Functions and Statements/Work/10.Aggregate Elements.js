function aggregate(arr) {
    let result = '';

    let num = 0;

    for (let i = Number(0); i < arr.length; i++) {
        num += arr[i];

    };
     result+=num;
    result += '\n';

    num = 0;
    for (let i = Number(0); i < arr.length; i++) {
        num += (1 / arr[i]);
    };
    result+=num;
    result += '\n';
    for (let i = Number(0); i < arr.length; i++) {
        result += String(arr[i]);
    };


    return result;
}

console.log(aggregate([1, 2, 3]));