function operate(array){
    const opFromString={
        '*'(n1,n2){return n1*n2},
        '/'(n1,n2){return n2/n1},
        '-'(n1,n2){return n2-n1},
        '+'(n1,n2){return n1+n2}
    }
     let end=false;
    let operands=[];

    array.forEach(element => {
        if(typeof(element)==='number'){
            operands.push(element)
        }else{
            if(operands.length<2){
                console.log(`Error: not enough operands!`);
                end=true;
                return;
            }

            let first=operands.pop();
            let second=operands.pop();

            let result=opFromString[element](first,second);
            operands.push(result);
        }
    });

    if(operands.length>1){
        console.log('Error: too many operands!');
        return;
    }else if(end){
       return
    }
    console.log(operands[0]);
}

operate([31,
    2,
    '+',
    11,
    '-']
   )