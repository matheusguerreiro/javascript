function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'menino.webp')
            } else if (idade < 31) {
                // jovem
                img.setAttribute('src', 'homemjovem.webp')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'homem.webp')
            } else {
                // idoso
                img.setAttribute('src', 'velho.webp')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'menina.webp')
            } else if (idade < 31) {
                // jovem
                img.setAttribute('src', 'mulherjovem.webp')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'mulher.webp')
            } else {
                // idoso
                img.setAttribute('src', 'velha.webp')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é ${genero} com ${idade} anos...`
        res.appendChild(img)
    }
}