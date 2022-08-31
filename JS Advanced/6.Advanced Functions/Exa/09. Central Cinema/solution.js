function solve() {
    const form = document.getElementById('container');
    console.log(form.children);

    let addMovieElement = document.getElementById('container');
    addMovieElement.children[3].type = 'button'

    addMovieElement.children[3].addEventListener('click', function (e) {
        let nameElement = e.currentTarget.parentNode.children[0];
        let hallElement = e.currentTarget.parentNode.children[1];
        let priceElement = e.currentTarget.parentNode.children[2];


      


        if (nameElement.value !== '' && hallElement.value !== '' && Number(priceElement.value)) {
            let liElement = document.createElement('li');


            let spanElement = document.createElement('span');
            let strongElement = document.createElement('strong');
            spanElement.textContent = nameElement.value;
            strongElement.textContent = `Hall: ` + hallElement.value;
            liElement.appendChild(spanElement);
            liElement.appendChild(strongElement);

            let divElement = document.createElement('div');

            strongElement = document.createElement('strong');
            let inputElement = document.createElement('input');
            let buttonElement = document.createElement('button');
            strongElement.textContent = Number(priceElement.value).toFixed(2);
            inputElement.placeholder = 'Tickets Sold';
            buttonElement.textContent = 'Archive';
            console.log(document.querySelector("#container > button"));
            buttonElement.addEventListener('click', (e) => {

                

                let [priceElement, inputElement] = e.currentTarget.parentNode.children;

                if (inputElement.value !== ''&&Number(inputElement.value)) {
                    

                    let ulElement = document.querySelector('#archive ul');
                    let movieElement = e.currentTarget.parentNode.parentNode.children;

                    let liElement = document.createElement('li');
                    let spanElement = document.createElement('span');
                    let strongElement = document.createElement('strong');
                    let buttonElement = document.createElement('button');
                    console.log(movieElement[0]);
                    spanElement.textContent = movieElement[0].textContent;

                    strongElement.textContent = `Total amount: ${Number(priceElement.textContent * inputElement.value).toFixed(2)}`;
                    buttonElement.textContent = 'Delete'

                    
                    buttonElement.addEventListener('click', function (e) {
                       
                        e.currentTarget.parentNode.remove()
                        
                      
                    })

                    liElement.appendChild(spanElement);
                    liElement.appendChild(strongElement);
                    liElement.appendChild(buttonElement);


                    ulElement.appendChild(liElement)
                    e.currentTarget.parentNode.parentNode.remove()
                    
                }


            })

            divElement.appendChild(strongElement);
            divElement.appendChild(inputElement);
            divElement.appendChild(buttonElement);
            liElement.appendChild(divElement)

            document.querySelector('#movies ul').appendChild(liElement);
           
            

        }

        nameElement.value = ''
        hallElement.value = ''
        priceElement.value = ''
        

    })




}