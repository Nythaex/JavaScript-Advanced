import {getRecipes,getSkipedRecipes} from '../api/data.js'
import {createRecipePreview} from '../api/dom.js';

let main;
let section;
let setActiveNav;
let pageNumber=1;

export function setupCatalog(targetMain, targetSection, onActiveNav) {
    main = targetMain;
    section = targetSection;
    setActiveNav = onActiveNav;
}

export async function showCatalog() {
    setActiveNav('catalogLink');
    section.innerHTML = 'Loading&hellip;';
    main.innerHTML = '';
    
    main.appendChild(section);


    const amount = await getRecipes();
    const recipes = await getSkipedRecipes((pageNumber-1)*5);
    const cards = recipes.map(createRecipePreview);

    const fragment = document.createDocumentFragment();
    cards.forEach(c => fragment.appendChild(c));

    let moveLink=document.createElement('button');
    moveLink.textContent='Next>'
    moveLink.addEventListener('click',(e)=>{
          pageNumber+=1;
          showCatalog();
    })
    
    console.log(pageNumber);
    let articleElementBarTop=document.createElement('article');
    articleElementBarTop.textContent=`Page ${pageNumber} of ${Math.ceil(amount.length/5)} `
    articleElementBarTop.appendChild(moveLink);

    let articleElementBarBot=articleElementBarTop.cloneNode(true);


    section.innerHTML = '';
    section.appendChild(articleElementBarTop)
    section.appendChild(fragment);
    section.appendChild(articleElementBarBot)

}