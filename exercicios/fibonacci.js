// calcular sequência fibonacci

const prompt = require('prompt-sync')();

function seqFibonacci(n){
    let predecessores = [0, 1];
    let num_fibonacci = 0;
    if (n > 2){
        for (let c = 2; c < n; c++){
            num_fibonacci = predecessores[0] + predecessores[1]
            let predecessor_1 = predecessores[1];
            predecessores[1] = num_fibonacci;
            predecessores[0] = predecessor_1;
        }
        return num_fibonacci;
    }
    else if (n==1 || n==2){
        if (n==1){
            return predecessores[0];
        }
        else{
            return predecessores[1];
        }
    }
    else{
        return undefined;
    }
    
}


let n = parseInt(prompt('Digite o n-ésimo número da sequência fibonacci: '));
let num_fibonacci = seqFibonacci(n);
if (num_fibonacci == undefined){
    console.log(`Não foi possível encontrar um número da sequência para o ${n}`);
}
else{
    console.log(`O ${n}º número da sequência fibonacci é ${num_fibonacci}`);
}



