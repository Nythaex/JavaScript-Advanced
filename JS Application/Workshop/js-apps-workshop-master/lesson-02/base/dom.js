export  function createElement(type,id,content,parrent){
     const element=document.createElement(type);
    element.id=id;
    element.textContent=content;
    if(parrent){
    parrent.appendChild(element);
    }
 return element;
}