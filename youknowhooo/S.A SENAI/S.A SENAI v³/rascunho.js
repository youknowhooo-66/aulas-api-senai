email: "youknowhooo@icloud.com"; user: "youknowhooo"; password: "senha"

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