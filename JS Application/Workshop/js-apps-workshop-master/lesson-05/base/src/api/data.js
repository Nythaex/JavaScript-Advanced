import * as request from "./api.js";
import { showDetails } from "../pages/details.js";
import {e,importNewestRecipes} from './dom.js'
  
export async function loadNewestThree(){
   importNewestRecipes(await request.get('http://localhost:3030/data/recipes?select=_id%2Cname%2Cimg&sortBy=_createdOn%20desc&pageSize=3'));

};

export async function getRecipes() {
  return await request.get(
    "http://localhost:3030/data/recipes?select=" +
      encodeURIComponent("_id,name,img")
  );
}
export async function getSkipedRecipes(skipped) {
  return await request.get(
    `http://localhost:3030/data/recipes?select=_id%2Cname%2Cimg&offset=${skipped}&pageSize=5`
  );
}

export async function getRecipeById(id) {
  return request.get("http://localhost:3030/data/recipes/" + id);
}

export async function deleteRecipeById(id) {
  const section=document.querySelector('section');
    request.delete('http://localhost:3030/data/recipes/' + id)
    console.log(section.innerHTML);
    section.innerHTML = '';
   
    section.appendChild(e('article', {}, e('h2', {}, 'Recipe deleted')));
}

export async function onSubmit(data,requestType,recipeId) {
 
  let url='http://localhost:3030/data/recipes/';
  if (recipeId){
    url+=recipeId;
  }

  const body = ({
    name: data.name,
    img: data.img,
    ingredients: data.ingredients
      .split("\n")
      .map((l) => l.trim())
      .filter((l) => l != ""),
    steps: data.steps
      .split("\n")
      .map((l) => l.trim())
      .filter((l) => l != ""),
  });

  const token = sessionStorage.getItem("authToken");
  if (token == null) {
    return alert("You're not logged in!");
  }
  const json = await request[requestType](url, body);
  showDetails(json._id);
}
