var promptSync = require("prompt-sync")     //trecho diferente do livro
var prompt = promptSync()                   //pq o do livro da bug
const veiculo = prompt("Veículo: ")
const preco = Number(prompt("Preço: "))
const entrada = preco * 0.50
const parcela = (preco * 0.50) / 12
console.log(`Promoção ${veiculo}`)
console.log(`Entrada de R$: ${entrada.toFixed(2)}`)
console.log(`+12x de R$ ${parcela.toFixed(2)}`)
