function contar() {
    var inicio = Number(window.document.getElementById('txtinicio').value)
    var fim = Number(window.document.getElementById('txtfim').value)
    var passo = Number(window.document.getElementById('txtpasso').value)
    var resposta = window.document.getElementById('res')
    var txt = "" // necessaria para aparecer a resposta

    if (inicio == "") {
        window.alert('Digite um Valor para Iniciar!')
        inicio.focus()
    } else if (fim == "") {
        window.alert('Digite um Valor para Finalizar!')
        fim.txtfim.focus()
    } else if (passo == "" || passo <= 0) {
        window.alert('Valor Inválido para o passo... Vamos considerar o Valor 1.')
        passo = 1
    } else {
        resposta.innerHTML = 'Contando...'
    }
    
    if (inicio < fim) {
        // contagem crescente
        for (inicio; inicio <= fim; inicio += passo) {
            txt += `${inicio} -> `
        }
    } else {
        // contagem decrescente
        for (inicio; inicio >= fim; inicio -= passo) {
            txt += `${inicio} -> `
        }
    }
    txt += '\u{1F606}'
    resposta.innerHTML = txt
}