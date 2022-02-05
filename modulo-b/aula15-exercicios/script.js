function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formulario_ano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res') // Modo mais atual de pegar um elemento pela Id.
    if (formulario_ano.value.length == 0 || Number(formulario_ano.value > ano)) {
        window.alert('[Error] Verifique os dados e tente novamente')
    } else {
        var formulario_sexo = window.document.getElementsByName('radsex')
        var idade = ano - Number(formulario_ano.value)
        var gênero = ''
        var img = document.createElement('img') // createElement() Cria uma tag diretamente pelo JavaScript.
        img.setAttribute('id', 'foto') // Adiciona um atributo a tag (img.), id = atributo, foto = name/valor
        if (formulario_sexo[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'crianca_homem.png')
            } else if (idade < 21) {
                // Jovem
            } else if (idade < 50) {
                // Adulto
            } else {
                // Idoso
            }
        } else if (formulario_sexo[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
            } else if (idade < 21) {
                // Jovem
            } else if (idade < 50) {
                // Adulta
            } else {
                // Idosa
            }
        }
        res.style.textAlign = 'center' // Estilizando a pagina diretamente no JavaScript.
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img) // Adiciona um elemento (img)
    }
}