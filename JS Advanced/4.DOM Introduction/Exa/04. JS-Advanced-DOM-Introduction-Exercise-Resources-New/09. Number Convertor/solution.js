function solve() {
    document.querySelector('div button').addEventListener('click', onClick)
    
    let select=document.getElementById('selectMenuTo');
    let binaryOption=document.createElement('option')
    binaryOption.value='binary';
    binaryOption.textContent='Binary'
    let hexaOption=document.createElement('option')
    hexaOption.value='hexadecimal';
    hexaOption.textContent='Hexadecimal'
    select.appendChild(hexaOption)
    select.appendChild(binaryOption)


    function onClick() {
        let to = document.getElementById('selectMenuTo').value;
        let number = document.getElementById('input').value;
        let result = document.getElementById('result');



        if (to === 'hexadecimal') {
            result.value = Number(number).toString(16).toUpperCase()
        } else if (to === 'binary') {

            result.value = Number(number).toString(2)
        }

    }

}