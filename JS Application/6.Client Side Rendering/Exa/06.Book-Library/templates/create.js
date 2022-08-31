import { html } from "../../node_modules/lit-html/lit-html.js";
import { postBook } from "../api/api.js";
import { loadBooks } from "./homeCreate.js";

export const createTemplate = () => html`<form
  id="add-form"
  @submit=${createBook}
>
  <h3>Add book</h3>
  <label>TITLE</label>
  <input type="text" name="title" placeholder="Title..." />
  <label>AUTHOR</label>
  <input type="text" name="author" placeholder="Author..." />
  <input type="submit" value="Submit" />
</form>`;

async function createBook(e) {
  e.preventDefault();

 
  const formData=new FormData(e.currentTarget)

  console.log(formData.get('title'));
   await postBook(formData.get('title'),formData.get('author'))
     loadBooks()
     
    
}
