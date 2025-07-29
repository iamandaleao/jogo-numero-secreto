// Função que exibe "Olá, mundo!" no console
function exibirOla() {
  console.log("Olá, mundo!");
}

exibirOla(); // Chamada da função


// Função que recebe um nome e exibe "Olá, [nome]!" no console
function exibirOlaNome(nome) {
  console.log(`Olá, ${nome}!`);
}

exibirOlaNome("Amanda"); // Chamada da função com parâmetro "Amanda"


// Função que recebe um número e retorna o dobro dele
function calcularDobro(numero) {
  return numero * 2;
}

let resultadoDobro = calcularDobro(5); // Chamada da função com 5
console.log(resultadoDobro); // Exibe 10


// Função que calcula a média de três números
function calcularMedia(a, b, c) {
  return (a + b + c) / 3;
}

let media = calcularMedia(4, 7, 10); // Chamada com 4, 7 e 10
console.log(media); // Exibe 7


// Função que retorna o maior entre dois números
function encontrarMaior(a, b) {
  return a > b ? a : b; // Operador ternário
}

let maiorNumero = encontrarMaior(15, 9); // Chamada com 15 e 9
console.log(maiorNumero); // Exibe 15


// Função que retorna o quadrado de um número (número vezes ele mesmo)
function quadrado(numero) {
  return numero * numero;
}

let resultado = quadrado(2); // Chamada com 2
console.log(resultado); // Exibe 4
