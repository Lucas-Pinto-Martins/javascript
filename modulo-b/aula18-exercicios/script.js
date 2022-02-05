function tabuada() {
    let num = document.getElementById('num')
    let tabuada = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tabuada.innerHTML = '' // Limpa a tag select 
        while (c <= 10) {
            let item = document.createElement('option') // Cria a tag option
            item.text = `${n} x ${c} = ${n * c}` // Cria texto dentro da tag option
            item.value = `tab${c}` // Serve para saber qual item foi selecionado. (Tem maior uso em outras linguagens).
            tabuada.appendChild(item) // adiciona a tag filha option(item) dentro da tag select(tabuada)
            c++
        }
    }   
}