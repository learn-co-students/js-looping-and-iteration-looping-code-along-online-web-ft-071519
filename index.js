function writeCards(arr, event) {
    let cards = [];
    for(let i = 0; i < arr.length; i++) {
        cards.push(`Thank you, ${arr[i]}, for the wonderful surprise gift!`);
    }
    return cards;
}

function countdown(num) {
  while (num >= 0) {
      console.log(num);
      num--;
  }
  return num;
}