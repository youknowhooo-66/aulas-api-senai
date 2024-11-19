let pipoca = document.getElementById("Pipoca")
let chocolate = document.getElementById("Chocolate")
let refrigerante = document.getElementById("Refrigerante")
let valor = document.getElementById("Status")
let x = 0

function Cinema(){

x = (Number(pipoca.value) * 6) + (Number(chocolate.value) * 3) + (Number(refrigerante.value) * 8.5)
alert(x)
}