function findProducts(townsAndProducts) {
    let products = {};

    townsAndProducts.forEach(element => {
        let [townName,productName, productPrice] = element.split(' | ');


        if (products[productName]) {
            if (products[productName].productPrice > Number(productPrice)) {
                products[productName].productPrice =Number(productPrice)
                products[productName].townName = townName;

            }
        } else {
            products[productName] = {
                productName,
                productPrice:Number(productPrice),
                townName
            }
        }
    });

    Object.keys(products).forEach(key => {
        console.log(`${products[key].productName} -> ${products[key].productPrice} (${products[key].townName})`);
    })
}

