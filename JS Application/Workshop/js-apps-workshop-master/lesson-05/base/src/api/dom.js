import { showDetails } from "../pages/details.js";
import { showEdit } from "../pages/edit.js";
import { deleteRecipeById } from "./data.js";

export function e(type, attributes, ...content) {
  const result = document.createElement(type);

  for (let [attr, value] of Object.entries(attributes || {})) {
    if (attr.substring(0, 2) == "on") {
      result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
    } else {
      result[attr] = value;
    }
  }

  content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

  content.forEach((e) => {
    if (typeof e == "string" || typeof e == "number") {
      const node = document.createTextNode(e);
      result.appendChild(node);
    } else {
      result.appendChild(e);
    }
  });

  return result;
}

export function createRecipePreview(recipe) {
  const result = e(
    "article",
    { className: "preview", onClick: () => showDetails(recipe._id) },
    e("div", { className: "title" }, e("h2", {}, recipe.name)),
    e("div", { className: "small" }, e("img", { src: recipe.img }))
  );

  return result;
}

export function createRecipeCard(recipe) {
  const result = e(
    "article",
    {},
    e("h2", {}, recipe.name),
    e(
      "div",
      { className: "band" },
      e("div", { className: "thumb" }, e("img", { src: recipe.img })),
      e(
        "div",
        { className: "ingredients" },
        e("h3", {}, "Ingredients:"),
        e(
          "ul",
          {},
          recipe.ingredients.map((i) => e("li", {}, i))
        )
      )
    ),
    e(
      "div",
      { className: "description" },
      e("h3", {}, "Preparation:"),
      recipe.steps.map((s) => e("p", {}, s))
    )
  );

  const userId = sessionStorage.getItem("userId");
  if (userId != null && recipe._ownerId == userId) {
    result.appendChild(
      e(
        "div",
        { className: "controls" },
        e("button", { onClick: () => showEdit(recipe._id) }, "\u270E Edit"),
        e("button", { onClick: onDelete }, "\u2716 Delete")
      )
    );
  }

  return result;

  function onDelete() {
    const confirmed = confirm(
      `Are you sure you want to delete ${recipe.name}?`
    );
    if (confirmed) {
      deleteRecipeById(recipe._id);
    }
  }
}
export function importNewestRecipes(recipes) {
  console.log(recipes);
  let parrent = document.querySelector(".recent-recipes");
  parrent.innerHTML = `<article class="recent">
  <div class="recent-preview"><img src="${recipes[0].img}"></div>
  <div class="recent-title">${recipes[0].name}</div>
</article>
<div class="recent-space"></div>
<article class="recent">
  <div class="recent-preview"><img src="${recipes[1].img}"></div>
  <div class="recent-title">${recipes[1].name}</div>
</article>
<div class="recent-space"></div>
<article class="recent">
  <div class="recent-preview"><img src="${recipes[2].img}"></div>
  <div class="recent-title">${recipes[2].name}</div>
</article>`;
}
