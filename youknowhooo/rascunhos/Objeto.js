let CadastroUsers = [{
    user: '',
    idade: '',
    telefone: '',
    endereco: '',
    email: ''
}]

for(i=0; i<CadastroUsers.length; i++){

if(CadastroUsers[i].user == ){

}
}

let pet = {

    nome: 'Anakin',
    tipo: 'Gato',
    idade: '3 meses',
    possuiRaiva: false

}
pet.nome = 'Anakin Skywalker'
pet.raca = 'SRD'
delete pet.idade
alert(Object.values(pet))
alert(Object.entries(pet))
alert(Object.keys(pet))
localStorage.setItem('PetSalvo', JSON.stringify(pet))