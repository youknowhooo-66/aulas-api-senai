let nome = []
let menu = true
let addNome, editarNome, buscarNome, retornoNome

do{
    
    menu = Number(prompt(`Escolha uma das categorías dentre as opções abaixo:\n1- Cadastrar nome\n2- Excluir um nome\n3- Editar um nome\n4- Pesquisar se um nome está cadastrado\n5- Listar todos os nomes cadastrados\n0- Sair do programa`))
    
    if(menu == "1"){
        addNome = prompt("Digite seu nome: ")
        nome.push(addNome)
    }
    if(menu == "2"){
        nome.splice(-1,1)
    }
    if(menu == "3"){
        editarNome = prompt('Digite seu nome: ')
        nome.splice(-1,1)
        nome.splice(-1,0,editarNome)
        
    }
    if(menu == "4"){

        buscarNome = prompt('Digite seu nome: ')
        retornoNome = nome.indexOf(buscarNome)
        
        if(retornoNome != -1){
        alert("Está cadastrado")
        }else{
        alert("Não está cadastrado")
        }

    }
    if(menu == "5"){
        alert(nome)
    }
    if(menu == "0"){
        menu = false
}
}while(menu)
