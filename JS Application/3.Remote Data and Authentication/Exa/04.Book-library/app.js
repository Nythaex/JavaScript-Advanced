let myId='';
function setEvents(){
    load()
    createBook();



}
function createElement(type, className, content, parent) {
    const result = document.createElement(type);

    if (className) {
        result.classList.add(className);
    }

    if (content) {
        result.textContent = content;
    }
   

    parent.appendChild(result);

    return result;
}

function createBook(){
    let formElement=document.querySelector('form')
    formElement.addEventListener('submit',createBookEvent)



}
function updateBook(id){
    let formElement=document.querySelector('form')
    let title=document.querySelector('input[name="title"]');
    let author=document.querySelector('input[name="author"]');

    myId=id
    console.log(id);
    let formTitleElement=document.querySelector('form').children[0];
        formTitleElement.textContent='Edit FORM'
        let formButtonElement=document.querySelector('form').children[5];
        formButtonElement.textContent='Save'
        formElement.removeEventListener('submit',createBookEvent)

            formElement.addEventListener('submit',updateBookEvent)
   
  
}



function updateBookEvent(e){
    let formElement=document.querySelector('form')
    let title=document.querySelector('input[name="title"]');
    let author=document.querySelector('input[name="author"]');
      e.preventDefault();
      
      
      fetch('http://localhost:3030/jsonstore/collections/books/'+myId,{
          method:'put',
          headers:{'Content-type':'application/json'},
          body:JSON.stringify({
              author:author.value,
              title:title.value,
              _id:myId
          })
      }).then(result=>{

          loadBooksEvent()
          formElement.removeEventListener('submit',updateBookEvent)
          formElement.addEventListener('submit',createBookEvent)
          let formTitleElement=document.querySelector('form').children[0];
        formTitleElement.textContent='FORM'
        let formButtonElement=document.querySelector('form').children[5];
        formButtonElement.textContent='Submit'
          author.value='';
          title.value='';
      })
}

function createBookEvent(e){
    let title=document.querySelector('input[name="title"]');
    let author=document.querySelector('input[name="author"]');
          e.preventDefault();
  
          fetch('http://localhost:3030/jsonstore/collections/books',{
              method:'post',
              headers:{'Content-type':'application/json'},
              body:JSON.stringify({
                  author:author.value,
                  title:title.value
              })
          }).then(result=>{
              loadBooksEvent()
          })
  
}

function loadBooksEvent(){
   
    let tBodyElement=document.querySelector('tbody')
    tBodyElement.innerHTML='';
    fetch('http://localhost:3030/jsonstore/collections/books')
    .then(response=>response.json())
    .then(result=>{
        Object.values(result).forEach(element=>{
         
            let trElement=createElement('tr',undefined,undefined,tBodyElement)
            
            let titleElement=createElement('td',undefined,element.title,trElement)
            let authorElement=createElement('td',undefined,element.author,trElement)

            let buttonsElement=createElement('td',undefined,undefined,trElement)

            let editButtonElement=createElement('button',undefined,'Edit',buttonsElement)
            
            editButtonElement.addEventListener('click',()=>{
                let title=document.querySelector('input[name="title"]');
                 let author=document.querySelector('input[name="author"]');
            title.value=element.title;
             author.value=element.author;
             console.log(element._id);
                updateBook(element._id)
            })
        
            let deleteButtonElement=createElement('button',undefined,'Delete',buttonsElement)
            deleteButtonElement.addEventListener('click',()=>{
                console.log(element);
                fetch('http://localhost:3030/jsonstore/collections/books/'+element._id,{
                    method:'delete'
                }).then(response=>loadBooksEvent());
            })
           
        })
    })



}


function load(){
    let loadButton=document.getElementById('loadBooks')
    loadButton.addEventListener('click',loadBooksEvent)
}

setEvents()