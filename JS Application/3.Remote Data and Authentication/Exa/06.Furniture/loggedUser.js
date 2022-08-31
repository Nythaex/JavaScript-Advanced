const logoutButtonElement = document.getElementById("logoutBtn");
const tbodyElement = document.querySelector("tbody");
const loggedUser = JSON.parse(localStorage.getItem("user"));
console.log(loggedUser._id);

logoutButtonElement.addEventListener("click", () => {
  localStorage.clear();
  location.href = "home.html";
});

const formsElement = document.querySelector("form");

formsElement.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);

  try {
    const response = await fetch("http://localhost:3030/data/furniture", {
      method: "post",
      headers: {
        "Content-type": "application/json",
        "X-Authorization": loggedUser.accessToken,
      },
      body: JSON.stringify({
        name: formData.get("name"),
        price: formData.get("price"),
        factor: formData.get("factor"),
        img: formData.get("img"),
      }),
    });

    if (response.status == 200) {
      location.href = "homeLogged.html";
    }
  } catch (error) {
    alert(error);
  }
});

async function solve() {
  let furnitures = await getFurnitures();
  loadFurnitures(furnitures);
}

async function getFurnitures() {
  try {
    const response = await fetch("http://localhost:3030/data/furniture");
    const furnitures = await response.json();

    return furnitures;
  } catch (error) {
    alert(error);
  }
}

function loadFurnitures(furnitures) {
  for (const furniture of furnitures) {
    let trElement = document.createElement("tr");

    trElement.innerHTML = `
        <td>
            <img
                src=${furniture.img}>
        </td>
        <td>
            <p>${furniture.name}</p>
        </td>
        <td>
            <p>${furniture.price}</p>
        </td>
        <td>
            <p>${furniture.factor}</p>
        </td>
        <td>
            <input type="checkbox"/>
        </td>
    `;

    tbodyElement.appendChild(trElement);
  }
}

const buyButtonElement = document.querySelector(".col-md-12>button");

buyButtonElement.addEventListener("click", () => {
  let furnituresList = [];
  const checkBoxes = document.querySelectorAll(
    'tbody>tr>td>input[type="checkbox"]'
  );
  checkBoxes.forEach((checkBox) => {
    if (checkBox.checked) {
      const furniture = checkBox.parentNode.parentNode;

      furnituresList.push({
        img: furniture.children[0].children[0].src,
        name: furniture.children[1].children[0].textContent,
        price: furniture.children[2].children[0].textContent,
        factor: furniture.children[3].children[0].textContent,
      });
    }
  });

  try {
    fetch("http://localhost:3030/data/orders", {
      method: "post",
      headers: {
        "Content-type": "application/json",
        "X-Authorization": loggedUser.accessToken,
      },
      body: JSON.stringify(furnituresList),
    });
  } catch (error) {
    alert(error);
  }
});

const oredersChildren = document.querySelector(".orders").children;

const allOrdersButtonElement = oredersChildren[2];
const boughtFurnituresElement = oredersChildren[0].children[0];
const totalPriceElement = oredersChildren[1].children[0];

allOrdersButtonElement.addEventListener("click", async () => {
  let furnituresNames = [];
  let price = 0;

  try {
    const response = await fetch(
      "http://localhost:3030/data/orders?_ownerId=" + loggedUser._id
    );
    if (response.status == 200) {
      const furnitures = await response.json();

     
      for (const property in furnitures[0]) {
        if (typeof furnitures[property] === "object") {
            console.log(furnitures[0][property]);
          furnituresNames.push(furnitures[0][property].name);
          price += Number(furnitures[0][property].price);
        }
      }
    }
  } catch (error) {
    alert(error);
  }

  console.log(price);
  boughtFurnituresElement.textContent = furnituresNames.join(", ");
  totalPriceElement.textContent = price + " $";
});

solve();
