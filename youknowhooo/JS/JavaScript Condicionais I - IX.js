let x = 11111111111111, y = 1111, initialBalance = 1000, finalBalance, n

x = Number(prompt('Digite o número da sua conta-bancária: '))
y = Number(prompt('Agora digite o número do tipo de operação que gostarias de realizar: ' + '\n' + '1) Saldo' + '\n' + '2) Depósito' + '\n' + '3) Saque' ))

switch(y){

    case 1:
    
    alert('Você gostaria de ver seu saldo?')
    alert('Seu saldo é de: ' + initialBalance)
    break
    
    case 2:

    n = String(prompt('Que quantia gostaria de depositar?'))
    alert('Você digitou: ' + n)
    if(n > 0){
        finalBalance = initialBalance + n}
        alert('Você está depositando: ' + finalBalance) 
    break
    
    case 3:

    n = String(prompt('Que quantidade gostaria de sacar?'))
    alert('Você digitou: ' + n)
        if(n < initialBalance){
        finalBalance = initialBalance - n}else{
            alert('Não é possivel realizar essa operação por falta de saldo')
        }
    alert('Você está sacando: ' + finalBalance)
    break
    
    default:
    alert('Essa não é uma opção')
    break

}