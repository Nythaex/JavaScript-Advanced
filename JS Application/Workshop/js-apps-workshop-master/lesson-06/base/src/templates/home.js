import { html } from "../../node_modules/lit-html/lit-html.js";

export let homeTemplate = () =>
  html`<section id="home">
    <div class="hero">
      <h2>Welcome to My Cookbook</h2>
    </div>
    <header class="section-title">Recently added recipes</header>
    <div class="recent-recipes"></div>
    <footer class="section-title">
      <p>Browse all recipes in the <a href="/catalog">Catalog</a></p>
    </footer>
  </section>`;
