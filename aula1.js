const prompt = require("prompt-sync")();

//---------------QUESTÃO 1---------------//
/*
Crie um programa que solicite ao usuário que digite um número e verifique se ele é par ou ímpar. 
O programa deve exibir uma mensagem informando se o número é par ou ímpar.

let numero = parseInt(prompt("Digite um número: "));

if(numero % 2 === 0) {
    console.log("O número é par.");
} else {
    console.log("O número é ímpar.");
}
*/


//---------------QUESTÃO 2---------------//

let numero1, numero2, numero3

numero1 = parseFloat(prompt("Digite o primeiro número: "));
numero2 = parseFloat(prompt("Digite o segundo número: "));
numero3 = parseFloat(prompt("Digite o terceiro número: "));

if(numero1 > numero2 && numero1 > numero3) {
    console.log("O maior número é: " + numero1);
} else if(numero2 > numero1 && numero2 > numero3) {
    console.log("O maior número é: " + numero2);
} else {
    console.log("O maior número é: " + numero3);
}
