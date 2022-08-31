const homeView = document.getElementById("home-view");
const mainElement = document.querySelector("main");
const catchesElement = document.querySelector("#catches");
const loadButtonElement = document.querySelector(".load");
const addButtonElement = document.querySelector(".add");

import { authenticate } from "../authentication.js";

function loadResourses() {
  const loggedUser = JSON.parse(localStorage.getItem("user"));
  fetch("http://localhost:3030/data/catches")
    .then((response) => response.json())
    .then((result) => {
      catchesElement.innerHTML = "";

      Object.values(result).forEach((catche) => {
        let childElement = document.createElement("div");

        if (loggedUser) {
          if (loggedUser._id == catche._ownerId) { 
            childElement.innerHTML = `<label>Angler</label>
         <input type="text" class="angler" value="${catche.angler}">
         <label>Weight</label>
         <input type="text" class="weight" value="${catche.weight}">
         <label>Species</label>
         <input type="text" class="species" value="${catche.species}">
         <label>Location</label>
         <input type="text" class="location" value="${catche.location}">
         <label>Bait</label>
         <input type="text" class="bait" value="${catche.bait}">
         <label>Capture Time</label>
         <input type="number" class="captureTime" value="${catche.captureTime}">`;

            let updateButtonElement = document.createElement("button");
            updateButtonElement.classList.add("update");
            updateButtonElement.setAttribute("data-id", catche._id);
            updateButtonElement.textContent = "Update";
            updateButtonElement.addEventListener("click", (e) => {
              const parrent = e.currentTarget.parentNode.children;
              console.log(parrent[1]);
              fetch(
                `http://localhost:3030/data/catches/${e.currentTarget.getAttribute(
                  `data-id`
                )}`,
                {
                  method: "put",
                  headers: {
                    "Content-type": "application/json",
                    "X-Authorization": loggedUser.accessToken,
                  },
                  body: JSON.stringify({
                    angler: parrent[1].value,
                    weight: parrent[3].value,
                    species: parrent[5].value,
                    location: parrent[7].value,
                    bait: parrent[9].value,
                    captureTime: parrent[11].value,
                  }),
                }
              )
                .then((response) => response.json())
                .then((result) => console.log(result));
            });

            childElement.appendChild(updateButtonElement);

            let deleteButtonElement = document.createElement("button");
            deleteButtonElement.classList.add("delete");
            deleteButtonElement.setAttribute("data-id", catche._id);
            deleteButtonElement.textContent = "Delete";
            deleteButtonElement.addEventListener("click", (e) => {
              console.log(catche);
              fetch(
                `http://localhost:3030/data/catches/${e.currentTarget.getAttribute(
                  `data-id`
                )}`,
                {
                  method: "delete",
                  headers: { "X-Authorization": loggedUser.accessToken },
                }
              ).then((response) => {
                loadResourses();
              });
            });
            childElement.appendChild(deleteButtonElement);
          } else {
            childElement.innerHTML = `
               <label>Angler</label>
               <input type="text" class="angler" value="${catche.angler}" disabled>
               <label>Weight</label>
               <input type="text" class="weight" value="${catche.weight}" disabled>
               <label>Species</label>
               <input type="text" class="species" value="${catche.species}" disabled>
               <label>Location</label>
               <input type="text" class="location" value="${catche.location}" disabled>
               <label>Bait</label>
               <input type="text" class="bait" value="${catche.bait}" disabled>
               <label>Capture Time</label>
               <input type="number" class="captureTime" value="${catche.captureTime}" disabled>
               <button class="update" data-id="${catche._id}" disabled>Update</button>
               <button class="delete" data-id="${catche._id}" disabled>Delete</button>
            `;
          }
        } else {
          childElement.innerHTML = `
         <label>Angler</label>
         <input type="text" class="angler" value="${catche.angler}" disabled>
         <label>Weight</label>
         <input type="text" class="weight" value="${catche.weight}" disabled>
         <label>Species</label>
         <input type="text" class="species" value="${catche.species}" disabled>
         <label>Location</label>
         <input type="text" class="location" value="${catche.location}" disabled>
         <label>Bait</label>
         <input type="text" class="bait" value="${catche.bait}" disabled>
         <label>Capture Time</label>
         <input type="number" class="captureTime" value="${catche.captureTime}" disabled>
         <button class="update" data-id="${catche._id}" disabled>Update</button>
         <button class="delete" data-id="${catche._id}" disabled>Delete</button>
         `;
        }
        childElement.classList.add("catch");
        catchesElement.appendChild(childElement);
      });
    });
}

export function home() {
  authenticate();

  homeView.style.display = "block";
  mainElement.appendChild(homeView);

  const loggedUser = JSON.parse(localStorage.getItem("user"));

  loadButtonElement.addEventListener("click", loadResourses);

  if (loggedUser) {
    addButtonElement.removeAttribute("disabled");
    const addForm = document.getElementById("addForm");
    addForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = new FormData(e.currentTarget);

      fetch("http://localhost:3030/data/catches", {
        method: "post",
        headers: {
          "Content-type": "application/json",
          "X-Authorization": loggedUser.accessToken,
        },
        body: JSON.stringify({
          angler: formData.get("angler"),
          weight: formData.get("weight"),
          species: formData.get("species"),
          location: formData.get("location"),
          bait: formData.get("bait"),
          captureTime: formData.get("captureTime"),
        }),
      });
    });
  } else {
    addButtonElement.setAttribute("disabled", true);
  }
}
