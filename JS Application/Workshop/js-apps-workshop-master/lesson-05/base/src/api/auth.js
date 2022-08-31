import * as request from "./api.js";
import {  showCatalog } from '../pages/catalog.js';
import {setUserNav} from './router.js'

export async function loginAndRegister(url, data) {
  const body = JSON.stringify({
    email: data.email,
    password: data.password,
  });

  const user =await request.post(url, data);
      console.log(user);
  sessionStorage.setItem("authToken", user.accessToken);
  sessionStorage.setItem("userId", user._id);
  document.getElementById("user").style.display = "inline-block";
  document.getElementById("guest").style.display = "none";
  showCatalog();
}
export async function logout() {

  const user =await request.get('http://localhost:3030/users/logout');  
       sessionStorage.clear()
      setUserNav();
      showCatalog();

}