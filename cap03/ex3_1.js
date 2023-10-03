var promptSync = require("prompt-sync")     //trecho diferente do livro
var prompt = promptSync()                   //pq o do livro da bug
const num1 = Number(prompt("1° Número: "))
const num2 = Number(prompt("2° Número: "))
const soma = num1 + num2                    //calcula a soma
console.log(`A soma é: ${soma}`)            //exibe o resultado