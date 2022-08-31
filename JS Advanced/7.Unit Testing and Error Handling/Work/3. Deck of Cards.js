
function printDeckOfCards(cards) {

    let deck = [];
    for (const card of cards) {
        let [face,suit]=card.split('');
        if(card.length===3){
            face='10';
            suit=card.charAt(2)
        }
        try {
            deck.push(returnCard(face,suit))
        } catch (Error) {
            console.log( Error.message);
        }


    }
    console.log(deck.join(' '));

    function returnCard(face, suit) {

        let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
        let suits = {
            'S': '♠',
            'H': '♥',
            'D': '♦',
            'C': '♣'
        }
    
        if (faces.includes(face) && suits[suit]) {
           
            return `${face}${suits[suit]}`
    
    
        } else {
            throw new Error(`Invalid card: ${face}${suit}`);
        }
    
    }
}

console.log(printDeckOfCards(['AS', '10D', 'KH', '2C']));