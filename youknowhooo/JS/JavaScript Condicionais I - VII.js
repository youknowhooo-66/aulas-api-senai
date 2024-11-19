let x = 1111, y = 1, a = 1945, b = 1964, c = 1980, d = 1996, e = 2010

alert('Digite a sua data de nascimento')
prompt('Digite o dia: ')
prompt('Digite o mês: ')

x = Number(prompt('Digite o ano: '))

 switch(y == 1){

    case x <= a:

        alert('Você não possui uma Geração :(')
        break

    case x > a && x <= b:

        alert('Você é Baby Boomers')
        break

    case x > b && x <= c:

        alert('Você é Geração X')
        break

    case x > c && x <= d:

        alert('Você é Geração Y')
        break
    
    case x > d && x <= e:

        alert('Você é Geração Z')
        break
    
    case x > e:

        alert('Você é Geração Alfa')
        break
    
    default:

        alert('?')
    

}