let vetorNumeros = []
let add, maior
let Multiplicacao, somaMultiplicacao = 0

for(i=0;i<5;i++){
add = Number(prompt('Digite um número: '))
vetorNumeros.push(add)
if(i==0){
    maior = add

}else{

if(add > maior){
        maior = add
    }
}

}
for(i=0;i=vetorNumeros.length;i++){

if(vetorNumeros[i] != maior){

Multiplicacao = vetorNumeros[i] * maior
somaMultiplicacao += Multiplicacao
}

}
alert