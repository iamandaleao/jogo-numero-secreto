function calculaIMC(alturaMetros, peso) {
  let imc = peso / (alturaMetros * alturaMetros);
  console.log(`IMC: ${imc.toFixed(2)}`);
}

function calcularFatorial(numero) {
  if (numero === 0 || numero === 1) {
    console.log(`O fatorial de ${numero} é 1`);
    return;
  }

  let fatorial = 1;
  for (let i = 2; i <= numero; i++) {
    fatorial *= i;
  }

  console.log(`O fatorial de ${numero} é ${fatorial}`);
}

function converterDolarParaReal(valorEmDolar) {
  let cotacaoDolar = 4.80;
  let valorEmReais = valorEmDolar * cotacaoDolar;
  console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReais.toFixed(2)}`);
}

function calcularAreaPerimetroSalaRetangular(altura, largura) {
  let area = altura * largura;
  let perimetro = 2 * (altura + largura);
  
  console.log(`Área da sala: ${area} metros quadrados`);
  console.log(`Perímetro da sala: ${perimetro} metros`);
}

function calcularAreaPerimetroSalaCircular(raio) {
  let pi = 3.14;
  let area = pi * raio * raio;
  let perimetro = 2 * pi * raio;
  
  console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
  console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
}

function mostrarTabuada(numero) {
  console.log(`Tabuada do ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  }
}
