let a, b, c
let x = 1

alert('Digite quais frutas foram sorteadas')
a = String(prompt('Digite a primeira fruta: ')).toUpperCase()
b = String(prompt('Digite a segunda fruta: ')).toUpperCase()
c = String(prompt('Digite a terceira fruta: ')).toUpperCase()

switch(x == 1){
case a == 'CEREJA' && b == 'CEREJA' && c == 'CEREJA' :
    alert('Você ganhou R$ 100')
    break
case a == 'LARANJA' && b == 'LARANJA' && c == 'LARANJA' :
    alert('Você ganhou R$ 80')
    break
case a == 'CEREJA' && b == 'LARANJA' && c == 'CEREJA' :
    alert('Você ganhou R$ 50')
    break
case a == 'LARANJA' && b == 'CEREJA' && c == 'LARANJA' :
    alert('Você ganhou R$ 25')
    break
}