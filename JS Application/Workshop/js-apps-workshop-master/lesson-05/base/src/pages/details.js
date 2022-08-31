
import {getRecipeById} from '../api/data.js'
import {createRecipeCard} from '../api/dom.js'

// async function deleteRecipeById(id) {
//     const token = sessionStorage.getItem('authToken');

//     try {
//         const response = await fetch('http://localhost:3030/data/recipes/' + id, {
//             method: 'delete',
//             headers: {
//                 'X-Authorization': token
//             }
//         });

//         if (response.status != 200) {
//             const error = await response.json();
//             throw new Error(error.message);
//         }

//         section.innerHTML = '';
//         section.appendChild(e('article', {}, e('h2', {}, 'Recipe deleted')));
//     } catch (err) {
//         alert(err.message);
//     }
// }


let main;
let section;
let setActiveNav;

export function setupDetails(targetMain, targetSection, onActiveNav) {
    main = targetMain;
    section = targetSection;
    setActiveNav = onActiveNav;
}

export async function showDetails(id) {
    setActiveNav();
    section.innerHTML = 'Loading&hellip;';
    main.innerHTML = '';
    main.appendChild(section);

    const recipe = await getRecipeById(id);
    section.innerHTML = '';
    section.appendChild(createRecipeCard(recipe));
}