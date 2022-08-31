function printSquare(param){
    let result="";
      if(typeof(param)=='undefined'){
          for(let i=1;i<=5;i++){
            for(let j=1;j<=5;j++){
              result+='*'
            }
            result+='\n'
          }
      }else {
        for(let i=1;i<=param;i++){
            for(let j=1;j<=param;j++){
              result+='*'
            }
            result+='\n'
          }
      }
      return result;
}
   
