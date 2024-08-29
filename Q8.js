prompt = require("prompt-sync")()

const frase = prompt("Digite uma frase: ").split(" ").join("").split("")

var cont = 0
for (i = 0 ; i < frase.length; i++){
    if (frase[i] === "a" || frase[i] === "A"){
        cont += 1
    }else if (frase[i] === "e" || frase[i] === "E"){
        cont += 1
    }else if (frase[i] === "i" || frase[i] === "I"){
        cont += 1
    }else if (frase[i] === "o" || frase[i] === "O"){
        cont += 1
    }else if (frase[i] === "u" || frase[i] === "U"){
        cont += 1
    }
}

console.log(frase)
console.log(cont)