let elmntPeso = document.getElementById("Peso")
let elmntAltura = document.getElementById("Altura")
let x = 0
function CalculadoraIMC() {
    
    IMC = Number(elmntPeso.value) / ( Number(elmntAltura.value) * Number(elmntAltura.value) )

    switch(x == 0){
    case IMC < 15:
    alert("Muito abaixo do Peso")
    break
    case IMC >= 15 && IMC < 18:
    alert("Abaixo do Peso")
    break
    case IMC >= 18 && IMC < 25:
    alert("Peso Adequado")
    break
    case IMC >= 25 && IMC < 28:
    alert("Acima do Peso")
    break
    case IMC >= 28:
    alert("Muito acima do Peso")
    break
    }
}