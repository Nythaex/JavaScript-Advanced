function attachEventsListeners() {

    let buttonsElements = document.querySelectorAll('div input:nth-child(3)')



    for (const buttonElement of buttonsElements) {
        buttonElement.addEventListener('click', function (e) {

            let inputElement = buttonElement.parentNode.children[1]
            let inputElements = document.querySelectorAll('div input:nth-child(2)')
            console.log(inputElement.value);
            let parserToSec = {
                'days': function () {
                    return inputElement.value * 86400
                },
                'hours': function () {
                    return inputElement.value * 3600
                },
                'minutes': function () {
                    return inputElement.value * 60
                },
                'seconds': function () {
                    return inputElement.value
                }
            }



            let seconds = parserToSec[inputElement.id]()
            let parserToNeeded = {
                'days': function () {
                    return seconds / 86400
                },
                'hours': function () {
                    return seconds / 3600
                },
                'minutes': function () {
                    return seconds / 60
                },
                'seconds': function () {
                    return seconds
                }
            }

            for (const input of inputElements) {
                input.value = (parserToNeeded[input.id]() * 100) / 100
            }



        })





    }




}