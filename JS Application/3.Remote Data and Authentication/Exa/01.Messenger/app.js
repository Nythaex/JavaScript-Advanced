function attachEvents() {
         let submitButton=document.getElementById('submit');
 
         submitButton.addEventListener('click',()=>{
                  let [name,message]=document.querySelectorAll('input')

                  fetch('http://localhost:3030/jsonstore/messenger',{
                      method:'post',
                      headers:{'Content-type':'application/json'},
                      body:JSON.stringify({
                        author:name.value,
                        content:message.value
                      })

                  })

         })



         let refreshButton=document.getElementById('refresh');
         refreshButton.addEventListener('click',()=>{
            let [name,message]=document.querySelectorAll('input')

            fetch('http://localhost:3030/jsonstore/messenger')
            .then(response=>response.json())
            .then(result=>{
                let messages=document.getElementById('messages');
                messages.textContent='';

           
                Object.values(result).forEach(element => {
                    messages.textContent+=`${element.author} : ${element.content}\n`
                    console.log(element);


                });

            })
        

   })



}

attachEvents();