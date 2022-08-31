import { render } from "../node_modules/lit-html/lit-html.js";
import { template } from "./optionTemplate.js";

const input = document.getElementById("itemText");
const formElement = document.querySelector("form");

formElement.addEventListener("submit", addItem);

async function addItem(e) {
  e.preventDefault();

   await fetch("http://localhost:3030/jsonstore/advanced/dropdown", {
    method: "post",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      name: input.value,
    }),
  })
   render(
    template(Object.values(await getTowns())),
    document.getElementById("menu")
  );
}

async function  getTowns() {
  return fetch("http://localhost:3030/jsonstore/advanced/dropdown").then(
    (response) => response.json()
  );
}

render(
  template(Object.values(await getTowns())),
  document.getElementById("menu")
);
