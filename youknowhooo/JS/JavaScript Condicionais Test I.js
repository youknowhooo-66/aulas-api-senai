let nome, idade, job, city

alert('CETAS (Centro de Triagem de Animais Silvestres)')
alert('Sistema de validação de viabilidade do requerente, ao processo seletivo de integrantes')

nome = String(prompt('Digite seu nome: ')).toLowerCase()
idade = Number(prompt('Digite agora sua idade: ')).toLowerCase()
job = String(prompt('Agora escreva sua área de atuação: ')).toLowerCase()
city = String(prompt('Digite o nome da cidade onde você mora: ')).toLowerCase()

if(idade >= 25 && idade <= 50){
  if(job == 'biologia' || job == 'ecologia'){
    if(city == 'florianópolis'){
        alert('Você ' + nome + ' está apto a concorrer para uma vaga na equipe de resgate! :)')
    }
  }
}
if(idade >= 22 && idade <= 60 && job == 'veterinária' && city == 'florianópolis'){
 alert('Você ' + nome + ' está apto a concorrer para uma vaga na equipe de tratamento! :)')
}
if(city != 'florianópolis' || job != 'veterinária' && job != 'ecologia' && job != 'biologia' || idade < 22 && idade > 60){
 alert('Você não está apto a concorrer. :(')
}