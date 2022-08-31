function same(a){
    let digit=String(a).charAt(0)
    let areThey=true;
    let sum=0;

    for (let index = 1; index < String(a).length; index++) {
       if (String(a).charAt(index)!==digit) {
           areThey=false
        
       }
       sum+=Number(String(a).charAt(index))
    }
   
    sum+=Number(digit);
   return areThey+"\n"+Number(sum);
}
