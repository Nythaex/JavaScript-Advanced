import { html,render } from "../../node_modules/lit-html/lit-html.js";
import { booksTemplate } from "./bookTemplate.js";
import { createTemplate } from "./create.js";
import { getBooks } from "../api/api.js";

export const homeCreateTemplate = () => html` <button id="loadBooks" @click=${loadBooks}>
    LOAD ALL BOOKS
  </button>
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      
    </tbody>
  </table>
   ${createTemplate()}`;



export async function loadBooks(){
  let tBodyElement=document.querySelector('tbody');
  const books=Object.values(await getBooks());
 render(booksTemplate(books),tBodyElement)


}
