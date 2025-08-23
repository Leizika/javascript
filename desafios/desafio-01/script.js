function carregar() {
    agora = new Date()
    hora = agora.getHours()
    mensagem = window.document.getElementById('msg')
    mensagem.innerHTML = `<h2>Agora são ${hora} horas.</h2>`
    img = window.document.getElementById('imagem')
    if (hora >= 6 && hora < 12) {
        document.body.style.background = 'rgba(27, 103, 195, 0.781)'
        img.src = 'dia.jpg'
        /* imagem do dia */
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.jpg'
        document.body.style.background = 'rgba(196, 89, 17, 1)'
        /* imagem da tarde */
    } else {
        img.src = 'noite.jpg'
        document.body.style.background = 'rgba(14, 15, 15, 0.97)'
        /* imagem da noite */
    }

}