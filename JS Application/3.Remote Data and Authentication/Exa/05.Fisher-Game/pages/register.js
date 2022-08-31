import { authenticate } from "../authentication.js";

const registerView=document.getElementById('register-view');
const mainElement=document.querySelector('main');
export function register(){
   registerView.style.display='block'
   mainElement.appendChild(registerView);

  const formElement=registerView.querySelector('form');
  
  formElement.addEventListener('submit',(e)=>{
   e.preventDefault();
   const form=new FormData(e.currentTarget)
   
   const email=form.get('email');
   const password=form.get('password')
   const repeat=form.get('rePass')

   


   fetch('http://localhost:3030/users/register',{
      method:'post',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify({
          email,
          password,
          repeat
      })
   }).then(response=>response.json())
   .then(result=>{
         localStorage.setItem('user',JSON.stringify(result))
       authenticate();
       window.location.reload();
   })
   .catch(error=>alert(error))
  })




}