prompt = require("prompt-sync")()

let n = parseInt(prompt("Digite um número:"));

let a = 0, b = 1;

console.log(`Sequência de Fibonacci até ${n}:`);
let lista = []
while (a <= n) {
    lista.push(a);
    let temp = a;
    a = b;
    b = temp + b;
}
console.log(lista)