// Seleciona o elemento <h1> da página
let titulo = document.querySelector("h1");

// Altera o conteúdo do <h1> para "Hora do Desafio"
titulo.innerHTML = "Hora do Desafio";

// Função que será chamada ao clicar no botão Console
// Exibe a mensagem no console do navegador
function exibirMensagemNoConsole() {
    console.log('O botão foi clicado!');
}

// Função que será chamada ao clicar no botão Alerta
// Mostra um alerta com a mensagem "Eu amo comida"
function exibirAlerta() {
    alert('Eu amo comida');
}

// Função que será chamada ao clicar no botão Prompt
// Pergunta o nome de uma cidade e exibe um alerta com a cidade informada
function exibirPrompt() {
    let nomeDaCidade = prompt('Digite o nome de uma cidade do Brasil que você gosta muito:');
    alert(`Estive em ${nomeDaCidade} e lembrei de você`);
}

// Função que será chamada ao clicar no botão Soma
// Solicita dois números, realiza a soma e exibe o resultado em um alerta
function somandoDoisNumeros() {
    let primeiroNumero = parseInt(prompt('Digite o primeiro número'));
    let segundoNumero = parseInt(prompt('Digite o segundo número'));
    let resultado = primeiroNumero + segundoNumero;
    alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`);
}
