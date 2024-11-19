let loginEfetuado = false
let username = document.getElementById('user')
let password = document.getElementById('pass')
let usernameLogin = document.getElementById('userVer')
let passwordLogin = document.getElementById('passVer')
let userVerificar, passVerificar
let userLogin, passLogin


function Cadastro(){

    user.push(username)
    pass.push(password)

    localStorage.setItem('user',username)
    localStorage.setItem('pass', password)

    window.location.href = 'login.html'


}

function Logar(){

userVerificar = localStorage.getItem(username)
passVerificar = localStorage.getItem(password)
userLogin = localStorage.setItem('userLogin',usernameLogin)
passLogin = localStorage.setItem('passLogin',passwordLogin)

    if(userVerificar == userLogin && passVerificar == passLogin){

        loginEfetuado = true

    }
    if(loginEfetuado){

        alert('Login Efetuado')
        window.location.href = 'perfil.html'
   
    }else{

        alert('Dados não conferem')

}
}

function Legenda(){

    window.location.href = 'login.html'

}