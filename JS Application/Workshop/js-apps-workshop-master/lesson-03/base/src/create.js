const formElement = document.querySelector("form");


formElement.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  
  try {
    const response = await fetch("http://localhost:3030/data/recipes", {
      method: "post",
      headers: { "Content-type": "application/json" ,'X-Authorization':JSON.parse(localStorage.getItem('user')).accessToken},
      body: JSON.stringify({
        name: formData.get("name"),
        img: formData.get("img"),
        ingredients: formData.get("ingredients").split('\n'),
        steps: formData.get("steps").split('\n')
      }),
    });

    if(response.status==200){
        location.href = "./index.html";
    }
    console.log(response.json());
  } catch (error) {
    alert(error);
  }
});