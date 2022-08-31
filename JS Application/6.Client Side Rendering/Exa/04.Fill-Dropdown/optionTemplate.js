import { html } from "../node_modules/lit-html/lit-html.js";

export const template = (towns) =>
  html`${towns.map((t) => html`<option value=${t._id}>${t.name}</option>`)}`;
