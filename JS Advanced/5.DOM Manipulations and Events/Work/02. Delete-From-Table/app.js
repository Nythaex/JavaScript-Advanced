function deleteByEmail() {


    let inputElement=document.querySelector(`label input[name='email']`);
    let emailsElements=Array.from(document.querySelectorAll(`tbody tr td:nth-child(2)`));
    let output=document.getElementById('result');
    let deleteChild=emailsElements.find(e=>e.textContent===inputElement.value);
    if(deleteChild){
        deleteChild.parentNode.remove();
       output.textContent='Deleted.';
    }else{
        output.textContent='Not found.';
    }

  
}