function solve() {
  let buttonsElement = document.querySelectorAll('button');


  buttonsElement[0].addEventListener('click', function () {
    let inputElement = document.querySelectorAll('textarea')[0];
    let furnitures = JSON.parse(inputElement.value);
    let tbodyElement = document.querySelector('tbody');
    for (const furniture of furnitures) {
      let mainTrElement = document.createElement('tr')

      let imgElement = document.createElement('img');
      imgElement.src = furniture.img;
      let tdImgElement = document.createElement('td')
      tdImgElement.appendChild(imgElement)
      mainTrElement.appendChild(tdImgElement);

      let nameParagraphElement = document.createElement('p')
      nameParagraphElement.textContent = furniture.name
      let tdNameParagraphElement = document.createElement('td')
      tdNameParagraphElement.appendChild(nameParagraphElement)
      mainTrElement.appendChild(tdNameParagraphElement)

      let priceParagraphElement = document.createElement('p') 
      priceParagraphElement.textContent = furniture.price
      let tdPriceParagraphElement = document.createElement('td')
      tdPriceParagraphElement.appendChild(priceParagraphElement)
      mainTrElement.appendChild(tdPriceParagraphElement)

      let decFactorParagraphElement = document.createElement('p')
      decFactorParagraphElement.textContent = furniture.decFactor
      let tdDecFactorParagraphElement = document.createElement('td')
      tdDecFactorParagraphElement.appendChild(decFactorParagraphElement)
      mainTrElement.appendChild(tdDecFactorParagraphElement)

      let tdCheckBox = document.createElement('td')
      let inputElement = document.createElement('input');
      inputElement.type = 'checkbox'
      inputElement.addEventListener('click', function (e) {
        if (e.currentTarget.checked) {
          e.currentTarget.removeAttribute('checked')
        } else {
          e.currentTarget.setAttribute('checked', '')
        }
      })
      tdCheckBox.appendChild(inputElement)
      mainTrElement.appendChild(tdCheckBox)

      tbodyElement.appendChild(mainTrElement)
    }
  })

  buttonsElement[1].addEventListener('click', function (e) {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]')
    
    let dec = 0;
    let sumPrice = 0;
    let count = 0;
    let names = [];
    for (const checkbox of checkboxes) {
      if (checkbox.checked) {  
        count++;
        let rowElements = checkbox.parentNode.parentNode.children;
        names.push(rowElements[1].children[0].textContent)
        sumPrice += Number(rowElements[2].children[0].textContent)
        dec += Number(rowElements[3].children[0].textContent)

      }
    }
    let output = document.querySelectorAll('div textarea')[1];
    output.value+=`Bought furniture: ${names.join(', ')}\n`
    output.value+=`Total price: ${sumPrice.toFixed(2)}\n`;
    output.value+=`Average decoration factor: ${(dec/count)}`


  }



  )


}