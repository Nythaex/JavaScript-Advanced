function loadRepos() {
   let resultElement=document.getElementById('res');
   let print=document.createElement('div');
   
   fetch('https://api.github.com/users/testnakov/repos')
   .then((response)=>response.json())
   .then((result)=>{
     
      print.textContent=JSON.stringify(result)
     resultElement.appendChild(print)
   })
   .catch((error)=>console.log(error));
}