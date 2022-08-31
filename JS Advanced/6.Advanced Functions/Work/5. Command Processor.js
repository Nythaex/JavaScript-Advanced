
function solution(){
    let text='';

    return {
         append(string){
           text+=string;
         },
         removeStart(n){
           text=text.slice(n,text.length)
         },
         removeEnd(n){
            text=text.slice(0,text.length-n)
         },
         print(){
            console.log(text);
         }
    }


}


let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
