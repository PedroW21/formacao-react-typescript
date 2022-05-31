/* Troca Titulo */
let title = document.querySelector(".header-title");
title.textContent = "Aparecida Nutricionista";

// .textContent retorna (e possibilita a manipulação) o conteudo do h1 e não o elemento

/* Calcula IMC */

var imc = (pesoPaciente, alturaPaciente) =>
  pesoPaciente / (alturaPaciente * alturaPaciente);

// Variaveis

let pacientePaulo = document.querySelector("#paulo");

let pesoPaulo = pacientePaulo.querySelector(".info-peso").textContent;

let alturaPaulo = pacientePaulo.querySelector(".info-altura").textContent;

let imcPaulo = pacientePaulo.querySelector(".info-imc");

// Transformando texto em int

let pesoPauloConvertido = parseInt(pesoPaulo);
let alturaPauloContertido = parseFloat(alturaPaulo);

// Verificando se peso e altura é valido

if (pesoPaulo > 200 || pesoPaulo <= 0) {

  imcPaulo.textContent ="Peso Inválido!";

} else if (alturaPaulo > 3.0 || alturaPaulo <= 0) {

 imcPaulo.textContent ="Altura Inválida!";

} else {
  let imcContaPaulo = imc(pesoPauloConvertido, alturaPauloContertido);

  imcPaulo.textContent = imcContaPaulo; // injeta no HTML o IMC
}
