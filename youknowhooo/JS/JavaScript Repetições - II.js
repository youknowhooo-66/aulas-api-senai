let numero = 0, divisor = 0
let primo = true
let contador = 0


  while(contador < 5){
    numero = Number(prompt('Digite um número inteiro: '))
    primo = true
            while (divisor <= numero){
                if (divisor > 1 && divisor < numero){
                if (numero % divisor === 0){
                  primo = false
            }      
        }
        divisor++
    }
           if (primo == false || numero == 1){
            alert(numero + " não é um número primo.")
         } else {
            alert(numero + " é um número primo.")
    }
        contador++
}