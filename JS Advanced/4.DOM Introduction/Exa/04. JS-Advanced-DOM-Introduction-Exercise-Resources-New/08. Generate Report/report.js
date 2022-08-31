function generateReport() {
     let checkBoxes=Array.from(document.querySelectorAll('thead tr th input'));

     let indexes=[]
     let checked=[]

      let objects=[];
    
     for (let index = 0; index < checkBoxes.length; index++) {
      
         if(checkBoxes[index].checked){
             indexes.push(index)
             checked.push(checkBoxes[index].name)
         }
     }

 
     let trs=Array.from(document.querySelectorAll('tbody tr'));

     for (const tr of trs) {
        let prop=Array.from(tr.children);
        let object={};
        let nameIndex=0;
        let valueIndex=0;
       for (let index = 0; index < prop.length; index++) {
           if(indexes.includes(index)){
               object[checked[nameIndex]]=prop[indexes[valueIndex]].textContent
               console.log(prop);
               console.log(prop[indexes[valueIndex]]);
               nameIndex++;
               valueIndex++;
           }
           
       }
       objects.push(object)
     }
   
   document.getElementById('output').textContent=JSON.stringify(objects)

}