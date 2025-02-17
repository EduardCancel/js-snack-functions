/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function stringVocali(string){
    let vowelsNumber = 0
    let vowelsFound = [];

    for (let i = 0; i < string.length; i++){
        let thisVowels1 = string[i]
        if (thisVowels1 === 'a' || thisVowels1 === 'e' || thisVowels1 === 'i' || thisVowels1 === 'o' || thisVowels1 === 'u'){
            vowelsNumber ++;
            vowelsFound.push(thisVowels1)
        }
    }
    return vowelsNumber, vowelsFound
}

// Invoca la funzione qui e stampa il risultato in console

console.log(stringVocali(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)