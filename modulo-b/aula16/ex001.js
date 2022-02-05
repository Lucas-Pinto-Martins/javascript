// Estrutura de repetição com teste lógico no início

var c = 1
while (c <= 5) {
    console.log(`Passo ${c}`)
    c++ // Adiciona + 1 a contagem.
}

// Estrutura de repetição com teste lógico no fim

var c = 1
do {
    console.log(`Passo ${c}`)
    c++
} while (c <= 5)

// Estrutura de repetição com variável de controle

for(c = 1;c <= 5;c++) { // (início; teste lógico; incremento)
    console.log(`Passo ${c}`)
}