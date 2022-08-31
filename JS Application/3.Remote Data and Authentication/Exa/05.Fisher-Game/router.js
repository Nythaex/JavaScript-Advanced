import { login } from "./pages/login.js";
import { register } from "./pages/register.js";
import { home } from "./pages/home.js";
import { logout } from "./authentication.js";

const mainElement=document.querySelector('main');
const viewsElements=document.querySelector('#views').children

const router={
    'home':home,
    'login':login,
    'register':register,
    'logout':logout
}

export function navigate(path){
    for (const view of viewsElements) {
        view.style.display='none'
    }
    mainElement.innerHTML='';
    
  router[path]();
}