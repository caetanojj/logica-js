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
/*
function somar(a, b) {
    return a + b;
}

let resultado = somar(3, 5);
console.log(`O resultado da soma é: ${resultado}`);
*/

//-------------FUNÇÃO PARA VERIFICAR IDADE-------------//
/*
function verificarIdade(idade) {
    if(idade<0) {
        return "Idade inválida";
    }  
    return "Idade válida"
}

console.log(verificarIdade(-5)) // Idade inválida
console.log(verificarIdade(20)) // Idade válida
*/

//-------------EXPLICAÇÃO ESCOPOS DE VARIÁVEIS-------------//

function exemplo() {
    let mensagem = "Olá, mundo!"
    console.log(mensagem)
}

exemplo()
console.log(mensagem)