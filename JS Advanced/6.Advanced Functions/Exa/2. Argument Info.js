function printType(){

    let data={};

    Array.from(arguments).forEach((line) => {

        let type=typeof line;
        if(!data[type]){
            data[type]=1;
        }else{
            data[type]++;
        }
        console.log(`${type}: ${line}`);
    });

    Object.keys(data).sort((v1,v2)=>data[v2]-data[v1]).forEach(v1=>console.log(`${v1} = ${data[v1]}`))


}


printType({ name: 'bob'}, 3.333, 9.999)