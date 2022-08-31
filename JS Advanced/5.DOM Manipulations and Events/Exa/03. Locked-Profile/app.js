function lockedProfile() {
    let buttonElements = document.querySelectorAll('button');
    let inputRatioElements = document.querySelectorAll("input[type='radio']")

   
    for (const ratioElement of inputRatioElements) {

        ratioElement.addEventListener('click', function (e) {
            e.currentTarget.parentNode.children[2].removeAttribute('checked')
            e.currentTarget.parentNode.children[4].removeAttribute('checked')
            e.currentTarget.setAttribute('checked', true)
        })


    }

    for (const buttonElement of buttonElements) {

        buttonElement.addEventListener('click', function (e) {
            let unlockElement = e.currentTarget.parentNode.children[4];
            if (unlockElement.hasAttribute('checked')) {
                if (buttonElement.textContent === 'Show more') {
                    buttonElement.textContent = 'Hide it';
                    e.currentTarget.parentNode.children[9].style.display = 'block';
                } else {
                    buttonElement.textContent = 'Show more';
                    e.currentTarget.parentNode.children[9].style.display = 'none';
                }

            }
        })
    }
}