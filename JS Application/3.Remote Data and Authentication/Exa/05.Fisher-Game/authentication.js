 import { navigate } from "./router.js";

 const loginButton=document.getElementById('login');
 const registerButton=document.getElementById('register');
 const logoutButton=document.getElementById('logout');
 const username=document.querySelector('.email span');

export function authenticate(){

    const userData=localStorage.getItem('user');
    
   const user=JSON.parse(userData);


    if(userData){
      loginButton.style.display='none';
      registerButton.style.display='none';
      logoutButton.style.display='inline';
      console.log(logoutButton);
      username.textContent=user.email;
    }
    else{
        loginButton.style.display='inline';
        registerButton.style.display='inline';
        logoutButton.style.display='none';
        username.textContent='guest';
    } 
    
}

export function logout(){
    localStorage.removeItem('user');
    authenticate();
    window.location.reload();
}