function loadRepos() {
     let usernameInputElement=document.getElementById('username');
     let reposElement=document.getElementById('repos');
	
	 reposElement.innerHTML='';
	 
	 fetch('https://api.github.com/users/'+usernameInputElement.value+'/repos')
	 .then(response=>response.json())
	 .then(result=>{
            result.forEach(element => {
				let liElement=document.createElement('li');
				let aElement=document.createElement('a');
				aElement.href=element.html_url;
				aElement.textContent=element.full_name;
				liElement.appendChild(aElement);
              reposElement.appendChild(liElement);
			});
	 })
      .catch(error=>console.log(error));

	
}