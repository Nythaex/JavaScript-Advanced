function returnCard(face, suit) {

    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    let suits = {
        'S': '♠', 
        'H': '♥', 
        'D': '♦', 
        'C': '♣'
    }

    if(faces.includes(face)&&suits[suit]){
         return `${face}${suits[suit]}`

    }else{
        throw new Error(`Invalid card:  ${face}${suit}`);
    }

}

console.log(returnCard('1', 'C'));