let vetorPalavra = []
let palavraAdd, j
let vetorPalindromo = true

palavraAdd = prompt('Digite um palavra: ')
vetorPalavra = palavraAdd.split('')
tamanhoVetor = vetorPalavra.length

for(i=0; i < tamanhoVetor; i++){

    if(vetorPalavra[i] == ' '){

        vetorPalavra.splice(i, 1)

    }

}
alert(vetorPalavra)

j = vetorPalavra.length-1

for(i=0 ; i < vetorPalavra.length/2; i++){

	if(vetorPalavra[i] != vetorPalavra[j]){

        vetorPalindromo = false

    }

	j--

}

if(vetorPalindromo == false){

    alert(`Palavra ${palavraAdd} não é palíndromo!`)

}else{

    alert(`Palavra ${palavraAdd} é palíndromo!`)

}