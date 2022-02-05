let valores = [2, 4, 5, 2, 7, 7]
console.log(valores)
console.log(`A variável possui ${valores.length} elementos.`)
/*
for (let pos = 0; pos < valores.length; pos ++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/
// Maneira simplificada de escrever os elementos, só funciona para arrays e objetos

for (let pos in valores) { // Para cada posição(pos) em(in) valores, executar o bloco.
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

let pos = valores.indexOf(1) // Procura o valor em questão() e retorna sua posição, caso o valor não exista ele retorna "-1".
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}

                // Comandos úteis //

valores[7] ='valor' // Adiciona um elemento através da chave de identificação(posição), pode ser usado para alterar uma posição existente.

valores.push() // Adiciona um elemento na última posição.

valores.length // Conta quantos elementos há no array.

// Atributos não são seguidos por(), apenas metodos são.

valores.sort() // Organiza os elementos em ordem crescente.

valores.indexOf() // Retorna a chave de identificação(posição), na qual se encontra o elemento solicitado(). Caso não acha elemento correspondente, ele retorna "-1"

// Retornando os elementos sem [].

for (let pos = 0; pos < valores.length; pos ++) {
    console.log(`A posição ${pos} possui o valor ${valores[pos]}`)
}