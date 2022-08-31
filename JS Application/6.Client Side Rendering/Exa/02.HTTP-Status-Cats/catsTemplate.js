import { html } from "../node_modules/lit-html/lit-html.js";

export const catsHtml = (cats) =>
  html`<section id="allCats">
    <ul>
      ${cats.map((c) => html`${catHtml(c)}`)}
    </ul>
  </section>`;

const catHtml = (cat) => html` <li>
  <img
    src="./images/${cat.imageLocation}.jpg"
    width="250"
    height="250"
    alt="Card image cap"
  />
  <div class="info">
    <button class="showBtn" @click=${displayDetails}>Show status code</button>
    <div class="status" style="display: none" id=${cat.id}>
      <h4>${cat.statusCode}</h4>
      <p>${cat.statusMessage}</p>
    </div>
  </div>
</li>`;

function displayDetails(e){
    e.currentTarget.parentNode.children[1].style.display='block';

}