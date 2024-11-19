
// 2) Criar um sistema para gerenciar projetos e valores de projetos, com HTML e JS. O sistema deve deve 
// seguir o layout anexo (imagem).
// O usuário deverá informar dados de 5 projeto (nome do projeto, valor cobrado por hora e quantidade de 
// horas previstas para concluir).
// Ao final devem ser mostrados:
// 1) O valor individual de cada projeto
// 2) O valor total dos projetos.

let elmntNomePj1 = document.getElementById("NomePj1")
let elmntValorPj1 = document.getElementById("ValorPj1")
let elmntQuantidadePj1 = document.getElementById("QuantidadePj1")
let a

let elmntNomePj2 = document.getElementById("NomePj2")
let elmntValorPj2 = document.getElementById("ValorPj2")
let elmntQuantidadePj2 = document.getElementById("QuantidadePj2")
let b

let elmntNomePj3 = document.getElementById("NomePj3")
let elmntValorPj3 = document.getElementById("ValorPj3")
let elmntQuantidadePj3 = document.getElementById("QuantidadePj3")
let c

let elmntNomePj4 = document.getElementById("NomePj4")
let elmntValorPj4 = document.getElementById("ValorPj4")
let elmntQuantidadePj4 = document.getElementById("QuantidadePj4")
let d

let elmntNomePj5 = document.getElementById("NomePj5")
let elmntValorPj5 = document.getElementById("ValorPj5")
let elmntQuantidadePj5 = document.getElementById("QuantidadePj5")
let e

function GerenciadorProjetos() {
    a = Number(elmntValorPj1.value) * Number(elmntQuantidadePj1.value)
    b = Number(elmntValorPj2.value) * Number(elmntQuantidadePj2.value)
    c = Number(elmntValorPj3.value) * Number(elmntQuantidadePj3.value)
    d = Number(elmntValorPj4.value) * Number(elmntQuantidadePj4.value)
    e = Number(elmntValorPj5.value) * Number(elmntQuantidadePj5.value)
    x = a + b + c + d + e
    alert("O primeiro projeto, de nome:" + elmntNomePj1.value + "custará, pelo valor e carga horária prevista: " + a)
    alert("O segundo projeto, de nome:" + elmntNomePj2.value + "custará, pelo valor e carga horária prevista: " + b)
    alert("O terceiro projeto, de nome:" + elmntNomePj3.value + "custará, pelo valor e carga horária prevista: " + c)
    alert("O quarto projeto, de nome:" + elmntNomePj4.value + "custará, pelo valor e carga horária prevista: " + d)
    alert("O quinto projeto, de nome:" + elmntNomePj5.value + "custará, pelo valor e carga horária prevista: " + e)
    alert("O valor total dos projetos será de: R$ " + x)

}