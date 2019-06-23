// Code your solutions in this file

function writeCards(names, gifts) {
    const cards = [];
    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${gifts} gift!`)
    }
    return cards;
}

function countdown(num) {
    let countdown = num;
    while (countdown >= 0) {
        console.log(countdown--)
    }
}