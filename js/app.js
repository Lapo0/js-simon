

// Creare numeri random

let numeriRandom = [];

function isRandomNumber() {
    while (numeriRandom.length < 5) {
      let numero = Math.floor(Math.random() * 100) + 1;
      if (!numeriRandom.includes(numero)) {
        numeriRandom.push(numero);
      }
    }
    console.log(numeriRandom);

    return numeriRandom
}

isRandomNumber()

// Creare alert per mostrare numeri
alert('Ricorda questi numeri: ' + numeriRandom)