import { html } from "../node_modules/lit-html/lit-html.js";

const cardTemplate = (user) =>{

 return html`<div class="contact card">
    <div>
      <i class="far fa-user-circle gravatar"></i>
    </div>
    <div class="info">
      <h2>${user.name}</h2>
      <button class="detailsBtn" @click=${showDetails}>Details </button>
      <div class="details" id="1">
        <p>Phone number: ${user.phoneNumber}</p>
        <p>Email: ${user.email}</p>
      </div>
    </div>
  </div>`;
}
export default cardTemplate;

function showDetails(e){
    const userElements=e.currentTarget.parentNode;
    let details=userElements.children[2];
    if(details.style.display==='block'){
      details.style.display='none';
    }else{
      details.style.display='block';
    }
     
}
