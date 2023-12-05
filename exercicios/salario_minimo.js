const prompt = require('prompt-sync')();

function qtd_salarios_minimos(sal){
    let salario_minimo = 1293.20;
    let qtd_salario = sal / salario_minimo;
    return qtd_salario;
}

let salario = parseInt(prompt('Digite o salário: '));
let resultado = qtd_salarios_minimos(salario);
console.log(`Você recebe ${resultado.toFixed(1)} salários mínimos`);

