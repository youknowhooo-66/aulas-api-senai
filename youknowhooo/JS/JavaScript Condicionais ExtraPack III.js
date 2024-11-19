let celiaco, lactose, nome
let foodI, foodII, foodIII
let yn1, yn2, yn3, yn4, yn5, yn6

nome = String(prompt('Digite seu nome: '))
celiaco = String(prompt('Digite se você é intolerante à gluten ("sim" ou "não"): ')).toLowerCase()
lactose = String(prompt('Digite se você é intolerante à lactose ("sim" ou "não"): ')).toLowerCase()

foodI = prompt('Agora digite o nome do primeiro alimento: ')
yn1 = prompt('Esse alimento contém glúten?("sim" ou "não"): ').toLowerCase()
yn2 = prompt('Esse alimento contém lactose?("sim" ou "não"): ').toLowerCase()

foodII = prompt('Agora digite o nome do segundo alimento: ')
yn3 = prompt('Esse alimento contém glúten?("sim" ou "não"): ').toLowerCase()
yn4 = prompt('Esse alimento contém lactose?("sim" ou "não"): ').toLowerCase()

foodIII = prompt('Agora digite o nome do terceiro alimento: ')
yn5 = prompt('Esse alimento contém glúten?("sim" ou "não"): ').toLowerCase()
yn6 = prompt('Esse alimento contém lactose?("sim" ou "não"): ').toLowerCase()

if(yn1 == 'não' && yn2 == 'não' && yn3 == 'não' && yn4 == 'não' && yn5 == 'não' && yn6 == 'não'){

alert('Dieta adequada')

}else{

alert('Dieta inadequada, contém alimentos aos quais você é intolerante!')

}
