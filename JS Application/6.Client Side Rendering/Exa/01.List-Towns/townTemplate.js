import { html } from "../node_modules/lit-html/lit-html.js";

export const townsHtml=(towns)=>
    html`<div id='root'>
        <ul>
            ${towns.map(x=>html`<li>${x}</li>`)}
        </u>
    </div>
    `
