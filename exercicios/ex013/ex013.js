agora = new Date()
hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas`)
if (hora < 5) {
    console.log('Boa Madrugada!')
} else if (hora <= 11) {
    console.log('Bom Dia!')
} else if (hora <= 17) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}


