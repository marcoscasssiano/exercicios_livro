const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    const precoPor15Min = frm.precoPor15Min.value
    const tempo = frm.tempo.value

    let tempoDeUso = Math.floor(tempo / 15)

    if (tempo % 15 != 0 ){
        tempoDeUso += 1
    }

    resp.innerText = `Valor a Pagar R$:${(tempoDeUso * precoPor15Min).toFixed(2)} `

    e.preventDefault()
})