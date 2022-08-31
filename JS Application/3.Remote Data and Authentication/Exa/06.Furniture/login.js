const formsElement = document.querySelectorAll("form");

formsElement[0].addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);

  try{
    const response =await fetch("http://localhost:3030/users/register", {
        method: "post",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          email: formData.get("email"),
          password: formData.get("password"),
          repeat: formData.get("rePass"),
        }),
      });
    
      if(response.status==200){
        let result = await response.json();
        localStorage.setItem("user", JSON.stringify(result));
         location.href='homeLogged.html'
      }
  }catch(error){
       alert(error)
  }
  
});

formsElement[1].addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
  
    try{
      const response =await fetch("http://localhost:3030/users/login", {
          method: "post",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            email: formData.get("email"),
            password: formData.get("password"),
          }),
        });
      
        if(response.status==200){
          let result = await response.json();
          localStorage.setItem("user", JSON.stringify(result));
           location.href='homeLogged.html'
        }
    }catch(error){
         alert(error)
    }
    
  });