let emailInput = document.getElementById('inptEmail');
let userInput = document.getElementById('inptUser');
let passwordInput = document.getElementById('inptPass');

let loginUser = document.getElementById('inptUserLogin');
let loginPass = document.getElementById('inptUserPass');

function Cadastro() {
    if (emailInput.value.trim() === '' || userInput.value.trim() === '' || passwordInput.value.trim() === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    let userData = {
        email: emailInput.value,
        user: userInput.value,
        password: passwordInput.value
    };

    let users = JSON.parse(localStorage.getItem('usersData')) || [];
    users.push(userData);
    localStorage.setItem('usersData', JSON.stringify(users));

    alert('Suas informações foram salvas');
    window.location.href = 'login.html';
}

function Logar() {
    if (loginUser.value.trim() === '' || loginPass.value.trim() === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    
    let users = JSON.parse(localStorage.getItem('usersData')) || [];
    let userMatch;
    
    for (let i = 0; i < users.length; i++) {
        if (users[i].user === loginUser.value && users[i].password === loginPass.value) {
            userMatch = users[i];
            break;
        }
    }
    
    if (userMatch) {
        localStorage.setItem('loggedUser', JSON.stringify(userMatch));
        alert('Login Efetuado');
        window.location.href = 'perfil.html';
    } else {
        alert('Dados não conferem');
    }
    if(userData = {
        email: "youknowhooo@icloud.com",
        user: "youknowhooo",
        password: "senha"
    }){
        window.location.href = 'cadastroreceita.html'
    }
}


let emailInputPerfil = document.getElementById('emailPerfil');
let userInputPerfil = document.getElementById('userPerfil');
let passwordInputPerfil = document.getElementById('senhaPerfil');

let loggedUser = JSON.parse(localStorage.getItem('loggedUser'));

if (loggedUser) {
    if (emailInputPerfil) {
        emailInputPerfil.value = loggedUser.email || '';
    }
    if (userInputPerfil) {
        userInputPerfil.value = loggedUser.user || '';
    }
    if (passwordInputPerfil) {
        passwordInputPerfil.value = loggedUser.password || '';
    }
}


emailInputPerfil = document.getElementById('emailPerfil');
userInputPerfil = document.getElementById('userPerfil');
passwordInputPerfil = document.getElementById('senhaPerfil');
excluirButton = document.querySelector('.excluir');
editarButtons = document.querySelectorAll('.botao-direito');

loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
let users = JSON.parse(localStorage.getItem('usersData')) || [];

if (loggedUser) {
    emailInputPerfil.value = loggedUser.email || '';
    userInputPerfil.value = loggedUser.user || '';
    passwordInputPerfil.value = loggedUser.password || '';
}

function excluirConta() {
    users = users.filter(function(user) {
        return user.user !== loggedUser.user;
    });

    localStorage.setItem('usersData', JSON.stringify(users));
    localStorage.removeItem('loggedUser');
    alert('Conta excluída com sucesso');
    window.location.href = 'registro.html';
}

function editarInformacao(input) {
    input.disabled = false;
    input.focus();
}

function salvarInformacao() {
    let index = users.findIndex(function(user) {
        return user.user === loggedUser.user;
    });

    if (index !== -1) {
        users[index].email = emailInputPerfil.value;
        users[index].user = userInputPerfil.value;
        users[index].password = passwordInputPerfil.value;

        localStorage.setItem('usersData', JSON.stringify(users));
        localStorage.setItem('loggedUser', JSON.stringify(users[index]));
        alert('Informações atualizadas com sucesso');
        window.location.reload();
    }
}

excluirButton.onclick = excluirConta;

for (let i = 0; i < editarButtons.length; i++) {
    editarButtons[i].onclick = function() {
        let input;

        switch (i) {
            case 0:
                input = emailInputPerfil;
                break;
            case 1:
                input = userInputPerfil;
                break;
            case 2:
                input = passwordInputPerfil;
                break;
        }

        editarInformacao(input);

        input.onblur = function() {
            input.disabled = true;
            salvarInformacao();
        };
    };
}
