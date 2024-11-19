let age, x = 1

age = Number(prompt('Digite sua idade: '))

switch(x == 1){

case age > 4 && age < 8:
alert('Infantil A')
break

case age >= 8 && age <= 10:
alert('Infantil B')
break

case age > 10 && age < 14:
alert('Juvenil A')
break

case age >= 14 && age < 18:
alert('Juvenil B')
break

case age >= 18:   
alert('Senior')
break

}

