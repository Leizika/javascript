function contar() {
    ini = window.document.getElementById('txti')
    fim = document.getElementById('txtf')
    passo = document.querySelector('input#txtp')
    res = document.getElementById('conta')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar...'
    } else {
        res.innerHTML = 'Contando: <br> '
        i = Number(ini.value)
        f = Number(fim.value)
        p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1.')
            p = 1
        }
        if (i < f) { // Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} 👉`
            }
            
        } else { // Contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} 👉`
            }
        }
        res.innerHTML += `🏁`
    }

}