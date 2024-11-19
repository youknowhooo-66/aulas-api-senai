let peso, planetas, resultado
let x = 0

peso = String(prompt('Digite um peso em Kg de algo que queira: '))
planetas = Number(prompt('1 - Plutão' + '\n' + '2 - Lua' + '\n' + '3 - Mercúrio' + '\n' + '4 - Marte' + '\n' + '5 - Vênus' + '\n' + '6 - Urano' + '\n' + '7 - Saturno' + '\n' + '8 - Netuno' + '\n' + '9 - Júpiter' + '\n' + 'Digite o número correspondente ao corpo celeste no qual queira usar como comparação(1-9): '))

switch(planetas){
case 1:
resultado = peso * 0.06
alert('Em Plutão o peso equivaleria á: ' + resultado)
break
case 2:
    resultado = peso * 0.17
    alert('Na Lua o peso equivaleria á: ' + resultado)
    break
case 3:
    resultado = peso * 0.38
    alert('Em Mercúrio o peso equivaleria á: ' + resultado)
    break
case 4:
    resultado = peso * 0.38
    alert('Em Marte o peso equivaleria á: ' + resultado)
    break
case 5:
    resultado = peso * 0.91
    alert('Em Vênus o peso equivaleria á: ' + resultado)
    break
case 6:
    resultado = peso * 0.92
    alert('Em Urano o peso equivaleria á: ' + resultado)
    break
case 7:
    resultado = peso * 1.06
    alert('Em Saturno o peso equivaleria á: ' + resultado)
    break
case 8:
    resultado = peso * 1.19
    alert('Em Netuno o peso equivaleria á: ' + resultado)
    break
case 9:
    resultado = peso * 2.34
    alert('Em Júpiter o peso equivaleria á: ' + resultado)
    break
default:
    alert('Não é um numero válido')
}