function maisIrmaos(alunos, qtd_irmaos_alunos){
    let mais_irmaos= [];
    let maior_qtd_irmaos = qtd_irmaos_alunos[0];
    let c = 0;
    while (c < qtd_irmaos_alunos.length){
        if (qtd_irmaos_alunos[c] > maior_qtd_irmaos){
            maior_qtd_irmaos = qtd_irmaos_alunos[c];
        }
        c++;
    }

    let i = 0;
    while (i < qtd_irmaos_alunos.length){
        if (qtd_irmaos_alunos[i] == maior_qtd_irmaos){
            mais_irmaos.push(alunos[i]);
        }
        i++;
    }
    return mais_irmaos;
}

const prompt = require('prompt-sync')();
let alunos = [];
let qtd_irmaos_alunos = [];
let qtd_alunos = parseInt(prompt('Digite a quantidade de alunos da turma: '));
let c = 1;
while (c <= qtd_alunos){
    let aluno = prompt(`Digite o nome do ${c}º aluno: `);
    alunos.push(aluno);
    let qtd_irmaos = parseInt(prompt(`Digite a quantidade de irmãos de ${aluno}: `));
    qtd_irmaos_alunos.push(qtd_irmaos);
    c++;
}

let alunos_mais_irmaos = maisIrmaos(alunos, qtd_irmaos_alunos);
if (alunos_mais_irmaos.length == 1){
    console.log(`O aluno com mais irmãos é ${alunos_mais_irmaos[0]}`);
}
else{
    console.log('Os alunos com mais irmãos são: ');
    for (let aluno of alunos_mais_irmaos){
        console.log(aluno);
    }
}



