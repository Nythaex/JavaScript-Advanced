import { render } from "../node_modules/lit-html/lit-html.js";
import {allContacts} from "./template/allContacts.js"
import {contacts} from "./contacts.js"
const ctx={
    contacts
}
console.log(ctx);

let contactsElement=document.getElementById('contacts');
 render(allContacts(ctx),contactsElement);
 console.log(allContacts(ctx));



