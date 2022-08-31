function process(commands){
    let array=[];
    
    
    for (const command of commands) {
        let [comandName,value]=command.split(' ');

        let commandChoser={
            add(){ array.push(value)},
            remove() {array=array.filter(e=>e!==value)},
            print() {console.log(array.join(','))}
         }
     
       commandChoser[comandName]();

    }


}