function verificar() {
    data = new Date()
    ano = data.getFullYear()
    fano = document.getElementById('txtano')
    res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        fsex = document.getElementsByName('radsex')
        idade = ano - Number(fano.value)
        genero = ''
        img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'imagens/criancamas.jpg')  
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovemmas.jpg')
                // jovem
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adultomas.jpg')
                // Adulto
            } else {
                img.setAttribute('src', 'imagens/idosomas.jpg')
                // Idoso
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/criancafem.jpg')
                // criança
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovemfem.jpg')
                // jovem
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adultafem.jpg')
                // Adulta
            } else {
                img.setAttribute('src', 'imagens/idosafem.jpg')
                // Idosa
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}