const vetorNomes = ['Marta', 'José', 'Maria']

console.log('Exibindo todos os elementos:')
console.log(vetorNomes)

console.log('\nExibindo o primeiro elemento: ')
console.log(vetorNomes[0])

console.log('\nAdicionando um elemento no final do vetor: ')
vetorNomes.push('Mariana')
console.log(vetorNomes)

console.log('\nAdicionando um elemento no início do vetor: ')
vetorNomes.unshift('Fabiana')
console.log(vetorNomes)

console.log('\nRemovendo um elemento no início do vetor: ')
vetorNomes.shift()
console.log(vetorNomes)

console.log('\nRemovendo um elemento no final do vetor: ')
vetorNomes.pop()
console.log(vetorNomes)

console.log('\nLaço de repetição para percorrer todo o vetor: ')
console.log('Indice: Nome')
vetorNomes.forEach((nome, index) => {
    console.log(`${index}: ${nome}`)
})