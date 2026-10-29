const prompt = require("prompt-sync")();

//---------------EXERCÍCIO 1---------------//
function apresentar() {
    console.log("Bem vindo à aula de JavaScript")
}
apresentar(); apresentar()

//---------------EXERCÍCIO 2---------------//
function calcularAreaRetangulo(base, altura) {
    console.log(`O cálculo de área de ${base} e ${altura} é: ${base * altura}`)
}

calcularAreaRetangulo(5, 3)

//---------------EXERCÍCIO 3---------------//
function verificarParOuImpar(numero) {
    if(numero%2 === 0) {
        console.log(`O número ${numero} é par`)
    } else {
        console.log(`O número ${numero} é ímpar`)
    }
}
verificarParOuImpar(4)
verificarParOuImpar(7)

//---------------EXERCÍCIO 4---------------//
// ANALÍSE O CÓDIGO ABAIXO E RESPONDA: QUAL SERÁ A SAÍDA NO CONSOLE? EXPLIQUE O MOTIVO.
let mensagem = "Global"
function teste() {
    let mensagem = "Local"
    console.log(mensagem)
}
teste()
console.log(mensagem)

/* Resposta: A saída no console será "Global", pois a variável mensagem é global e não é afetada pela variável local dentro da função teste */