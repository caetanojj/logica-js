const prompt = require("prompt-sync")();

//---------------EXERCÍCIO 1---------------//
function apresentar() {
    console.log("Bem vindo à aula de JavaScript")
}
apresentar(); apresentar()

//---------------EXERCÍCIO 2---------------//
function calcularAreaRetangulo(base, altura) {
    return base * altura
}
let area = calcularAreaRetangulo(5,3)
console.log(`O cálculo da área é: ${area}`)

//---------------EXERCÍCIO 3---------------//
function verificarParOuImpar(numero) {
    if(numero%2 === 0) {
        return "Par"
    }
    return "Ímpar"
}
console.log(verificarParOuImpar(4))
console.log(verificarParOuImpar(7))

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