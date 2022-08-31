function validate() {

    let submitButtonElement = document.getElementById('submit');
    submitButtonElement.addEventListener('click', submit);
    submitButtonElement.type = 'button'


    let checkboxElement = document.getElementById('company');
    checkboxElement.addEventListener('click', check);
    function submit(e) {
        let valid = true;

        let usernameRegex = new RegExp('[a-zA-Z0-9]+')
        let inputUsernameElement = document.getElementById('username');
        if (inputUsernameElement.value.length < 3 || inputUsernameElement.value.length > 20
            || !usernameRegex.test(inputUsernameElement.value)) {
            inputUsernameElement.style.borderColor = 'red'
            valid = false;
        } else {
            inputUsernameElement.style.borderColor = ''
        }

        let passwordRegex = new RegExp('[a-zA-Z0-9_]+')
        let inputPasswordElement = document.getElementById('password');
        if (inputPasswordElement.value.length < 5 || inputPasswordElement.value.length > 15
            || !passwordRegex.exec(inputPasswordElement.value)) {
            inputPasswordElement.style.borderColor = 'red';
            valid = false;
        } else {
            inputPasswordElement.style.borderColor = '';
        }

        let inputConfirmPasswordElement = document.getElementById('confirm-password');
        if (inputConfirmPasswordElement.value.length < 5 || inputConfirmPasswordElement.value.length > 15
            || !passwordRegex.exec(inputConfirmPasswordElement.value)) {
            inputConfirmPasswordElement.style.borderColor = 'red';
            valid = false;
        } else {
            inputConfirmPasswordElement.style.borderColor = '';
        }

        if (inputConfirmPasswordElement.value !== inputPasswordElement.value) {
            inputPasswordElement.style.borderColor = 'red';
            inputConfirmPasswordElement.style.borderColor = 'red';
            valid = false;
        }

        let inputEmailElement = document.getElementById('email');
        let monkeyIndex = inputEmailElement.value.indexOf('@');
        let dotIndex = inputEmailElement.value.lastIndexOf('.');
        if (monkeyIndex >= dotIndex) {
            inputEmailElement.style.borderColor = 'red';
            valid = false;

        } else {
            inputEmailElement.style.borderColor = '';
        }

        let checkboxElement = document.getElementById('company');
        if (checkboxElement.checked) {
            let companyNumberElement = document.getElementById('companyNumber');
            if (companyNumberElement.value < 1000 || companyNumberElement.value > 9999) {
                companyNumberElement.style.borderColor = 'red'
                valid = false;
            } else {
                companyNumberElement.style.borderColor = ''
            }
        }
        let validElement = document.getElementById('valid');
        if (valid) {
            validElement.style.display = 'block'
        } else {
            validElement.style.display = 'none'
        }

    }



    function check(e) {
        let companyInfoElement = document.getElementById('companyInfo');
        if (e.currentTarget.checked) {

            companyInfoElement.style.display = 'block'
        } else {
            companyInfoElement.style.display = 'none'
        }


    }

}


