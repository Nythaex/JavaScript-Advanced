import { render } from "../node_modules/lit-html/lit-html.js";
import { townsHtml } from "./townsTemplate.js";
import { towns } from "./towns.js";
const townsElement = document.getElementById("towns");
render(townsHtml(towns), townsElement);

const buttonElement = document.querySelector("button");
const resultElement = document.querySelector("#result");
const inputElement = document.querySelector("#searchText");
buttonElement.addEventListener("click", search);
function search() {
  let count = 0;
  render(townsHtml(towns), document.querySelector("body"));
  for (const element of townsElement.children[0].children) {
    console.log(townsElement.children[0].children);
    if (element.textContent.startsWith(inputElement.value)) {
      count++;
      element.classList.add("active");
    }else{
      element.classList.remove("active");
    }
  }

  resultElement.textContent = `${count} matches found`;
}
