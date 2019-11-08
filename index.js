function writeCards(cards, holiday) {
    let array = []
    for (let i = 0; i < cards.length; i++) {
        array.push(`Thank you, ${cards[i]}, for the wonderful ${holiday} gift!`);
    }

    return array
}

function countdown(number) {
    while (number >= 0) {
        console.log(number--)
    }
}