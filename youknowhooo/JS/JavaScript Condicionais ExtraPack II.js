let moeda, dado
moeda = String(prompt('Digite "cara" ou "coroa" de acordo com o resultado da moeda: '))
dado = Number(prompt('Digite de 1-6 de acordo com o resultado do dado: '))

if(moeda == 'cara'){
    alert('Você perdeu a vez!!! :[')

}

if(moeda == 'coroa'){
    alert('Avance ' + dado + ' casas no tabuleiro!')

}