function cook(num, op1, op2, op3, op4, op5){

    let number=Number(num);

    let arr = [ op1, op2, op3, op4, op5 ];

    for (let index = 0; index < arr.length; index++) {
        switch (arr[index]) {
            case 'chop': number=number/2; break;
            case 'dice': number=Math.sqrt(number); break;
            case 'spice': number=number+1; break;
            case 'bake': number=number*3; break;
            case 'fillet': number=number-(number*0.2); break;

        }
        console.log(number);
    }
}
 cook('32', 'chop', 'chop', 'chop', 'chop', 'chop')