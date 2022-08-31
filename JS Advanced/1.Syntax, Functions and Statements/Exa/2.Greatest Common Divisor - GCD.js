function divisor(a, b) {
    let num = 0;
    if (a >= b) {
        num = b
    } else {

     num=a;
    }
     while(a%num!==0 ||b%num!==0){
        num-=1;
     }
     return num;

}
