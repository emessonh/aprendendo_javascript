// Getters e Setters
// Métodos de acesso e alteração de propriedades

let person = {
    'nome': 'emesson',

    get getNome(){
        return this.nome;
    },

    set setNome(novo_nome){
        this.nome = novo_nome;
    }


};

// altera a propriedade
person.setNome = 'everaldo';

// acessa como uma propriedade e não como método
console.log(person.getNome);