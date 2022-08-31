
function attachEvents(){

 let form=document.getElementById('form');

    form.addEventListener('submit',(e)=>{
          e.preventDefault();
          
            let inputForm=new FormData(form)

           let firstName=inputForm.get('firstName');
        
         let lastName=inputForm.get('lastName');
          let  facultyNumber=inputForm.get('facultyNumber');
        let grade=inputForm.get('grade');

        if(typeof firstName==='string'&&firstName!==''&&typeof lastName==='string'&&lastName!==''
        &&facultyNumber.match(/^[0-9]+$/) != null&&grade.match(/^[0-9]+$/) != null){
            fetch('http://localhost:3030/jsonstore/collections/students',{
                 method:'post',
                 headers:{'Content-type':'application/json'},
                 body:JSON.stringify({
                  firstName:inputForm.get('firstName'),
                  lastName:inputForm.get('lastName'),
                  facultyNumber:inputForm.get('facultyNumber'),
                  grade:inputForm.get('grade'),
                 })

             }).then(result=>{
                 console.log(Number(facultyNumber));
               load()
             })
        }
             
     
    })

    load();
    function load(){
           
        fetch('http://localhost:3030/jsonstore/collections/students')
        .then(response=>response.json())
        .then(result=>{
            let tbodyElement=document.querySelector('#results tbody');
            tbodyElement.innerHTML='';

            Object.values(result).forEach(element => {  
                let tr=document.createElement('tr');
                
                let firstNameThElement=document.createElement('th');
                  firstNameThElement.textContent=element.firstName;
                  tr.appendChild(firstNameThElement);
                let lastNameThElement=document.createElement('th');
                lastNameThElement.textContent=element.lastName;
                tr.appendChild(lastNameThElement);
                let facultyNumberThElement=document.createElement('th');
                facultyNumberThElement.textContent=element.facultyNumber;
                tr.appendChild(facultyNumberThElement);
                let gradeThElement=document.createElement('th');
                gradeThElement.textContent=element.grade;
                tr.appendChild(gradeThElement);
                

               tbodyElement.appendChild(tr)
            });

        }).catch(error=>alert(error))
    
    }

}


attachEvents();