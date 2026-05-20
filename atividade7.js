const vetorNumeros = [12, 7, 4, 23, 8, 15]; 

let quantidadePares = 0;
let quantidadeImpares = 0;

console.log('Exibindo todos os elementos do vetor:');
console.log(vetorNumeros);

console.log('\nPercorrendo o vetor e analisando os números:');


vetorNumeros.forEach((numero) => {
    if (numero % 2 === 0) {
        quantidadePares++;
    } else {
        quantidadeImpares++;
    }
});


console.log('--- Resultado Final ---');
console.log(`Quantidade de números pares: ${quantidadePares}`);
console.log(`Quantidade de números ímpares: ${quantidadeImpares}`);