function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var bomoque = window.document.getElementById('bomoque')
    var data = new Date()
    var hora = data.getHours()
    // var hora = 7
    msg.innerHTML = `Agora são ${hora} horas...`
    if (hora >= 0 && hora < 12) {
        // BOM DIA
        bomoque.innerHTML = '<strong>Bom Dia!</strong>'
        img.src = 'manha.webp'
        document.body.style.background = '#c2c0bc'
        document.body.style.color = 'black'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        bomoque.innerHTML = '<strong>Boa Tarde!</strong>'
        img.src = 'tarde.webp'
        document.body.style.background = '#f4b55f'
        document.body.style.color = 'black'
    } else {
        // BOA NOITE
        bomoque.innerHTML = '<strong>Boa Noite!</strong>'
        img.src = 'noite.webp'
        document.body.style.background = '#672e21'
    }
}

