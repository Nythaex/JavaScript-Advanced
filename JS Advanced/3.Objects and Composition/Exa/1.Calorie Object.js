function createAnObject(props){
    let object={};

     for (let index = 0; index < props.length; index+=2) {
         object[props[index]]=Number(props[index+1])

     }
   console.log(object);

}

