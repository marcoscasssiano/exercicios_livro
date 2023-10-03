var promptSync = require("prompt-sync")     //trecho diferente do livro
var prompt = promptSync()                   //pq o do livro da bug

const peso = Number(prompt("Peso da Ração (kg): "))
const consumo = Number(prompt("Consumo Diário(gr): "))
const pesoEmGramas = peso * 1000

const duracao = Math.floor(pesoEmGramas / consumo)
const sobra = pesoEmGramas % consumo

console.log(`Duração: ${duracao} dias`)
console.log(`Sobra: ${sobra}gr`)