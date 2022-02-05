/* Condição composta!
var idade = 2
if (idade < 18) {
    console.log('Menor de idade.')
} else {
    console.log('Maior de idade.')
}
*/

/* Condição Aninhada 
var idade = 18
if (idade < 16) {
    console.log('Não vota.')
} else {
    if (idade >= 16 && idade < 18) { // A parte "idade >= 16" não é necessária, pois subentende-se
         que se a idade não é menor que 16, logo ela será maior ou igual a 16.
        console.log('Voto opcional.')
    } else {
        console.log('Voto obrigatório.')
    }
}
*/

/*Outra forma de escrever a condição aninhada */

var idade = 22
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 65) {
    console.log('Voto opcional')
} else {
    console.log('Voto obrigatório')
}