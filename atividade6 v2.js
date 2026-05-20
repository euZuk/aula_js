function verificarSinalComRetorno(numero) {
    if (numero > 0) {
        return "positivo";
    } else if (numero < 0) {
        return "negativo";
    } else {
        return "neutro";
    }
}

console.log(`O valor é ${verificarSinalComRetorno(12)}`);