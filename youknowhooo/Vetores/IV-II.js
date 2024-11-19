let vetorNumeros = []
let numeroAdd, quantidadeNumeros = 6
let vetorPalindromo = true
let j = 5

for(i=0; i < quantidadeNumeros; i++){

    numeroAdd = Number(prompt('Digite um número: '))
    vetorNumeros.push(numeroAdd)

}

for(i=0 ; i < 3; i++){

	if(vetorNumeros[i] != vetorNumeros[j]){

        vetorPalindromo = false

    }

	j--

}

if(vetorPalindromo == false){

    alert(`Vetor ${vetorNumeros} não é palíndromo!`)

}else{

    alert(`Vetor ${vetorNumeros} é palíndromo!`)

}