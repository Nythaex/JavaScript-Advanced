function editElement(element, place, replacer) {

    while (element.textContent.includes(place)) {
        element.textContent=element.textContent.replace(place, replacer);
    }
}