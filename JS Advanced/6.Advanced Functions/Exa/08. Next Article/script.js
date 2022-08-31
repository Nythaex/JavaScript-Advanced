
function getArticleGenerator(articles) {
    let array = articles;

    return () => {
        if (array.length != 0) {
            let element = document.createElement('article')
            element.textContent = array.shift();
            let resultElement = document.getElementById('content');
            resultElement.appendChild(element)
        }


    }

}
