let question1, question2, question3, question4
let x

alert('Welcome to the mini quiz!')
alert('Serão 4 quest, take your time, e no final, mostrarei pra você sua pontuação ;)')
alert('Ai vem a primeira pergunta :D')
question1 = String(prompt('1) Quais séries a seguir englobam melhor a temática de vampiros e assombração?' + '\n' + 'A) Van Helsing ' + '\n' + 'B) Castlevania' + '\n' + 'C) The Vampire Diaries' + '\n' + 'D) Blade: The Series')).toLowerCase()
switch(question1){
    case 'a':
        question1 = 2
        break
    case 'b':
        question1 = 3
        break
    case 'c':
        question1 = 2
        break
    case 'd':
        question1 = 1
        break
    default:
        question1 = 0
        break
}
alert('Hora da segunda pergunta :]')
question2 = String(prompt('2) Dentre os livros abaixo, quais incluem melhor a temática de fantasia?' + '\n' + 'A) Alice no País das Maravilhas' + '\n' + 'B) O Hobbit' + '\n' + 'C) A Fantástica Fábrica de Chocolates' + '\n' + 'D) Coraline')).toLowerCase()
switch(question2){
    case 'a':
        question2 = 4
        break
    case 'b':
        question2 = 2
        break
    case 'c':
        question2 = 4
        break
    case 'd':
        question2 = 3
        break
    default:
        question2 = 0
        break
}
alert('Agora a terceira pergunta ;3 ')
question3 = String(prompt('3) Quais das franquias listadas, representam melhor a empresa de jogos Nintendo?' + '\n' + 'A) The Legend of Zelda' + '\n' + 'B) Kirby' + '\n' + 'C) Metroid' + '\n' + 'D) Super Mario Bros')).toLowerCase()
switch(question3){
    case 'a':
        question3 = 3
        break
    case 'b':
        question3 = 2
        break
    case 'c':
        question3 = 2
        break
    case 'd':
        question3 = 4
        break
    default:
        question3 = 0
        break
}
alert('Por fim, a quarta pergunta XD')
question4 = String(prompt('4) Quais dos autores citados, representam melhor o gênero de livros de terror?' + '\n' + 'A) Stephen King' + '\n' + 'B) Edgar Allan Poe' + '\n' + 'C) H.P. Lovecraft' + '\n' + 'D) Mary Shelley')).toLowerCase()
switch(question4){
    case 'a':
        question4 = 4
        break
    case 'b':
        question4 = 2
        break
    case 'c':
        question4 = 3
        break
    case 'd':
        question4 = 4
        break
    default:
        question4 = 0
        break
}
x = question1 + question2 + question3 + question4
alert('-> Você obteve ' + question1 + ' pontos na primeira Quest'+ '\n' + '--> Obteve ' + question2 + ' pontos na segunda Quest' + '\n' + '--> Obteve ' + question3 + ' pontos na terceira Quest' + '\n' + '--> Obteve ' + question4 + ' pontos na quarta Quest')
alert('Você conseguiu ' + x + ' pontos no total! :)')
if(x >= 15){
    alert('WWWoooooww! Você conseguiu 15 pontos :ooo Incredible! :v lol')
}