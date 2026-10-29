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

function saudacao(nome) {
    console.log(`Olá, ${nome}! Bem-vindo(a)!`)
}

saudacao("João")