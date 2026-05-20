function verificarParOuImparComRetorno(numero) {
    if (numero % 2 === 0) {
        return "O número é par";
    } else {
        return "O número é ímpar";
    }
}


console.log(verificarParOuImparComRetorno(10));