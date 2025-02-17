/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function initialWord(arr){
    const intial = []
    for( let i = 0; i < arr.length; i++){
        let thisName = arr[i];
        intial.push(thisName[0]);
    }

    return intial
}

// Invoca la funzione qui e stampa il risultato in console

console.log(initialWord(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]