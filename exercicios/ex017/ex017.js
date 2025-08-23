num = [5, 12, 3, 4, 6, 1]
num.push(7)
num.sort(ordenaNum)
console.log(num)
function ordenaNum(a,b){
  if(a==b) return 0
  if(a<b) return -1
  if(a>b) return 1
}
console.log(`A quantidade de elementos é ${num.length}`)
console.log(`Nosso vetor é o ${num}`)
pos = num.indexOf(9)
if (pos == -1) {
  console.log('O valor não foi encontrado!')
} else {
  console.log(`O valor está na posição ${pos}`)
}












