// A brincadeira "Acerte os legumes" consiste em acertar uma sequência de legumes (batata, beterraba, mandioca, cebola, pepino) geradas aleatoriamente pelo sistema. Criar um sistema no qual são gerados 3 legumes entre os citados acima e armazenados. Em seguida peça para o usuário digitar (um de cada vez) quais legumes ele acha que formam a sequência. Caso acerte todos as legumes na ordem correta, mostrar uma mensagem "Parabéns! Você acertou a sequência", mostrando ainda os legumes gerados e os legumes digitados pelo usuário. Caso erre algum legume, mostrar uma mensagem "Você não acertou todos os legumes". Ao final, dar opção para o jogador jogar novamente ou não, iniciando uma nova rodada caso responda SIM ou finalizando o programa caso responda NÃO.

let legumesPossiveis = ['batata', 'beterraba', 'mandioca', 'cebola', 'pepino']
let indiceAleatorio
let sequencia = []
let legumesDigitados = []
let legume1, legume2, legume3
let acertou = true
let resposta = true
 
do{
 for (let i = 0; i < 3; i++) {
    indiceAleatorio = Math.floor(Math.random() * legumesPossiveis.length);
    sequencia.push(legumesPossiveis[indiceAleatorio]);
  }
  alert(sequencia)


  legume1 = prompt('Digite o primeiro legume da sequência: ')
  legumesDigitados.push(legume1)

  legume2 = prompt('Digite o segundo legume da sequência: ')
  legumesDigitados.push(legume2)

  legume3 = prompt('Digite o terceiro legume da sequência: ')
  legumesDigitados.push(legume3)
    
        for(let i = 0; i < sequencia.length; i++) {
          if (sequencia[i] !== legumesDigitados[i]) {
            acertou = false;
            break;
          }
        }
        if (acertou) {
            
            alert(`A sequencia é: ${sequencia}\nVocê digitou: ${legumesDigitados}`)
            alert('Parabéns! Você acertou a sequência.')
        } else {
            alert(`A sequencia é: ${sequencia}\nVocê digitou: ${legumesDigitados}`)
            alert('Você não acertou todos os legumes.')
        }

        resposta = prompt('Deseja jogar novamente? (SIM ou NÃO): ').toLowerCase()
        if(resposta === 'sim'){
            alert('\nNova rodada!')
            sequencia.splice(0)
            legumesDigitados.splice(0)
            acertou = true
        }else{
            alert('Jogo finalizado.');
            resposta = false
        }
}while(resposta)
