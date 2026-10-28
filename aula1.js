const prompt = require("prompt-sync")();

//---------------QUESTÃO 1---------------//
/*
let numero = Number(prompt("Digite um número: "));

  if(isNaN(numero)) {
    console.log("O valor digitado não é um número válido.");
} else if(numero % 2 === 0) {
    console.log("O número é par.");
} else {
    console.log("O número é ímpar.");
}
*/

//---------------QUESTÃO 2---------------//
/*
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
*/

//---------------QUESTÃO 3---------------//
/*
let n = Number(prompt("Digite um número N: "));

for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
*/

//---------------QUESTÃO 4---------------//
let n = Number(prompt("Digite um número N: "));

let soma = 0;
let i = 1;

while (i <= n) {
    soma = soma + i;
    i++;
}

console.log("A soma dos números de 1 a " + n + " é: " + soma);