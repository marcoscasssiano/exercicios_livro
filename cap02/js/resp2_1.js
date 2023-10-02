const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    const medicamento = frm.medicamento.value
    const preco = frm.preco.value

    const promocao = preco * 2

    resp.innerText = `Promoção ${medicamento}\n Leve 2 por apenas R$: ${Math.trunc(promocao)},00`


    e.preventDefault()

    console.log(frm)
})