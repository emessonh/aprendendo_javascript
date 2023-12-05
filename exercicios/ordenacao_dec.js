let prompt = require('prompt-sync')();
let numeros = [];

for (let c = 0; c<3; c++){
    let n = parseInt(prompt('Digite um número: '));
    numeros.push(n);
}

numeros.sort();
numeros.reverse();

numeros.forEach(numero =>{
    console.log(numero);
});