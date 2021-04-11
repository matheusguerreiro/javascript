var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()

if (hora < 12) {
    console.log(`Bom dia! São ${hora}:${minutos} am`)
} else if (hora < 18) {
    console.log(`Boa tarde! São ${hora}:${minutos} pm`)
} else {
    console.log(`Boa noite! São ${hora}:${minutos} pm`)
}
