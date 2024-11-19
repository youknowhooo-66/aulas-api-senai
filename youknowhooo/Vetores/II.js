//                0 1 2 3 4 5
let listaNotas = [9,8,7,6,5,4]
let media, soma = 0
for(i=0; i < listaNotas.length; i++){
if(i > 1 && i < 5){
    soma += listaNotas[i]
    }
}
media = (Number(soma/4).toFixed(2))
alert('Notas: ' + listaNotas + '\n' + "Média de notas: " + media)