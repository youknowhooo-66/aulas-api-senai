let elmntEntradaUm = document.getElementById("EntradaUm")
let elmntEntradaDois = document.getElementById("EntradaDois")

function VerificadorSenha() {
    
    if(elmntEntradaDois.value == elmntEntradaUm.value){
        alert("Suas senhas estão coincidindo ")
    }else{
        alert("Suas senhas não estão coincidindo ")
    }

}