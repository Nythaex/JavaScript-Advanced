function printTowns(array){
     let towns={};


     for (const prop of array) {
         let props=prop.split(' <-> ');
         let population=Number(props[1]);
           if(!towns[props[0]]){
            towns[props[0]]=0;
           }

         towns[props[0]]+=population;
     }
      

      for (const key in towns) {
         console.log(`${key} : ${towns[key]}`);
      }


}


printTowns(['Sofia <-> 1200000',
'Sofia <-> 20000',
]
)