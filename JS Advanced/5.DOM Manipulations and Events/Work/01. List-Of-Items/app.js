function addItem() {

    let inputElement = document.getElementById('newItemText');

     let result=document.createElement('li');
     result.textContent=inputElement.value;
    
     document.getElementById('items').appendChild(result);
     inputElement.value='';
}