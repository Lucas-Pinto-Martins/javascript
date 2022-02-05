function contar() {
    var inicio = document.getElementById('inumber')
    var fim = document.getElementById('enumber')
    var intervalo = document.getElementById('passo')
    var res = window.document.querySelector('div#res')
    res.style.padding = '16px'
    res.style.paddingLeft = '1px'

    if (inicio.value.length == 0 || intervalo.value.length == 0 || fim.value.length == 0) {
        res.innerHTML = 'Faltam dados'
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(intervalo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if(i < f) {
            // Contagem crescente

            for (var contador = i; contador <= f; contador += p) { // "+=" O segundo valor é somado ao primeiro.
                res.innerHTML += `${contador} \u{1F449}`
            }
            
        } else {
            // Contagem regressiva

            for (contador = i; contador >= f; contador -= p) { // "-=" O segundo valor é subtraído do primeiro.
                res.innerHTML += `${contador} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}