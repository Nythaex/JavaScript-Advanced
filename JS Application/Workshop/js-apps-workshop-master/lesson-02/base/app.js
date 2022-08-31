import { createElement } from "./dom.js";

const mainElement = document.querySelector("main");

window.addEventListener("load", async () => {
  const recipes = await getRecepties();

  importPreviews(recipes);
});

async function importPreviews(recipes) {
  const cards = await createPreviews(recipes);

  Object.values(cards).forEach((card) => {
    mainElement.appendChild(card);
  });
}

async function getRecepties() {
  const response = await fetch(
    "http://localhost:3030/jsonstore/cookbook/recipes"
  );

  mainElement.children[0].remove();
  const recipes = await response.json();
  return Object.values(recipes);
}

async function createPreviews(recipes) {
  let cards = [];

  Object.values(recipes).forEach(async (recipe) => {
    const articleElement = await createPreview(recipe);

    cards.push(articleElement);
    console.log(articleElement);
  });

  return cards;
}

async function createPreview(recipe) {
  let articleElement = createElement(
    "article",
    undefined,
    undefined,
    undefined
  );

  articleElement.classList.add("preview");
  articleElement.addEventListener("click", showDetails);

  let divTitleElement = createElement(
    "div",
    undefined,
    undefined,
    articleElement
  );
  divTitleElement.classList.add("title");

  createElement("h2", undefined, recipe.name, divTitleElement);

  let divSmallElement = createElement(
    "div",
    undefined,
    undefined,
    articleElement
  );
  divSmallElement.classList.add("small");

  let imgElement = createElement("img", undefined, undefined, divSmallElement);
  imgElement.setAttribute("src", recipe.img);

  return articleElement;

  async function showDetails() {
    const specificRecipe = await fetch(
      "http://localhost:3030/jsonstore/cookbook/details/" + recipe._id
    );
    const result = await specificRecipe.json();

    console.log(result);

   const fullDetails = createElement("article", undefined, undefined, undefined);

    createElement("h2", undefined, undefined, fullDetails);

    const bandElement = createElement("div", undefined, undefined, fullDetails);
    bandElement.classList.add("band");

    const thumbElement = createElement(
      "div",
      undefined,
      undefined,
      bandElement
    );
    thumbElement.classList.add("thumb");

    const imgElement = createElement("img", undefined, undefined, thumbElement);
    imgElement.setAttribute("src", result.img);

    const ingredientsElement = createElement(
      "div",
      undefined,
      undefined,
      bandElement
    );
    ingredientsElement.classList.add("ingredients");

    createElement("h3", undefined, "Ingredients:", ingredientsElement);
    const ulElement = createElement(
      "ul",
      undefined,
      undefined,
      ingredientsElement
    );

    result.ingredients.forEach((i) => {
      createElement("li", undefined, i, ulElement);
    });

    const descriptionDivElement = createElement(
      "div",
      undefined,
      undefined,
      fullDetails
    );
    descriptionDivElement.classList.add("description");
    createElement("h3", undefined, "Preparation", descriptionDivElement);

    result.steps.forEach((i) => {
      createElement("p", undefined, i, descriptionDivElement);
    });
    console.log(fullDetails);

    articleElement.replaceWith(fullDetails);
  }
}
