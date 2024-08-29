prompt = require("prompt-sync")()

let idade1 = prompt("Digite sua idade: ");
let idade2 = prompt("Digite sua idade: ");
let idade3 = prompt("Digite sua idade: ");

if (idade1 >= 18 && idade2 >= 18 && idade3 >= 18) {
    console.log("Todas são maiores de Idade")
} else if(idade1 < 18 && idade2 < 18 && idade3 < 18) {
    console.log("Todas são menores de idade")
} else {
    console.log("Algumas dela é maior de idade")
}
