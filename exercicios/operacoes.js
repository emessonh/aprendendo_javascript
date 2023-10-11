let userInput = process.argv[2]; // Necessário passar os argumentos ao executar via node.js
let userInput2 = process.argv[3];
console.log(`${userInput} + ${userInput2} = ${Number(userInput)+Number(userInput2)}`);
console.log(`${userInput} - ${userInput2} = ${Number(userInput)-Number(userInput2)}`);
console.log(`${userInput} x ${userInput2} = ${Number(userInput)*Number(userInput2)}`);
console.log(`${userInput} / ${userInput2} = ${Number(userInput)/Number(userInput2)}`);


