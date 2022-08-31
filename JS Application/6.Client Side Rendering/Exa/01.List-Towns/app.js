import {render } from "../node_modules/lit-html/lit-html.js";
import { townsHtml } from "./townTemplate.js";

const button=document.getElementById('btnLoadTowns');
const townsInput=document.getElementById('towns');
const rootElement=document.getElementById('root');

button.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log(townsInput.value);
    console.log(townsHtml(townsInput.value.split(', ')));

    
   render(townsHtml(townsInput.value.split(', ')),rootElement)
})