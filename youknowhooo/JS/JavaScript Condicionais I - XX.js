let egg = 0.40, eggx = 0.30, eggy = 0.25, eggs, compra
let x = 1

eggs = Number(prompt('Digite quantos ovos você gostaria de levar: '))

switch(x == 1){

case eggs <= 12 :
compra = eggs * egg
alert('Sua compra (R$) é de: ' + compra)
break

case eggs > 12 && eggs <= 24 :
compra = eggs * eggx
alert('Sua compra (R$) é de: ' + compra)
break

case eggs > 24 :
compra = eggs * eggy
alert('Sua compra (R$) é de: ' + compra)
break

}