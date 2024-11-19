// LISTA 1 RAFAEL
// Quadrado dos números de 1-10
for (let num = 1; num <= 10; num++) {
    const quadrado = num ** 2
    console.log(`O quadrado de ${num} é ${quadrado}`)
}
// Número de 10-1 em ordem decrescente
for (let i = 10; i >= 1; i--) {
    console.log(i)
}
// Soma dos números de 1-100
let soma = 0
for (let i = 1; i <= 100; i++) {
    soma += i
}
    console.log(`A soma dos números de 1 a 100 é: ${soma}`)
// Tábuada do número 5
let numero = 5
for (let i = 1; i <= 10; i++) {
    const resultado = numero * i
    tabuada += `${numero} x ${i} = ${resultado}\n`
}
console.log(tabuada)
// Tábuada de um número aleatório
let tabuada = ''
c = Number(prompt('Digite um número: '))
for (let i = 1; i <= 10; i++) {
    const result = c * i
    tabuada += `${c} x ${i} = ${result}\n`
}
console.log(tabuada)
// Números ímpares de 1 a 20
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}
// Ordem crescente
for (let i = 1; i <= 10; i++) {
    console.log(i)
}
// Ordem decrescente
for (let i = 10; i >= 1; i--) {
    console.log(i)
}
// Número fatorial
let result = 1
v = Number(prompt('Digite um número: '))
for (let i = 1; i <= v; i++) {
    result *= i
}
console.log(`O fatorial de ${v} é ${result}.`)
// Números de 1 a 100, substituindo os múltiplos de 3 por "Fizz", os múltiplos de 5 por "Buzz" e os múltiplos de ambos por "FizzBuzz"
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    } else if (i % 3 === 0) {
        console.log("Fizz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    }
}
// Calcule dos valores da série: 1 + 1/2 + 1/3 + ... + 1/10
let h = 0
for (let i = 1; i <= 10; i++) {
    h += 1 / i
}

console.log(`O valor da série é: ${h}`)
// Conte quantos números pares e ímpares existem de 1 até <um número fornecido pelo usuário>
let numerosPares = 0, numerosImpares = 0
num = Number(prompt('Digite um número: '))
for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
        numerosPares++;
    } else {
        numerosImpares++;
    }
}
console.log(`Quantidade de números pares: ${numerosPares}`)
console.log(`Quantidade de números ímpares: ${numerosImpares}`)
// Dada uma lista de números, encontre o maior e o menor valor
const x = [1, 382, 3, 123, 44, 0.9, 12]
const min = Math.min(...x);
const max = Math.max(...x);
console.log(min); // 0.9
console.log(max); // 382
// Faça um programa que calcule a média de uma lista de números
var nota1 = +prompt("Informe a primeira nota do aluno:") // O sinal de "+" converte o valor para número
var nota2 = +prompt("Informe a segunda nota:")
var media = (nota1 + nota2) / 2
alert("A média do aluno é: " + media)
// Dado um número, verifique se ele é primo
var divisores = 0;
y = Number(prompt("Digite um número: "))
for (let count = 1; count <= y; count++) {
    if (y % count === 0) {
        divisores++;
    }
}

if (divisores === 2) {
    console.log("O número " + y + " é primo.");
} else {
    console.log("O número " + y + " não é primo.");
}
// Imprima os números primos de 1 a 50
for (let i = 1; i <= 50; i++) {
    let isPrimo = true;
    if (i > 1) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrimo = false;
                break;
            }
        }
    } else {
        isPrimo = false;
    }
    if (isPrimo) {
        console.log(i);
    }
}