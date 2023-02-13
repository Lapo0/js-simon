// Richiamare il pulsante
const play = document.getElementById('play')

const griglia = document.getElementById('griglia')


play.addEventListener('click', function() {
    // Creare numeri random
    let numeriRandom = isRandomNumber()
    console.log(numeriRandom)
    
    // Creare variabile per calcolare 30 secondi
    const sec = isAvailableTime()

    // Creare ciclo per creare div
    for (let i = 0; i < numeriRandom.length; i++) {

        // Creare i div con il numero corrispondente all'interno e la grandezza in base ai lati
        const colString = `<div class='col-4' style='width: calc(100% / 5)'> ${numeriRandom[i]} </div>`
        console.log(colString)
    
        //Aggiungere all'html il div
        griglia.innerHTML += colString
    }

    setTimeout(function() {
        const cols = document.querySelectorAll('.col-4');
        cols.forEach(col => {
            col.style.display = 'none';
        });
    }, sec)

    // Creare SetTimeout per richiamare i prompt dopo 3 secondi
    setTimeout(function() {
        let randomNumbersPc = numbersToRemeber();
    
        const numeriCombacianti = []
        let won = false
    
        for (let i = 0; i < numeriRandom.length; i++) {
            for ( let j = 0; j < randomNumbersPc.length; j++) {
                if ( numeriRandom[i] === randomNumbersPc[j] && !numeriCombacianti.includes(numeriRandom[i])) {
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
    
    }, sec * 2);

    
})




//////////////// FUNZIONI //////////////////////

function isRandomNumber() {
    let numeriRandom = [];
    while (numeriRandom.length < 5) {
        let numero = Math.floor(Math.random() * 100) + 1;
        if (!numeriRandom.includes(numero)) {
            numeriRandom.push(numero);
        }
    }
    return numeriRandom;
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

function isAvailableTime() {
    return 5 * 1000;
}
