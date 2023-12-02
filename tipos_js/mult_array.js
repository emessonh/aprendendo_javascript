// Array Multidimensional: um array dentro de outro

let estudantes = [['emesson', 20], ['maelton', 20], ['filipe', 22], ['lucas', 20]];
console.log(estudantes.length);

estudantes.forEach(alunos => {
    alunos.forEach(dados => {
        console.log(dados);
    });
});
