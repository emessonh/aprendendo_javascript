// estrutura basica funções

/**
 * function nomeFuncao(argumentos){
 *      bloco de codigo
 *      return (opcional) 
 * }
 */

// obs: caso não haja um retorno para a função isso retornará um undefined

// chamada de função

    // nomeFuncao(args);

// função anônima

const prompt = require('prompt-sync')();
let soma = function soma (a,b) { return a+b }; // soma recebe uma expressão (função)
let a = parseFloat(prompt('Digite um número: '));
let b = parseFloat(prompt('Digite outro número: '));
let resultado = soma(a,b); // resultado chama essa função anônima
console.log(`A soma de ${a} + ${b} = ${resultado}`);
