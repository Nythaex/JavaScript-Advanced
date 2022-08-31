function solve() {


    let firstNameElement = document.getElementById('fname');
    let lastNameElement = document.getElementById('lname');
    let emailElement = document.getElementById('email');
    let birthElement = document.getElementById('birth');
    let positionElement = document.getElementById('position');
    let salaryElement = document.getElementById('salary');
    let hireButtonElement = document.getElementById('add-worker');

    let sumElement = document.getElementById('sum');

    hireButtonElement.type = 'button'



    hireButtonElement.addEventListener('click', () => {

        let firstName = firstNameElement.value;
        let lastName = lastNameElement.value;
        let email = emailElement.value;
        let birth = birthElement.value;
        let position = positionElement.value;
        let salary = salaryElement.value;

        if (firstName != '' && lastName != '' && email != '' && birth != '' && position != '' && salary != '') {
            let tBodyElement = document.getElementById('tbody');
            let trElement = document.createElement('tr');

            let firstNameTdElement = document.createElement('td');
            let lastNameTdElement = document.createElement('td');
            let emailTdElement = document.createElement('td');
            let birthTdElement = document.createElement('td');
            let positionTdElement = document.createElement('td');
            let salaryTdElement = document.createElement('td');
            let buttonsTdElement = document.createElement('td');

            let fireButtonElement = document.createElement('button');
            let editButtonElement = document.createElement('button');

            fireButtonElement.classList.add('fired');
            editButtonElement.classList.add('edit');

            fireButtonElement.textContent = 'Fired'
            fireButtonElement.addEventListener('click', (e) => {
                let eventSalaryElement = e.currentTarget.parentNode.parentNode.children[5];
                sumElement.textContent = (Number(sumElement.textContent) - Number(eventSalaryElement.textContent)).toFixed(2);
                e.currentTarget.parentNode.parentNode.remove()


            })
            editButtonElement.textContent = 'Edit'
            editButtonElement.addEventListener('click',(e)=>{
                let childrenElements = e.currentTarget.parentNode.parentNode.children;
                sumElement.textContent = (Number(sumElement.textContent) - Number(childrenElements[5].textContent)).toFixed(2);

                firstNameElement.value = childrenElements[0].textContent;;
                lastNameElement.value = childrenElements[1].textContent;
                emailElement.value = childrenElements[2].textContent;
                birthElement.value = childrenElements[3].textContent;
                positionElement.value = childrenElements[4].textContent;
                salaryElement.value = childrenElements[5].textContent;
                
                e.currentTarget.parentNode.parentNode.remove()
            })


            firstNameTdElement.textContent = firstName;
            lastNameTdElement.textContent = lastName;
            emailTdElement.textContent = email;
            birthTdElement.textContent = birth;
            positionTdElement.textContent = position;
            salaryTdElement.textContent = salary;

            buttonsTdElement.appendChild(fireButtonElement);
            buttonsTdElement.appendChild(editButtonElement);

            trElement.appendChild(firstNameTdElement);
            trElement.appendChild(lastNameTdElement);
            trElement.appendChild(emailTdElement);
            trElement.appendChild(birthTdElement);
            trElement.appendChild(positionTdElement);
            trElement.appendChild(salaryTdElement);
            trElement.appendChild(buttonsTdElement);

            tBodyElement.appendChild(trElement);





            sumElement.textContent = (Number(salary) + Number(sumElement.textContent)).toFixed(2);



            firstNameElement.value = '';
            lastNameElement.value = ''
            emailElement.value = ''
            birthElement.value = ''
            positionElement.value = ''
            salaryElement.value = ''



        }
    })


}
solve()