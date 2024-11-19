let x = document.getElementById("Numero")
let tabuada = ''
let result

function NumeroInteiro() {
     
for (let i = 1; i <= 10; i++) {
    result = Number(x.value) * i
    tabuada += `${(x.value)} x ${i} = ${result}\n`
}
console.log(tabuada)
}