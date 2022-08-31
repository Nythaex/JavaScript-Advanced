import { html } from "../../node_modules/lit-html/lit-html.js";
import { putBook } from "../api/api.js";
import { loadCreateHome } from "../app.js";
import { loadBooks } from "./homeCreate.js";

export const editTemplate = (book) => html`<form id="edit-form" @submit=${editBook.bind({},book._id)}>
<input type="hidden" name="id">
<h3>Edit book</h3>
<label>TITLE</label>
<input type="text" name="title" value="${book.title}" placeholder="Title...">
<label>AUTHOR</label>
<input type="text" name="author" value="${book.author}"  placeholder="Author...">
<input type="submit" value="Save">
</form>`;

async function editBook(id,e) {
  e.preventDefault();

  console.log(id);
 
  const formData=new FormData(e.currentTarget)

  console.log(formData.get('title'));
   await putBook(formData.get('title'),formData.get('author'),id)
     loadCreateHome();
    
}

