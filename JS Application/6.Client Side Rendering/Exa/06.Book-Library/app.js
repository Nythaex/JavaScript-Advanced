import {render} from '../node_modules/lit-html/lit-html.js'
import { deleteBook } from './api/api.js';
import { homeCreateTemplate, loadBooks } from './templates/homeCreate.js';

import { homeEditTemplate } from './templates/homeEdit.js';

const bodyElement=document.querySelector('body')


render(homeCreateTemplate(),bodyElement)

export function loadEditHome(book){
    console.log(book);
   render(homeEditTemplate(book),bodyElement)
   loadBooks();
}
export function loadCreateHome(){
    render(homeCreateTemplate(),bodyElement)
    loadBooks();
}
export async function loadDelete(id){
   await deleteBook(id);
    render(homeCreateTemplate(),bodyElement)
    loadBooks();
}