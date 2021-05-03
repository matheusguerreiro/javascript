let numero = window.document.getElementById('numero')
let lista = window.document.getElementById('elemento')
let resultado = window.document.getElementById('resultado')
let listaN = []

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumber(numero.value) && !inList(numero.value, listaN)) {
        listaN.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `\xa0\xa0*\xa0\xa0Valor ${numero.value} adicionado`
        lista.appendChild(item)
        resultado.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já está na Lista!')
    }
    numero.value = ''
    numero.focus()
}

function finalizar() {
    if (listaN.length == 0) {
        window.alert('Sem dados para finalizar...')
    } else {
        resultado.innerHTML = ''
        let total = listaN.length
        let menor = listaN[0]
        let maior = listaN[0]
        let media = 0
        let soma = 0
        // usar esse método para verificar elementos na lista O (var c=0; c<=listaN.length; c++) não funciona...
        for (let n in listaN) {
            soma += listaN[n]
            if (listaN[n] < menor) {
                menor = listaN[n]
            }
            if (listaN[n] > maior) {
                maior = listaN[n]
            }
        }
        media = soma / total
        resultado.innerHTML += `<p>Total: ${total}, menor: ${menor}, MAIOR: ${maior}, Soma: ${soma}, Média: ${media.toFixed(4)}</p>`
    }
}