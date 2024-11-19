let fgts, causa, recebimento, porcentagem

fgts = Number(prompt('Digite o valor do seu FGTS: '))
causa = String(prompt('Selecione a opção que contenha a razão de sua saída: ' + '\n' + 'A) Justa causa' + '\n' + 'B) Sem justa causa')).toUpperCase()

switch(causa){

    case 'A':

    recebimento = fgts - 4000
    alert('o valor do seu fgts (R$) é de: ' + recebimento)
    break

    case 'B':

    porcentagem = fgts * 0.15
    recebimento = fgts - porcentagem

    alert('o valor do seu fgts (R$) é de: ' + recebimento)

}