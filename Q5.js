prompt = require("prompt-sync")()

function ePrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

const numero = prompt("Digite um numeros: ")

var lista = []
for (let i = 0; i < Number(numero); i++) {
    if (ePrimo(i)){
        lista.push(i)
    }
}
console.log("Esses são os numeros primos que são menores que "+ numero + ": ", lista)