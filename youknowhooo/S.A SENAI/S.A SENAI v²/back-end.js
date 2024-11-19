let email = document.getElementById('email')
let user = document.getElementById('user')
let password = document.getElementById('pass')

let perfilUser = document.getElementById('userLogin')
let perfilPass = document.getElementById('passLogin')
let checkUser, checkPass, CheckUserLogin, CheckPassLogin, loginEfetuado

let vetorUser = []
let vetorPass = []
let vetorEmail = []


function Cadastro(){
    
    vetorEmail.push(email)
    vetorUser.push(user)
    vetorPass.push(password)

    localStorage.setItem('LSEmail', email)
    localStorage.setItem('LSUser', user)
    localStorage.setItem('LSPass', password)
    alert('Suas informações foram salvas')
    
    window.location.href = 'login.html'
    
}

function Logar(){

    checkUser = localStorage.getItem(user)
    checkPass = localStorage.getItem(password)
    CheckUserLogin = localStorage.setItem('CheckUserLogin', perfilUser)
    CheckPassLogin = localStorage.setItem('CheckPassLogin', perfilPass)
    
    alert('!')

        if(checkUser == CheckUserLogin && checkPass == CheckPassLogin){
    
            loginEfetuado = true
    
        }
        if(loginEfetuado){
    
            alert('Login Efetuado')
            window.location.href = 'perfil.html'
       
        }else{
    
            alert('Dados não conferem')
    
    }
}

