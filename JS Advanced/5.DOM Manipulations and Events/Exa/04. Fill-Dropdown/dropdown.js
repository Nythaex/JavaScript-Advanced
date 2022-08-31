function addItem() {
    let textElement=document.getElementById('newItemText');
    let valueElement=document.getElementById('newItemValue');


      let optionElement=document.createElement('option');
      optionElement.textContent=textElement.value;
      optionElement.value=valueElement.value;
      textElement.value='';
      valueElement.value=''
      document.getElementById('menu').appendChild(optionElement);


}