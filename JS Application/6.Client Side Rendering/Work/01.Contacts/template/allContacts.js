import  cardTemplate  from "./card.js";
import { html } from "../node_modules/lit-html/lit-html.js";


 export let allContacts=(ctx)=>
 html`${ctx.contacts.map(c=> html `${cardTemplate(c)}`)}`
