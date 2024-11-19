let trabalho
let idade
let x = 1

idade = Number(prompt('Digite sua idade: '))
trabalho = Number(prompt('Quantos anos de serviço prestados você possue? '))

switch(x == 1){

case idade >= 60:
    if(trabalho >= 25){
    alert('Você pode se aposentar')}
    else{
    alert('you dont..')}
case idade >= 65:
    if(trabalho >= 30){
    alert('Você pode se aposentar')}
    else{
    alert('you dont..')}
default:
    alert('Tá muito novo truta')
}