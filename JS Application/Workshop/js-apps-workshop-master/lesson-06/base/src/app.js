import { createNav } from './navigation.js';
import { logout as apiLogout } from './api/data.js';

import { setupHome } from './views/home.js';
import { setupCatalog } from './views/catalog.js';
import { setupCreate } from './views/create.js';
import { setupLogin } from './views/login.js';
import { setupRegister } from './views/register.js';
import { setupDetails } from './views/details.js';
import { setupEdit } from './views/edit.js';


import {homeTemplate} from './templates/home.js'
import {catalogTemplate} from './templates/catalog.js'
import {detailsTemplate} from './templates/details.js'
import {loginTemplate} from './templates/login.js'
import {registerTemplate} from './templates/register.js'
import {createTemplate} from './templates/create.js'
import {editTemplate} from './templates/edit.js'

window.addEventListener('load', async () => {
    const main = document.querySelector('main');
    const navbar = document.querySelector('nav');
    const navigation = createNav(main, navbar);



   console.log(homeTemplate());
    

    navigation.registerView('home',homeTemplate(), setupHome);
    navigation.registerView('catalog', catalogTemplate(), setupCatalog, 'catalogLink');
    navigation.registerView('details',detailsTemplate(), setupDetails);
    navigation.registerView('login', loginTemplate(), setupLogin, 'loginLink');
    navigation.registerView('register', registerTemplate(), setupRegister, 'registerLink');
    navigation.registerView('create', createTemplate(), setupCreate, 'createLink');
    navigation.registerView('edit', editTemplate(), setupEdit);
    document.getElementById('views').remove();

    navigation.setUserNav();
    document.getElementById('logoutBtn').addEventListener('click', logout);

    // Start application in catalog view
    navigation.goTo('home');


    async function logout() {
        try {
            await apiLogout();
            navigation.updateNav();
            navigation.goTo('catalog');
        } catch (err) {
            alert(err.message);
        }
    }
});
