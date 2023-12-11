// construtor: utilizado quando se quer mais de uma instância do objeto

function Pessoa(nome, idade){
    this.nome = nome,
    this.idade = idade
}

let pessoa1 = new Pessoa('emesson', 20)
let pessoa2 = new Pessoa('everaldo', 50)

console.log(`Olá, meu nome é ${pessoa1.nome} e eu tenho ${pessoa1.idade}`)
console.log(`Olá, meu nome é ${pessoa2.nome} e eu tenho ${pessoa2.idade}`)