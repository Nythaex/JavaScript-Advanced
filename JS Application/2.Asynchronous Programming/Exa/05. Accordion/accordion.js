function createElement(type, className, content, parent) {
    const result = document.createElement(type);

    if (className) {
        result.classList.add(className);
    }

    if (content) {
        result.textContent = content;
    }
    if(type==='button'){
        makeAButton(result);
    }

    parent.appendChild(result);

    return result;
}



 function solution() {
      getArticles();




}


async function makeAButton(button){
    try{
        let response=await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${button.id}`)
        let details=await response.json();
        let mainDiv=button.parentNode.parentNode;
        let extraDivElement=createElement('div','extra',undefined,mainDiv)
        let descriptionElement=createElement('p',undefined,details[button.id].content,extraDivElement)
      button.addEventListener('click',(e)=>{
             if(e.currentTarget.textContent==='More'){
                 console.log(descriptionElement);
                 extraDivElement.classList.remove('extra')
                e.currentTarget.textContent='Less'
             } else{
                extraDivElement.classList.add('extra')
                e.currentTarget.textContent='More'
             }
      })
    }catch(error){
         alert(error);
    } 

   


}

async function getArticles(){
    
    try{
        let response=await fetch('http://localhost:3030/jsonstore/advanced/articles/list')
        let result=await response.json();    
        
        result.forEach(x => {

            const parentDiv = createElement('div', 'accordion', null, main);
            const div = createElement('div', 'head', null, parentDiv);
            const span = createElement('span', null, `${x.title}`, div);
            const btn = createElement('button', 'button', 'More', div);

            btn.setAttribute('id', `${x._id}`);

        });
    }catch{
        console.log('Error');
    }
}
solution();