function colorize() {
    let rows = document.querySelectorAll('table tr')

    for (let index = 0; index < rows.length; index++) {
        if ((index + 1) % 2 === 0) {
            rows[index].style.background = 'teal'
        }

    }

}