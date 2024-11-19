let num
let par = false
let contador = 0, totalContador = 5
let somaPares, somaImpares

while(contador < totalContador){
    
    num = Number(prompt('Digite um número: '))
    
    for (let i = 0; i < num; i++){

        if(num % 2 == 0){
        
        par = true


        }else if(par){

        somaPares += num

        }else{

        somaImpares += num
        }

    }

    contador++
}
alert('A soma dos números pares é: ' + somaPares)
alert('A soma dos números ímpares é: ' + somaImpares)