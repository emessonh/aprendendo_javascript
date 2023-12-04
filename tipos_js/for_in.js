// Semelhante ao forEach

/**
 * Estrutura básica
 * 
 * for (key in object){
 *      bloco de código
 * }
 */

let pessoa = {
    'nome': 'Emesson',
    'idade': 20,
    'sexo': 'Masculino'
};

for (key in pessoa) {
    console.log(`${key} => ${pessoa[key]}`);
}

let mens = 'Hello World';
for (let letra of mens){
    console.log(letra);
}

