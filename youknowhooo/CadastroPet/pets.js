

let elmntNome = document.getElementById('nome')
let elmntRaca = document.getElementById('raca')
let elmntIdade = document.getElementById('idade')

let vtrPets = []
let objPet = {

nomePet: '',
racaPet: '',
idadePet: 0

}

function Cadastrar(){
    
    vtrPets = JSON.parse(localStorage.getItem('petsSalvos'))
    alert(vtrPets)

    if(vtrPets == null){
        vtrPets = []
        CadastraPet()
    }else{
        CadastraPet()
    }
    
    function CadastraPet(){
        
        objPet = {}
    
        objPet.nomePet = elmntNome.value
        objPet.racaPet = elmntRaca.value
        objPet.idadePet = Number(elmntIdade.value)
    
        vtrPets.push(objPet)
        localStorage.setItem('petsSalvos', JSON.stringify(vtrPets))
        alert('Suas informações foram salvas')
    }   
        
}