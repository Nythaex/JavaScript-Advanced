import { html} from "../../node_modules/lit-html/lit-html.js";
import {loadDelete, loadEditHome} from '../app.js'

export const bookTemplate = (book) => {
    console.log(book);
    return html`<tr>
<td>${book.title}</td>
<td>${book.author}</td>
<td>
    <button @click=${loadEditHome.bind({},book)}>Edit</button>
    <button @click=${loadDelete.bind({},book._id)}>Delete</button>
</td>
</tr>`;
}
export const booksTemplate=(books)=>html`${books.map(book=>html`${bookTemplate(book)}`)}`