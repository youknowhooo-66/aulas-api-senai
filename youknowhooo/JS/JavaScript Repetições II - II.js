let exp, num, result = 1
num = Number(prompt('Digite um número: '))
exp = Number(prompt('Digite um expoente: '))

for (let i = 0; i < exp; i++){

   result *= num

}
alert(result)