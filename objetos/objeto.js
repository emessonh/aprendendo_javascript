// Objeto em Javascript: objeto literal
// usado quando se quer apenas uma instância desse objeto

let pessoa = {
    'nome': 'Emesson',       // propriedades: composto por chave e valor
    'idade': 20
};

// objetos aninhados

let estudante = {
    'nome': 'Emesson',
    'matricula': 2022005052,
    'materias': {
        'IHC': 'Interação Humano Computador',
        'PROO': 'Programação Orientada a Objetos'
    }
};

console.log(`A materia IHC é ${estudante.materias.IHC}`);

// métodos

let materia = {
    'IHC': function (){ console.log('A materia de IHC é para melhorar os sistemas')}
};

materia.IHC();
// retorna a definição da função
console.log(materia.IHC);

// cláusula this

// é igual ao self do python, referindo-se ao próprio objeto 

