// Code your solutions in this file
let thankyous = []

function writeCards(name, event) {
    for (let i = 0; i < name.length; i++) {
        thankyous.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }
    return thankyous
}

function countdown(number) {
    let i = number
    while (i >= 0) {
        console.log(i--)
    }
}