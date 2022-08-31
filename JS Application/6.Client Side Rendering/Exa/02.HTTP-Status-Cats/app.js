import * as ctx from './catSeeder.js';
import { catsHtml } from './catsTemplate.js';
import { render} from "../node_modules/lit-html/lit-html.js";

const sectionElement=document.getElementById('allCats');
render(catsHtml(ctx.cats),sectionElement);
