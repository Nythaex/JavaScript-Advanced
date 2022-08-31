import { html } from "../../node_modules/lit-html/lit-html.js";
export  const registerTemplate = () =>
  html` <section id="register">
  <article>
      <h2>Register</h2>
      <form>
          <label>E-mail: <input type="text" name="email"></label>
          <label>Password: <input type="password" name="password"></label>
          <label>Repeat: <input type="password" name="rePass"></label>
          <input type="submit" value="Register">
      </form>
  </article>
</section>`;
