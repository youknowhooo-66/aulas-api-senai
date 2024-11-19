
let pessoas = []
let filaEspera = ''

for(i=0; i<6; i++){

    filaEspera = String(prompt("Escolha uma das opções: " + "\n" + "A) Entrar na fila lotérica" + "\n" + "B) Sair do lobby" ))
    switch(filaEspera){
        case "A":
        pessoas.push(prompt("Digite seu nome: "))
        alert("Você está na fila de espera")
        break

        case "B":
        alert("Você saiu do lobby")
        break
    
    }
}