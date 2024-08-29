prompt = require("prompt-sync")()

let lista = []

for (i=0; i<3; i++){
    let num = prompt("Digite um número: ");
    lista.push(num)
}

console.log("O minimo é " + Math.min(...lista) + " e o maximo é " + Math.max(...lista))