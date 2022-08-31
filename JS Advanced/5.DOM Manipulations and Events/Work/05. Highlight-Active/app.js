function focused() {
    let boxesElements = Array.from(document.querySelectorAll(`div div input`))

    for (const box of boxesElements) {

        box.addEventListener('focus', function (e) {

            for (const b of boxesElements) {
                b.parentNode.setAttribute('class', '')
            }
            e.currentTarget.parentNode.setAttribute('class', 'focused')
        })

    }


}