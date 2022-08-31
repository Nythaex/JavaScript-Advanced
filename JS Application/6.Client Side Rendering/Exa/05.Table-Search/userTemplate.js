import {html} from '../node_modules/lit-html/lit-html.js'

export const usersTemplate=(users)=>html`${users.map(user=>html`<tr>
    <td>${user.firstName} ${user.lastName}</td>
    <td>${user.email}</td>
    <td>${user.course}</td>
</tr>`)}`


