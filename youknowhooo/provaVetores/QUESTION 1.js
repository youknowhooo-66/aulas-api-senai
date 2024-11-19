// Um parque aquático recém inaugurou uma das suas mais incríveis atrações: ComboLoco, um toboágua gigante. Para organização das filas, resolveu separar em grupos de 10 pessoas por vez, onde as crianças tem preferência em relação aos adultos. Criar um sistema que simule essa fila. Deve-se perguntar o nome e a idade de cada uma das 10 pessoas, caso seja criança (menor que 12 anos) vai para o início da fila, caso não seja criança, vai para o final da fila. Ao final, mostrar a fila com os nomes.


let pessoas = []
let age
let nome
let x = true

for(i=0; i<10; i++){

 nome = prompt('Digite seu nome: ')
 age = Number(prompt('Digite sua idade: '))

    switch(x){
        case age <= 12 :
        pessoas.unshift(nome,age)
        alert('Crianças de até 12 anos, tem preferencia. Você está na fila! :DDDD')
        break

        case age > 12 :

        pessoas.push(nome,age)
        alert("Você está na fila de espera")
        break
    
    }
}
console.log(pessoas)