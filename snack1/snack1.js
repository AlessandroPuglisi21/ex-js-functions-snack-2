// Crea una funzione che somma due numeri.
// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
// Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
// Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.

// Funzione dichiarativa
function somma(a, b) {
    return a + b;
}
console.log(somma(3, 5))

// Funzione anonima assegnata a una variabile
const sommaDue = function(a, b) {
    return a + b;
}
console.log(sommaDue(11, 3)); 

// Funzione con arrow function
const sommaTre = (a, b) => a + b;

console.log(sommaTre(1, 6)); 
