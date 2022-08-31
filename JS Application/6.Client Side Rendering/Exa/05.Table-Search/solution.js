import {render} from '../node_modules/lit-html/lit-html.js'
import {usersTemplate} from './userTemplate.js' 
const inputElement=document.getElementById('searchField');
const tbodyElement=document.querySelector('tbody');
async function solve() {

   
      const users=Object.values(await getUsers());
      render(usersTemplate(users),tbodyElement)




   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const trElements=tbodyElement.querySelectorAll('tr');
      for (const tr of trElements) {
        if (tr.textContent.toLowerCase().includes(inputElement.value.toLowerCase())) {
           tr.classList.add('select')
        }
        else{
         tr.classList.remove('select')
        }
      }

   }
}

solve();

async function getUsers(){
   try{
      const response=await fetch('http://localhost:3030/jsonstore/advanced/table');
      return await response.json();
   }catch(error){
      alert(error)
   }
}