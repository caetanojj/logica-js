const prompt = require("prompt-sync")()

//-------------SAUDAÇÃO-------------//
/*
function saudacao() {
    const nome = prompt("Digite seu nome: ")
    console.log(`Olá, ${nome}! Bem-vindo(a)!`)
}

saudacao()
*/

//-------------SAUDAÇÃO COM PARÂMETRO-------------//
/*
function saudacao(nome) {
    console.log(`Olá, ${nome}! Bem-vindo(a)!`)
}

saudacao("João")
*/

//-------------SAUDAÇÃO COM MULTIPARÂMETROS E RETORNO-------------//
/*
function somar(a, b) {
    console.log(`A soma de ${a} e ${b} é: ${a + b}`)
}

somar(3,5)
somar(3)
somar(3,5,7)
*/

//-------------SAUDAÇÃO COM PARÂMETROS UTILIZANDO RETURN-------------//

function somar(a, b) {
    return a + b;
}

let resultado = somar(3, 5);
console.log(`O resultado da soma é: ${resultado}`);