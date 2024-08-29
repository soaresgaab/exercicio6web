prompt = require("prompt-sync")()

var lista = []

num = 1

while(num != 0){
    num = prompt("Digite um numero: ")
    lista.push(Number(num))
}
lista.pop()
console.log("o maior numero é: " + Math.max(...lista) + " e o menor é: " + Math.min(...lista))