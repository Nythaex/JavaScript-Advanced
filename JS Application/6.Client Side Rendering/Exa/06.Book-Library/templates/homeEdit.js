import { html,render } from "../../node_modules/lit-html/lit-html.js";
import { booksTemplate } from "./bookTemplate.js";
import { createTemplate } from "./create.js";
import { getBooks } from "../api/api.js";
import { editTemplate } from "./edit.js";
import { loadBooks } from "./homeCreate.js";

export const homeEditTemplate = (book) => html` <button id="loadBooks" @click=${loadBooks}>
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
   ${editTemplate(book)}`;




