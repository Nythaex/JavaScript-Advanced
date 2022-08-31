import { authenticate } from "../authentication.js";

const loginView=document.getElementById('login-view');
const mainElement=document.querySelector('main');
const notificationElement=document.querySelector('.notification');
export function login(){
   loginView.style.display='block'
   mainElement.appendChild(loginView);
   
   const formElement=loginView.querySelector('form');
  
  formElement.addEventListener('submit',(e)=>{
   e.preventDefault();
   const form=new FormData(e.currentTarget)
   
   const email=form.get('email');
   const password=form.get('password')


   


   fetch('http://localhost:3030/users/login',{
      method:'post',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify({
          email,
          password
      })
   }).then(response=>{
     if(response.status!==200){
        throw new Error('Forbiden');
     }
      return  response.json()
    })
   .then(result=>{
       console.log(result);
         localStorage.setItem('user',JSON.stringify(result))
       authenticate();
       window.location.reload();
       
   })
   .catch(error=>{
       alert(error)
   })
  })



}