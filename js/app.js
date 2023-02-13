// Creare numeri random

let numeriRandom = [];

isRandomNumber(numeriRandom)
console.log(numeriRandom)

// Creare alert per mostrare numeri
alert('Ricorda questi numeri: ' + numeriRandom)

let numeriDaRicordare = []

// Assegnare SetTimeout per richiamare la funzione
setTimeout(function() {
    isRememberNumber(numeriDaRicordare);

    const numeriCombacianti = []

    for (let i = 0; i < numeriRandom.length; i++) {
        for ( let j = 0; j < numeriDaRicordare.length; j++) {
            if ( numeriRandom[i] === numeriDaRicordare[j]) {
                numeriCombacianti.push(numeriRandom[i])
            }
        }
    }

    console.log('Hai azzeccato: ' + numeriCombacianti)
    console.log('Hai azzeccato: ' + numeriCombacianti.length)
}, 3000);





//////////////// FUNZIONI

function isRandomNumber() {
    while (numeriRandom.length < 5) {
      let numero = Math.floor(Math.random() * 100) + 1;
      if (!numeriRandom.includes(numero)) {
        numeriRandom.push(numero);
      }
    }
    return numeriRandom
}


function isRememberNumber(numeri) {
    
    for (let i = 0; i < 5; i++) {
        let numeroDaRicordare
        while (isNaN(numeroDaRicordare)) {
            numeroDaRicordare = parseInt(prompt('Scrivi i numeri che ricordi'))
            if (isNaN(numeroDaRicordare)) {
                alert('Inserisci un numero valido')
            }
        }
        numeri.push(numeroDaRicordare)
    }
    console.log(numeri)
}

