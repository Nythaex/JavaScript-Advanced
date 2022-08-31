function encodeAndDecodeMessages() {
    let buttonsElements = document.querySelectorAll('button');

    let encodeButtonElement = buttonsElements[0];
    let decodeButtonElement = buttonsElements[1];
    let encodeInputElement = encodeButtonElement.parentNode.querySelector('textarea');
    let decodeInputElement = decodeButtonElement.parentNode.querySelector('textarea');


    encodeButtonElement.addEventListener('click', function () {
        decodeInputElement.value = '';
        let charNumber ;
        for (let index = 0; index < encodeInputElement.value.length; index++) {
            charNumber=Number(encodeInputElement.value.charCodeAt(index)) + 1
            decodeInputElement.value += String.fromCharCode(charNumber)

        }
        encodeInputElement.value=''
    })
    decodeButtonElement.addEventListener('click', function () {
        let parseText=decodeInputElement.value;
        decodeInputElement.value = '';
        let charNumber ;
        for (let index = 0; index < parseText.length; index++) {
            charNumber=Number(parseText.charCodeAt(index)) - 1
            decodeInputElement.value += String.fromCharCode(charNumber)

        }
       
    })

}