function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute; // Transforma o chute que vem em forma de String em um número inteiro.

    if (chuteForInvalido(numero)) {
        console.log('Valor invalido');
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        console.log(`Valor inválido. O número secreto precisa estar entre ${menorValor} e ${maiorValor}.`);
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}