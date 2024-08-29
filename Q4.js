prompt = require("prompt-sync")()

let dia = prompt("Digite um dia da semana: ");

if (dia === "sabado" || dia === "domingo") {
    console.log("É dia de fim de semana")
} else {
    console.log("É dia útil")
}
