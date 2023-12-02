// array: coleção de valores
// Em JavaScript é um objeto

    /**
     * declaração
     * 
     * 1 - array literal "[]"
     * 
     * const array = [];
     * 
     * 2 - usando palavra chave "new"
     * 
     * const array = new Array();
     * 
     */

    // obs: é recomendado utilizar o array literal

    /**
     * Ex's:
     * 
     * // empty array
        const myList = [ ];

        // array of numbers
        const numberArray = [ 2, 4, 6, 8];

        // array of strings
        const stringArray = [ 'eat', 'work', 'sleep'];

        // array with mixed data types
        const newData = ['work', 'exercise', 1, true];

        const newData = [
        {'task1': 'exercise'},
        [1, 2 ,3],
        function hello() { console.log('hello')}
        ];
     */

    // 1 - acessando valores

    // nomeArray[index]

    // 2 - adicionando elementos no array

    // métodos: push() e unshift(), adiciona ao final e início do array respectivamente

    // nomeArray.push(valor); nomeArray.unshift(valor)
    // nomeArray.key = novoValor; Essa key será o index para recuperar o valor

    let array = ['h', 'e'];
    array.nome = 'emesson';
    console.log(array.nome)
    console.log(array)
    console.log(array.length);

    // 3 - mudar elementos do array

    // nomeArray[index] = novo valor

    // obs: caso o index não seja o próximo na contagem do array os valores entre o novo valor e o penúltimo
    // são preenchidos com undefined

    // 4 - remover elemento

    // nomeArray.pop(); remove e retorna o último valor do array
    // nomeArray.shift(); remove e retorna o primeiro valor do array

    // 5 - tamanho da coleção

    // nomeArray.length; propriedade