agora = new Date()
diadasmn = agora.getDay()

switch(diadasmn) {
    case 0:
        console.log('Hoje é Domingo.')
        break /*O Break é OBRIGATÓRIO*/
    case 1:
        console.log('Hoje é Segunda.')
        break /*O Break é OBRIGATÓRIO*/ 
    case 2:
        console.log('Hoje é Terça.')
        break /*O Break é OBRIGATÓRIO*/ 
    case 3:
        console.log('Hoje é Quarta.')
        break /*O Break é OBRIGATÓRIO*/
    case 4:
        console.log('Hoje é Quinta.')
        break /*O Break é OBRIGATÓRIO*/
    case 5:
        console.log('Hoje é Sexta.')
        break /*O Break é OBRIGATÓRIO*/
    case 6:
        console.log('Hoje é Sábado.')
        break /*O Break é OBRIGATÓRIO*/
    default:
        console.log('[ERRO] Dia inválido!')
        break
}



