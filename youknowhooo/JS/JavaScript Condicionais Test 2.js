
let indice, y = 3, z = 0
let quality, beneficio, durabldd

alert('Gerador de índice de satisfação de produtos')

quality = Number(prompt('Agora, digite sua avaliação(0-10) no quesito, Qualidade de Produto: '))
beneficio = Number(prompt('Digite sua avaliação(0-10) no quesito, Custo Benefício: '))
durabldd = Number(prompt('Sua avaliação(0-10) no quesito, Durabilidade: '))

x = quality + beneficio + durabldd
indice = x / y

switch(z == 0){
    case indice <= 5: 
        alert('O índice desse produto é ' + indice.toFixed(2) + '. Por ser baixa, não ganha destaque.')
    case indice > 5 && indice < 7:
        alert('O índice desse produto é ' + indice.toFixed(2) + '. Por estar na média, ganha destaque na página de categoria.')
    case indice >= 7 && indice < 9:
        alert('O índice desse produto é ' + indice.toFixed(2) + '. A nota é boa, ganha destaque em promoções.')
    case indice >= 9:
        alert('O índice desse produto é ' + indice.toFixed(2) + '. A nota é excelente, ganha destaque na página principal.')

}