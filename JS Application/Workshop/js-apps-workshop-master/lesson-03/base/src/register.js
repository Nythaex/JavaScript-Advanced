const formElement = document.querySelector("form");

console.log(formElement);
formElement.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  let user;
  try {
    const response = await fetch("http://localhost:3030/users/register", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
        repeat: formData.get("rePass"),
      }),
    });

    if(response.status==200){
        user = await response.json();
        localStorage.setItem("user", JSON.stringify(user));
        location.href = "./index.html";
    }
  } catch (error) {
    alert(error);
  }
});
