function tabuada() {
    num = document.getElementById('txtn')
    tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por Favor, Digite um número!')      
    } else {
        n = Number(num.value)
        c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `${c}`
            tab.appendChild(item)
            c++
        }
    }
    
}