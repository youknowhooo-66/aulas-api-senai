let vetorPets = []

let objPet = {

    nome: 'Anakin',
    tipo: 'Gato',
    idade: '3 meses',
    possuiRaiva: false

}
pets.push(objPet)
localStorage.setItem('petsSalvos', JSON.stringify(vetorPets))