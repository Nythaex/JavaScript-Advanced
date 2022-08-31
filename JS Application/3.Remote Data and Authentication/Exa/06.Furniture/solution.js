const tbodyElement = document.querySelector("tbody");

async function solve() {

  const loggedUser = localStorage.getItem("user");

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
          <p>${furniture.decorationFactor}</p>
      </td>
      <td>
          <input type="checkbox"/>
      </td>
  `;

    tbodyElement.appendChild(trElement);
  }
}

solve();
