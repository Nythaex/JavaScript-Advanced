function addItem() {

    let inputElement = document.getElementById('newItemText');

     let result=document.createElement('li');
     let link=document.createElement('a');
     link.href='#';
     link.textContent='[Delete]'
     link.addEventListener('click',function(e){
         e.currentTarget.parentNode.remove();
     })
     result.textContent=inputElement.value;
     result.appendChild(link)
  
     document.getElementById('items').appendChild(result);
     inputElement.value='';
}