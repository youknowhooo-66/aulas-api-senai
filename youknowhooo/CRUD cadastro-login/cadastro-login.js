let elmntinptCadastroUser = document.getElementById('inptCadastroUser')
let elmntinptCadastroPass = document.getElementById('inptCadastroPass')
let elmntinptCadastroEmail = document.getElementById('inptCadastroEmail')

let elmntinptLoginUser = document.getElementById('inptLoginUser')
let elmntinptLoginPass = document.getElementById('inptLoginPass')

let elmntDivLista = document.getElementById('inptCadastro')

let vetorUsers = []
let vetorPasswords = []
let vetorEmails = []

let userPesquisa, userPosicao

function Cadastrar(){

    vetorUsers.push(elmntinptCadastroUser.value)
    vetorPasswords.push(elmntinptCadastroPass.value)
    vetorEmails.push(elmntinptCadastroEmail.value)

    alert("cadastrado!")
    console.table(vetorUsers)
    console.table(vetorPasswords)
    console.table(vetorEmails)

    elmntinptCadastroUser = ''
    elmntinptCadastroPass = ''
    elmntinptCadastroEmail = ''

}
function Pesquisar(){

    userPesquisa = elmntinptCadastroUser.value
    userPosicao = vetorUsers.indexOf(userPesquisa)
    if(userPesquisa != -1){

        elmntinptCadastroPass.value = vetorPasswords[userPosicao]
        elmntinptCadastroEmail.value = vetorEmails[userPosicao]
        alert("User existe! Uebaaaa :D")

    }else{alert("User existe! Uebaaaa :D")}

}
function Editar(){
    
    if(elmntinptCadastroUser.value != vetorUsers[userPosicao]){

        alert('Não é possível alterar o username!')

    }else{

        vetorPasswords[userPosicao] = elmntinptCadastroPass.value
        vetorEmails[userPosicao] = elmntinptCadastroEmail.value

        alert('Dados Editados! :D')

        MostraDadosConsole()

    }
}
function Excluir(){
    
    if(elmntinptCadastroPass.value == '' || elmntinptCadastroEmail.value == ''){

        alert('Pesquisa o usuário para puxar os dados, antes de excluir!')

    }else{

        vetorUsers.splice(userPosicao, 1)
        vetorPasswords.splice(userPosicao, 1)
        vetorEmails.splice(userPosicao, 1)

        alert('Usuário Excluído!')

        LimpaCamposCadastro()
        MostraDadosConsole()

    }
}
function Listar(){
    
    listaDados = ''

    for(i=0; i < vetorUsers.length; i++){

        listaDados += `${vetorUsers[i]} - ${vetorPasswords[i]} - ${vetorEmails[i]} ` + '<br>'

    }

    elementoLabelLista.innerHTML = listaDados

}
function Logar(){
    
    loginEfetuado = false

    for(i=0; i < vetorUsers.length; i++){

        if(elmntinptLoginUser.value == vetorUsers[i] && elmntinptLoginPass.value == vetorPasswords[i]){

            loginEfetuado = true

            }
        }
}