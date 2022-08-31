import { setupCatalog, showCatalog } from './pages/catalog.js';
import { setupCreate } from './pages/create.js';
import { setupLogin } from './pages/login.js';
import { setupRegister } from './pages/register.js';
import { setupDetails } from './pages/details.js';
import { setupEdit } from './pages/edit.js';
import { setUserNav,setupNavigation ,setActiveNav} from './api/router.js';


window.addEventListener('load', async () => {
    setUserNav();

    const main = document.querySelector('main');
    

    setupCatalog(main, document.getElementById('catalog'), setActiveNav);
    setupCreate(main, document.getElementById('create'), setActiveNav);
    setupLogin(main, document.getElementById('login'), setActiveNav);
    setupRegister(main, document.getElementById('register'), setActiveNav);
    setupDetails(main, document.getElementById('details'), setActiveNav);
    setupEdit(main, document.getElementById('edit'), setActiveNav);
    document.getElementById('views').remove();

    
    setupNavigation();
    
    // Start application in catalog view
    showCatalog();


     


    


});
