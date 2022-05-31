/* Seção destinada a comentários especificos

- .textContent retorna (e possibilita a manipulação) o conteudo do h1 e não o elemento

- .querySelector somente busca um resultado
- .querySelectorAll retorna um Array!!!
- .classList retorna todas as classes daquele elemento (possui metodos)

/* Troca Titulo */

let title = document.querySelector(".header-title");
title.textContent = "Aparecida Nutricionista";

let pacientes = document.querySelectorAll(".paciente"); // é um objeto

// Irá passar por todos os pacientes e calcular seus IMCs

for (i = 0; i < pacientes.length; i++) {
  // Variaveis
  let paciente = pacientes[i];

  let pesoPaciente = paciente.querySelector(".info-peso").textContent;

  let alturaPaciente = paciente.querySelector(".info-altura").textContent;

  let imcPaciente = paciente.querySelector(".info-imc");

  // Verificando se peso e altura é valido

  let pesoPacienteValido = validaPeso(pesoPaciente);
  let alturaPacienteValido = validaAltura(alturaPaciente);

  if (!pesoPacienteValido) {
    imcPaciente.textContent = "Peso Inválido!";
    paciente.classList.add("paciente-invalido");
  } else if (!alturaPacienteValido) {
    imcPaciente.textContent = "Altura Inválida!";
    paciente.classList.add("paciente-invalido");
  } else {
    // caso sejam validas, realiza o calculo

    let imcResultadoPaciente = calculaImc(pesoPaciente, alturaPaciente);

    imcPaciente.textContent = imcResultadoPaciente; // injeta no HTML o IMC
  }
}

/* Calcula IMC */

function calculaImc(pesoPaciente, alturaPaciente) {
  let imcResultado = (pesoPaciente / (alturaPaciente * alturaPaciente)).toFixed(2);

  return imcResultado;
}

function validaPeso(peso) {
  if (peso > 0 && peso <= 200) {
    return true;
  } else {
    return false;
  }
}

function validaAltura(altura) {
  if (altura > 0 && altura <= 3.0) {
    return true;
  } else {
    return false;
  }
}
