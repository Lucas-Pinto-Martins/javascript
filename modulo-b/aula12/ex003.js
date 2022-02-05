var agora = new Date()
var dia_semana = agora.getDay()
//console.log(dia_semana)

/*
0: Domingo
1: Segunda
2: Terça
3: Quarta
4: Quinta
5: Sexta
6: Sabado
*/

switch(dia_semana) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('terça')
        break
    case 3:
        console.log('quarta')
        break
    case 4:
        console.log('quinta')
        break
    case 5:
        console.log('sexta')
        break
    case 6:
        console.log('Sabado')
        break
    default:
        console.log('[Error] Dia inválido.')
        break
}