function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute; // Transforma o chute que vem em forma de String em um número inteiro.

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor invalido</div>';
        return;
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido. Fale um número entre ${menorValor} e ${maiorValor}.</div>`;
        return;
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

if (numero === numeroSecreto) {
    document.body.innerHTML = `
    <h2>Você Acertou!</h2>
    <h3>O número secreto era ${numeroSecreto}!</h3>
    `;

    <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
} else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>`;
} else {
    elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>`;
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})