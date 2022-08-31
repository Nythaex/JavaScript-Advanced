import {  showCatalog } from '../pages/catalog.js';
import { showCreate } from '../pages/create.js';
import {  showLogin } from '../pages/login.js';
import {  showRegister } from '../pages/register.js';
import {logout} from '../api/auth.js'


const nav = document.querySelector('nav');

const links = {
    'catalogLink': showCatalog,
    'createLink': showCreate,
    'loginLink': showLogin,
    'registerLink': showRegister,
    'logoutBtn': logout,
};

export function goTo(name){
    links[name]();
}

export function setUserNav() {
    if (sessionStorage.getItem('authToken') != null) {
        document.getElementById('user').style.display = 'inline-block';
        document.getElementById('guest').style.display = 'none';
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'inline-block';
    }
}

export function setupNavigation() {
    nav.addEventListener('click', (ev) => {
        if (ev.target.tagName == 'A') {
            const handler = links[ev.target.id];
            if (handler) {
                ev.preventDefault();
                handler();
            }
        }
    });
}

export function setActiveNav(targetId) {
    [...nav.querySelectorAll('a')].forEach(a => a.id == targetId ? a.classList.add('active') : a.classList.remove('active'));
}