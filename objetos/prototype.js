// prototype é uma propriedade presente em todo e qualquer função ou objeto

// Em Javascript ela é usada adicionar métodos ou propriedades a um construtor

function Pessoa(nome){
    this.nome = nome

};

Pessoa.prototype.idade = 20;

let pessoa1 = new Pessoa('emesson');
let pessoa2 = new Pessoa('everaldo');

console.log(pessoa1.idade);
console.log(pessoa2.idade);

// muda a idade da pessoa 2
pessoa2.idade = 50;

console.log(pessoa2.idade);