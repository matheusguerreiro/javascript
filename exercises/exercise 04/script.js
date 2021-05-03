function gerar() {
    let numero = Number(window.document.getElementById('idnumero').value)
    let resposta = window.document.getElementById('idresposta')
    // guanabara
    let tab = window.document.getElementById('idtabuada')

    if (numero == "") {
        window.alert('Ai fica Difícil meu Chapa...\nDigite um Número válido!')
        numero.focus()
    }
    
    resposta.innerHTML = "<b>Feito!</b><br>"
    tab.innerHTML = ""
    for (let c = 1; c <= 10; c++) {
        t = numero * c
        resposta.innerHTML += `${numero} X ${c} = <b>${t}</b> <br>`
        // exemplo do guanabara, detro de um select
        let item = document.createElement('option')
        item.text = `${numero} X ${c} = ${numero * c}`
        tab.appendChild(item)
    }
}