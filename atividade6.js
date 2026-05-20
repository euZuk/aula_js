function verificarSinalSemRetorno(numero) {
    if (numero > 0) {
        console.log("O valor é positivo");
    } else if (numero < 0) {
        console.log("O valor é negativo");
    } else {
        console.log("O valor é neutro");
    }
}

verificarSinalSemRetorno(5);