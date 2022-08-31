function attachEvents() {



 let createButton=document.getElementById('btnCreate');
 
         createButton.addEventListener('click',()=>{

                  let [name,phone]=document.querySelectorAll('input')

                  fetch('http://localhost:3030/jsonstore/phonebook',{
                      method:'post',
                      headers:{'Content-type':'application/json'},
                      body:JSON.stringify({
                        person:name.value,
                        phone:phone.value
                      })

                  }).then(result=>{
                      load();
                  })
                  

          
         })




          let btnLoadButton=document.getElementById('btnLoad');
          btnLoadButton.addEventListener('click',load)

        function load(){
           
            fetch('http://localhost:3030/jsonstore/phonebook')
            .then(response=>response.json())
            .then(result=>{
                let phonebook=document.getElementById('phonebook');
                phonebook.innerHTML='';

                Object.values(result).forEach(element => {
                    let li=document.createElement('li');
                    li.textContent=`${element.person}: ${element.phone}`


                    let deleteButton=document.createElement('button');
                    deleteButton.textContent='Delete'
                    deleteButton.addEventListener('click',()=>{
                         fetch('http://localhost:3030/jsonstore/phonebook/'+element._id,{
                             method:'delete'
                         }).then(response=>{
                             load()
                         })

                    })
                    li.appendChild(deleteButton);
                    phonebook.appendChild(li)
                  

                });

            })
        
        }

}

attachEvents();