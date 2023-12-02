// recursao: quando a função chama ela mesma


// fatorial
const prompt = require('prompt-sync')();

function fatorial(n){
    if (n == 1){
        return n;
    }
    else{
        return n * fatorial(n-1)
    }
}

/**
 * 5*4*3*2*1
 * 
 *  5 * fatorial() = 5 * 24
 *  4 * fatorial() = 4 * 6
 *  3 * fatorial() = 3 * 2
 *  2 * fatorial() = 2 * 1
 *  return 1
 */

let n = parseInt(prompt('Digite um número: '));
console.log(typeof(n));
let fat = fatorial(n);
console.log(`O fatorial de ${n} = ${fat}`);