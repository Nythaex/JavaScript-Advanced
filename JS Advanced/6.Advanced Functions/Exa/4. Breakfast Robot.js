function solution() {
    let ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    let commandType = {
        restock(element, quantity) {
            ingredients[element] += quantity
            return 'Success'
        }, prepare(recipe, quantity) {

           
            if (recipe == 'apple') {
                if (ingredients.carbohydrate < quantity) {
                    return 'Error: not enough carbohydrate in stock'
                } else if (ingredients.flavour < quantity * 2) {
                    return 'Error: not enough flavour in stock'
                } else {
                    ingredients.carbohydrate -= quantity
                    ingredients.flavour -= quantity * 2
                    return 'Success'
                }

            } else if (recipe == 'lemonade') {

                if (ingredients.carbohydrate < quantity * 10) {
                    return 'Error: not enough carbohydrate in stock'
                } else if (ingredients.flavour < quantity * 20) {
                    return 'Error: not enough flavour in stock'
                } else {
                    ingredients.carbohydrate -= quantity * 10
                    ingredients.flavour -= quantity * 20
                    return 'Success'
                }
            } else if (recipe == 'burger') {
                if (ingredients.carbohydrate < quantity * 5) {
                    return 'Error: not enough carbohydrate in stock'
                } else if (ingredients.fat < quantity * 7) {
                    return 'Error: not enough fat in stock'
                } else if (ingredients.flavour < quantity * 3) {
                    return 'Error: not enough flavour in stock'
                } else {
                    ingredients.carbohydrate -= quantity * 5
                    ingredients.fat -= quantity * 7
                    ingredients.flavour -= quantity * 3
                    return 'Success'
                }
            } else if (recipe == 'eggs') {
                if (ingredients.protein < quantity * 5) {
                    return 'Error: not enough protein in stock'
                } else if (ingredients.fat < quantity) {
                    return 'Error: not enough fat in stock'
                } else if (ingredients.flavour < quantity) {
                    return 'Error: not enough flavour in stock'
                } else {
                    ingredients.protein -= quantity * 5
                    ingredients.fat -= quantity
                    ingredients.flavour -= quantity
                    return 'Success'
                }
            } else if (recipe == 'turkey') {
                if (ingredients.protein < quantity * 10) {
                    return 'Error: not enough protein in stock'
                } else if (ingredients.carbohydrate < quantity * 10) {
                    return 'Error: not enough carbohydrate in stock'
                } else if (ingredients.fat < quantity * 10) {
                    return 'Error: not enough fat in stock'
                } else if (ingredients.flavour < quantity * 10) {
                    return 'Error: not enough flavour in stock'
                } else {
                    ingredients.protein -= quantity * 10
                    ingredients.carbohydrate -= quantity * 10
                    ingredients.fat -= quantity * 10
                    ingredients.flavour -= quantity * 10
                    return 'Success'
                }
            }
        }, report() {
            return `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`;
        }
    }

    return (commandText) => {
        let [command, firstProp, secondProp] = commandText.split(' ');
        return commandType[command](firstProp, Number(secondProp))
    }

}



let manager = solution();
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("restock protein 10"));
console.log(manager("restock fat 11"));
console.log(manager("restock protein 10"));
console.log(manager("restock fat 11"));
console.log(manager("prepare turkey 1")); 
console.log(manager("report")); 