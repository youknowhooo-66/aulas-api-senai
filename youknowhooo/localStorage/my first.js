let nome, idade

// localStorage.setItem('nome', 'Maycon')
// localStorage.setItem('idade', 10)

nome = prompt('Digite o seu nome: ')
idade = prompt('Digite sua idade: ')

localStorage.setItem('nome', nome)
localStorage.setItem('idade', idade)

alert(localStorage.getItem('nome'))

localStorage.getItem('idade')
alert(idade)