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

function menosIrmaos(alunos, qtd_irmaos_alunos){
    let alunos_menos_irmaos = [];
    let menor_qtd_irmaos = qtd_irmaos_alunos[0];
    let c = 0;
    while (c < qtd_irmaos_alunos.length){
        if (qtd_irmaos_alunos[c] < menor_qtd_irmaos){
            menor_qtd_irmaos = qtd_irmaos_alunos[c];
        }
        c++;
    }

    let i = 0;
    while (i < qtd_irmaos_alunos.length){
        if (qtd_irmaos_alunos[i] == menor_qtd_irmaos){
            alunos_menos_irmaos.push(alunos[i]);
        }
        i++;
    }
    return alunos_menos_irmaos;
}

function mediaIrmaosClasse(qtd_irmaos_alunos){
    let soma_irmaos = 0; 
    for (let qtd_irmaos of qtd_irmaos_alunos){
        soma_irmaos += qtd_irmaos;
    }
    let media = soma_irmaos / qtd_irmaos_alunos.length;
    return media;
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
console.log('========================================');
if (alunos_mais_irmaos.length == 1){
    console.log(`O aluno com mais irmãos é ${alunos_mais_irmaos[0]}`);
}
else{
    console.log('Os alunos com mais irmãos são: ');
    for (let aluno of alunos_mais_irmaos){
        console.log(aluno);
    }
}
console.log('========================================\n');

console.log('========================================');
let alunos_menos_irmaos = menosIrmaos(alunos, qtd_irmaos_alunos);
if (alunos_menos_irmaos.length == 1){
    console.log(`O aluno com menos irmãos é ${alunos_menos_irmaos[0]}`)
}
else{
    console.log('Os alunos com menos irmãos são: ');
    for (let aluno of alunos_menos_irmaos){
        console.log(aluno);
    }
}
console.log('========================================\n');

console.log('========================================');
let media_irmaos_turma = mediaIrmaosClasse(qtd_irmaos_alunos);
console.log(`A média de irmãos da turma é ${media_irmaos_turma}`);
console.log('========================================');