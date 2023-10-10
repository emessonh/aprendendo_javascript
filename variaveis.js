let n = 5;
console.log(n);

/** 1. Nomes de variveis sempre devem começar com letras ou underline ou cifrão 
 *  2. A linguagem é case sensitive
 *  3. Não é possível usar palavras chaves como nomes de variáveis
 *  4. Por conveção utiliza-se camelCase como padrão para nome de variável em JavaScript
*/

const pi = 3.14;

/**
 * Variáveis definidas como constantes não podem ser mudadas
 * Não é possível declarar uma constante sem inicializá-la
 * Recurso disponível a partir do ecmascript6
 */

let numero = -3/0;
console.log(numero)

/**
 * O JavaScript é uma linguagem dinamicamente tipada
 * Tipos de dados em JavaScript:
 * Primitivos:
    * 1. String: 
    *       Obs: Para formatar uma string utiliza-se
    *       `${}`
    * 2. Number: engloba inteiros e reais
    *       Pode assumir valores inteiros, reais,
    *       Infinity, -Infinity e NaN
    * 3. BigInt: inteiro muito grande, entre (2^53)-1 e -(2^53)-1
    *       Obs: para utilizar um número como BigInt basta adicionar n ao final
    *       do valor
    * 4. Boolean
    * 5. undefined: usado quando um variável não foi
    * inicializada;
    * 6. null: valor nulo/vazio
    * 7. Symbol: torna um valor único
* Não primitivo:
    1. Object: coleção de dados formado por chave: valor{}

typeof(valor) -> Retorna o tipo do dado passado
 *  
 */

let valor1 = Symbol('hello world');
let valor2 = Symbol('hello world');
console.log(valor1==valor2);
