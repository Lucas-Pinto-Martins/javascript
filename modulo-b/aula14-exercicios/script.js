function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // Bom dia
        img.src = 'imagens/bom_dia.png'
        document.body.style.background = '#cd7281'
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde
        img.src = 'imagens/boa_tarde.png'
        document.body.style.background = '#c00104'
    } else {
        // Boa noite
        img.src = 'imagens/boa_noite.png'
        document.body.style.background = '#031936'
    }
}
