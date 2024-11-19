let a, b, c, totalScore
a = Number(prompt('Digite a pontuação do primeiro arremesso: '))
b = Number(prompt('Digite a pontuação do segundo arremesso: '))
c = Number(prompt('Digite a pontuação do terceiro arremesso: '))
totalScore = a + b + c

switch (totalScore){

case totalScore = 15:
    alert('You are a Deus da peteca')
    break
case totalScore < 15 && totalScore >= 10:
    alert('You are a Petequeiro profissa')
    break
case totalScore < 10 && totalScore >= 5:
    alert('You are a Petequeiro de final de semana')
    break
case totalScore < 5 && totalScore > 0:
    alert('You are a Pseudo-petequeiro')
    break
default:
    alert('?')
}