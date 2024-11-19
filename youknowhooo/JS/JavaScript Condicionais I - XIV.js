let hp = 100, hit, life, x = 0

hit = Number(prompt('Digite o valor do dano de ataque: '))

life = hp - hit

switch(x == 0){

    case life <= 20 && life > 0:
    alert('Game Over')
    break
    
    case life <= 50 && life > 20:
    alert('Dano crítico, quase sem vida!')
    break

    case life < 100 && life > 50:
    alert('Dano leve, vida boa!')
    break

}