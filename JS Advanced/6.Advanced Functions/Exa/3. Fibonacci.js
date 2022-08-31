function getFibonator(){
    let first=0;
    let second=1;
    

    return function (){
        
       let container=second+first;

      
      first=second;
      second=container;
        
     return first
    }

}

