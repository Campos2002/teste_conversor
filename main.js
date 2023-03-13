

const tempImput = document.querySelector('#input');
const resposta = document.querySelector('.resposta');
const botao = document.querySelector('#btn');

botao.addEventListener('click', exibe);

function converte() {
    const temp = parseFloat(tempImput.value);
    const celsius = (temp - 32) / 1.8;
    return celsius.toFixed(0);
};

function exibe() {
    resposta.innerHTML = `${converte()}°C`;
};
