const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    const produto = frm.produto.value
    const precoDoProduto = frm.preco.value
    const descontoTerceiro = frm.preco.value / 2

    resp.innerText = `${produto} - Promoção: Leve 3 por R$: ${((3 * precoDoProduto) - descontoTerceiro).toFixed(2)} \n
    O 3° produto custa apenas R$: ${descontoTerceiro.toFixed(2)} `

    e.preventDefault()
})