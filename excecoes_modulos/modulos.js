// utilizando mais de um arquivo no projeto

const prompt = require('prompt-sync')();
const operacao = require('./operacao');

let a = parseFloat(prompt('Digite um número: '));
let b = parseFloat(prompt('Digite outro número: '));

console.log(`A soma de ${a} + ${b} = ${operacao.soma(a,b)}`);
console.log(`A subtracao ${a} - ${b} = ${operacao.subtracao(a, b)} `)