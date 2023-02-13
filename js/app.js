// Creare numeri random

let numeriRandom = [];

isRandomNumber(numeriRandom)
console.log(numeriRandom)

// Creare alert per mostrare numeri
alert('Ricorda questi numeri: ' + numeriRandom)

// Creare variabile per calcolare 30 secondi
const sec = isAvailableTime()

// Assegnare SetTimeout per richiamare la funzione
setTimeout(function() {
    let randomNumbersPc = numbersToRemeber();

    const numeriCombacianti = []

    let won = false

    for (let i = 0; i < numeriRandom.length; i++) {
        for ( let j = 0; j < randomNumbersPc.length; j++) {
            if ( numeriRandom[i] === randomNumbersPc[j]) {
                numeriCombacianti.push(numeriRandom[i])
                won = true
            } 
        }
    }
    if (won) {
        console.log('Hai azzeccato: ' + numeriCombacianti)
        console.log('Hai azzeccato: ' + numeriCombacianti.length + ' numeri')
    } else {
        console.log('Hai perso!')
    }

}, sec);



function isAvailableTime() {
    return 3 * 1000;
}

//////////////// FUNZIONI //////////////////////

function isRandomNumber() {
    while (numeriRandom.length < 5) {
      let numero = Math.floor(Math.random() * 100) + 1;
      if (!numeriRandom.includes(numero)) {
        numeriRandom.push(numero);
      }
    }
    return numeriRandom
}

function numbersToRemeber() {
    let randomNumbersPc = [];
    for (let i = 0; i < 5; i++) {
        let numeroDaRicordare;
        while (isNaN(numeroDaRicordare)) {
            numeroDaRicordare = parseInt(prompt('Scrivi i numeri che ricordi'));
            if (isNaN(numeroDaRicordare)) {
                alert('Inserisci un numero valido');
            }
        }
        randomNumbersPc.push(numeroDaRicordare);
    }
    console.log(randomNumbersPc)
    return randomNumbersPc;
}