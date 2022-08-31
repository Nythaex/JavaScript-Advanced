function solve() {
   let buttonsDivElements =Array.from(document.querySelectorAll('body div div button'));
   let resultElement = document.querySelector('div textarea');
   let sum = 0;
   let names = [];

   console.log( buttonsDivElements);
   for (const buttonElement of buttonsDivElements) {
      
         buttonElement.addEventListener('click', function (e) {


            let productInfoElements = Array.from(e.currentTarget.parentNode.parentNode.children);
            
            let name = productInfoElements[1].children[0].textContent;
            let price = Number(productInfoElements[3].textContent);

            sum += price;


            resultElement.value = resultElement.value + `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
            if (!names.includes(name)) {
               names.push(name)
            }


         })
      
   }
   let checkoutElement = document.getElementsByClassName(`checkout`)[0];
   checkoutElement.addEventListener('click', function () {
      resultElement.value += `You bought ${names.join(', ')} for ${sum.toFixed(2)}.`
      Array.from(document.querySelectorAll('button')).forEach(x => x.disabled = true);
   })

}