let a, b, c
let x = 1

alert('Digite o tamanho dos 3 lados do triângulo')
a = Number(prompt('Quanto mede o primeiro lado? '))
b = Number(prompt('Quanto mede o segundo lado? '))
c = Number(prompt('Quanto mede o terceiro lado? '))

switch(x == 1){

case a == b && a == c && b == c:
alert('Triângulo Equilátero')
break

case a != b && a != c && b != c:
alert('Triângulo Escaleno')
break

case a != b || a != c:
alert('Triângulo Isóceles')
break

case b != a || b != c:
alert('Triângulo Isóceles')
break

case c != a || c != b:
alert('Triângulo Isóceles')
break

}