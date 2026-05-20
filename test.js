const prompt = require('prompt-sync')();

const A = parseInt(prompt("Digite o valor de A: "));
const B = parseInt(prompt("Digite o valor de B: "));

let C;

if (A === B) {
    C = A + B;
} else {
    C = A * B;
}

console.log(`Resultado salvo em C: ${C}`);