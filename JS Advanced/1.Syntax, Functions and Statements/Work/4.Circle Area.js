function circleArea(a){
    if(typeof(a)==='number'){
      console.log(Math.round(Math.PI*a**2*100)/100);
    }else{
        console.log("We can not calculate the circle area, because we receive a "+typeof(a)+".");
    };
}
