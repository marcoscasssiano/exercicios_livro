var promptSync = require("prompt-sync")     //trecho diferente do livro
var prompt = promptSync()                   //pq o do livro da bug


const salario = Number(prompt("Salário: "))
const tempo = Number(prompt("Tempo (anos): "))
const umPorCentoDoSalalario = salario * 0.01
const quadienios = Math.floor(tempo / 4)

console.log(`Quadriênios: ${quadienios}`)
console.log(`Salários Final R$: ${(salario + (quadienios * umPorCentoDoSalalario)).toFixed(2)}`)
