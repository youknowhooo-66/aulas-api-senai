// O Amazon Prime Video, possui um sistema de pesquisa no seu catálogo que armazena as últimas buscas do usuário. Esse sistema armazena em um histórico de pesquisa somente as séries e filmes que existem no catálogo, ou seja, que foram encontradas na busca. Criar um programa que contenha a seguinte lista com 20 séries: House, The Boys, Clarice, Monk, Citadel, Reacher, Undone, Bosch, The Lake, Cold Case, Mr Robot, Hannibal, Upload, Chuck, Hanna, Enxame, Madmen, Sherlock, Hunters e Supernatural. Criar um sistema com as opções: 1) Pesquisar Série 2) Consultar histórico de pesquisa 3) Limpar histórico 4) Sair. O sistema deve permitir ao usuário pesquisar se uma série existe e após cada pesquisa mostrar mensagem "Série encontrada!" ou "Série não encontrada!", voltando para o menu. Caso escolha consultar histórico, mostrar o histórico somente com as séries encontradas ou "Seu histórico de pesquisa está vazio!". A opção de limpar o histórico, deve esvaziar o histórico. A opção sair deve encerrar o programa.

let verifica = [], comando, busca, pesquisa, catalogo = ['House', 'The Boys', 'Clarice', 'Monk', 'Citadel', 'Reacher', 'Undone', 'Bosch', 'The Lake', 'Cold Case', 'Mr Robot', 'Hannibal', 'Upload', 'Chuck', 'Hanna', 'Enxame', 'Madmen', 'Sherlock', 'Hunters', 'Supernatural']
let x = true

do{

comando = Number(prompt(`Escolha uma das opções: \n 1) Pesquisar Série \n 2) Consultar histórico de pesquisa \n 3) Limpar histórico \n 4) Sair`))

if(comando == 1){

    pesquisa = prompt('Digite o nome da série/filme que gostaria de pesquisar')
    busca = catalogo.indexOf(pesquisa)
    verifica.push(pesquisa)

if(busca > 0){
        alert('Série encontrada!')
    }else{
        alert('Série não encontrada!')}
    }

if(comando == 2){ 
    if(verifica.length > 0){
    alert(verifica)}else{alert('Nenhum histórico encontrado')}
    }

if(comando == 3){
    verifica.splice(0)
    }

if(comando == 4){
    x = false
    }

}while(x)