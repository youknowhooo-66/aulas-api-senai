let team
let player1, player2, player3, player4
let part1, part2, part3, part4
let vlcMed1, vlcMed2, vlcMed3, vlcMed4, vlcMedTotal, vlcTotal


team = String(prompt('Digite o nome da equipe: '))
player1 = String(prompt('Digite o nome do primeiro participante: '))
part1 = Number(prompt('Digite em quantas horas você pecorreu seu trecho: '))

player2 = String(prompt('Digite o nome do segundo participante: '))
part2 = Number(prompt('Digite em quantas horas você pecorreu seu trecho: '))

player3 = String(prompt('Digite o nome do terceiro participante: '))
part3 = Number(prompt('Digite em quantas horas você pecorreu seu trecho: '))

player4 = String(prompt('Digite o nome do quarto participante: '))
part4 = Number(prompt('Digite em quantas horas você pecorreu seu trecho: '))

vlcMed1 = 30 / part1
alert('Av. Beira-Mar até Cachoeira do Bom Jesus: ' + vlcMed1 + ' km/h')

vlcMed2 = 45 / part2
alert('Cachoeira do Bom Jesus até Lagoa da Conceição: ' + vlcMed2 + ' km/h')

vlcMed3 = 30 / part3
alert('Lagoa da Conceição até Pântano do Sul: ' + vlcMed3 + ' km/h')

vlcMed4 = 35 / part4
alert('Pântano do Sul até Av. Beira-Mar: ' + vlcMed4 + ' km/h')

    vlcTotal = part1 + part2 + part3 + part4
    vlcMedTotal = 140 / vlcTotal
alert('Velocidade média no percurso total: ' + vlcMedTotal + ' km/h')

if(vlcMedTotal < 15){

alert('Desempenho pode melhorar bastante!')
}

if(vlcMedTotal > 15 && vlcMedTotal < 18){

alert('Desempenho bom, mas ainda pode melhorar!')
}

if(vlcMedTotal > 18){

alert('Desempenho excelente. Parabéns!')
}