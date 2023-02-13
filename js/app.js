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

// Assegnare SetTimeout per richiamare la funzione
setTimeout(isRememberNumber, 3000)

// Creare funzione per inserire nel promt i numeri
function isRememberNumber() {
    for (let i = 0; i < 5; i++) {
        let numeroDaRicordare;
        while (isNaN(numeroDaRicordare)) {
            numeroDaRicordare = parseInt(prompt('Scrivi i numeri che ricordi'));
            if (isNaN(numeroDaRicordare)) {
                alert('Inserisci un numero valido');
            }
        }
        console.log(numeroDaRicordare);
    }
}
