function order(productAndPrice){
      productAndPrice.sort((a,b)=>a.localeCompare(b))

      let lastAlpha='';


      productAndPrice.forEach(element => {
          let prop=element.split(' : ')
          if(prop[0].charAt(0)!==lastAlpha){
              lastAlpha=prop[0].charAt(0);
              console.log(lastAlpha);
          }
          console.log(`  ${prop[0]}: ${prop[1]}`);

      });

}

order(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)