/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

const letter = "a"

// Dichiara la funzione qui.
function firstWordAccept(arr, lett){
    const nameInitial = []
    for (let i = 0; i < arr.length; i++){
        const thisName = arr[i]
        if (thisName.charAt(0).toLowerCase() === lett.toLowerCase()){
            nameInitial.push(thisName)
        }
    }
    return nameInitial
}

// Invoca la funzione qui e stampa il risultato in console

console.log(firstWordAccept(names, letter));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]