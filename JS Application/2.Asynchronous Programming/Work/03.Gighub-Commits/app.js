function loadCommits() {
    let usernameElement=document.getElementById('username');
    let repoElement=document.getElementById('repo');

    let commitsElement=document.getElementById('commits');

    commitsElement.innerHTML=''

    fetch(`https://api.github.com/repos/${usernameElement.value}/${repoElement.value}/commits`)
    .then(response=>response.json())
    .then(result=>{
    console.log(result);
        result.forEach(element => {
            let liElement=document.createElement('li');
            liElement.textContent=`${element.commit.author.name}: ${element.commit.message}`;
            commitsElement.appendChild(liElement); 
        });

    })
    .catch(error=>{
          let liElement=document.createElement('li');
          liElement.textContent=`Error: ${error} (Not Found)`;
          commitsElement.appendChild(liElement);
    })



}