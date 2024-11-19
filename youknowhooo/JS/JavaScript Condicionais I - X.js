let x, y, finalPrice, discount, a = 0.20, b = 0.10, withFreight, c = 12.50
 y = Number(prompt('Qual o valor da sua compra? '))
 x = Number(prompt('Que categoria de assinatura você possuí? ' + '\n' + '1) Assinante Premium' + '\n' + '2) Assinante Gold' + '\n' + '3) Assinante Silver' + '\n' + '4) Sem assinatura'))

switch(x){

case 1:
    discount = y * a
    finalPrice = y - discount
    alert('O valor a se pagar é de: ' + finalPrice)
    break
case 2:
    discount = y * a
    finalPrice = y - discount
    withFreight = finalPrice + c
    alert('O valor a se pagar é de: ' + withFreight)
    break
case 3:
    discount = y * b
    finalPrice = y - discount
    withFreight = finalPrice + c
    alert('O valor a se pagar é de: ' + withFreight)
    break
case 4:
    withFreight = y + c
    alert('O valor a se pagar sem desconto para assinante é: ' + withFreight)
    break
}