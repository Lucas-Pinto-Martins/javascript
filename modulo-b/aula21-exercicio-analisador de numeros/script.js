let num = document.querySelector('input#txtn')
let anum = document.getElementById('boxn')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) { // ! Quer dizer não. 
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O valor ${num.value} foi adicionado.`
        anum.appendChild(item)
        res.innerHTML = ''

    } else{
        window.alert('[ERROR] Valor inválido ou já está na lista!')
    }
    num.value = '' // Limpa o num após cada adição
    num.focus() // deixa a caixa do input "piscando" pronta para receber outro valor.
}

function finalizar() {
    if (valores.length == 0) { // Pode ser também com a variável num.
        window.alert('[ERROR] Nenhum número foi adicionado!')
    } else {
        let vtotal = valores.length // Total de valores adicionados
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        /*O maior e menor valor adicionados + soma.*/
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
        }

        /*Média dos valores adicionados. */
        media = soma / vtotal

        /*Resultado na tela. */
        res.innerHTML = ''
        res.innerHTML = `<p>Ao todo, temos ${vtotal} números adicionados.</p>`
        res.innerHTML += `<p>O maior valor adicionado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor adicionado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores adicionados é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores adicionados é ${media}.</p>`
    }
}