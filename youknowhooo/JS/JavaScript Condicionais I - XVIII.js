let maiorAlg = 0, menorAlg = 1111111111111111
let a, b, c, d
let m = 0, n, mn

(alert('Digite 4 números'))

    a = Number(prompt('Digite o primeiro número: '))

if(a > maiorAlg){
    maiorAlg = a
}if(a < menorAlg){
    menorAlg = a
}if(a != maiorAlg || a != menorAlg && a != n){
    m = a
}else{
    n = a
}

b = Number(prompt('Digite o segundo número: '))

if(b > maiorAlg){
    maiorAlg = b
}if(b < menorAlg){
    menorAlg = b
}if(b != maiorAlg || b != menorAlg && b != n){
    m = b
}else{
    n = b
}    
        c = Number(prompt('Digite o terceiro número: '))

if(c > maiorAlg){
    maiorAlg = c
}if(c < menorAlg){
    menorAlg = c
}if(c != maiorAlg || c != menorAlg && c != n){
    m = c
}else{
    n = a
}
    d = Number(prompt('Digite o quarto número: '))

if(d > maiorAlg){
    maiorAlg = d
}if(d < menorAlg){
    menorAlg = d
}if(d != maiorAlg || d != menorAlg && d != n){
    m = d
}else{
    n = a
}

if(a == b || a == c || a == d || b == c || b == d || c == d ){

    alert('Você digitou um numero repetido')

}else{

mn = m + n
alert('O maior número é: ' + maiorAlg)
alert('O menor número é: ' + menorAlg)
alert('A soma dos outros dois(' + m + ' e ' + n + ')números é: ' + mn)
}

