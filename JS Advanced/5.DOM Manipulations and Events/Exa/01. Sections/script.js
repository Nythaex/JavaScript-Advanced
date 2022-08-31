function create(words) {

     for (const text of words) {
       let divElement=document.createElement('div'); 
       let pElement=document.createElement('p');   
      pElement.textContent=text;
      pElement.style.display='none'
      divElement.appendChild(pElement);
      divElement.addEventListener('click',function(e){
        e.currentTarget.children[0].style.display='block';
      })
     document.getElementById('content').appendChild(divElement)
     }



}