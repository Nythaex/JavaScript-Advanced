function extractText() {
    let rows = document.querySelectorAll('#items li')
    let result = document.getElementById('result');


    for (const e of rows) {
        result.value += e.textContent + '\n'
    }
}