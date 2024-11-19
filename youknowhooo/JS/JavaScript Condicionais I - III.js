let idade, baseI = 12, baseII = 18

idade = Number(prompt('Digite a sua idade: '))

if(idade < baseI){

    alert('Voce ganhou 50% de desconto no cinema XXXDDD, look yOU ;)')

}else if(idade >= baseI && idade <= baseII){

    alert('Você ganhou 25% de desconto no cinema :DDD, greaat')

}else{

    alert('Infelizmente, não haverá desconto para você :(')

}