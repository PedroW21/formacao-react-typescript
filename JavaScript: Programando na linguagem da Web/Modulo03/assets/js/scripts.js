/* Seção destinada a comentários especificos

- .textContent retorna (e possibilita a manipulação) o conteudo do h1 e não o elemento

- .querySelector somente busca um resultado
- .querySelectorAll retorna um Array!!!

*/

/* Troca Titulo */

let title = document.querySelector(".header-title");
title.textContent = "Aparecida Nutricionista";


let pacientes = document.querySelectorAll(".paciente");

// Irá passar por todos os pacientes e calcular seus IMCs

for(i = 0; i < pacientes.length; i++){

  // Variaveis
  let paciente = pacientes[i];

  let pesoPaciente = paciente.querySelector(".info-peso").textContent;

  let alturaPaciente = paciente.querySelector(".info-altura").textContent;
  
  let imcPaciente = paciente.querySelector(".info-imc");
  
  
  /* Calcula IMC */
  
  var imc = (pesoPaciente, alturaPaciente) =>
    pesoPaciente / (alturaPaciente * alturaPaciente);
  
  
  // Transformando texto em int
  
  let pesoPacienteConvertido = parseInt(pesoPaciente);
  let alturaPacienteContertido = parseFloat(alturaPaciente);
  
  // Verificando se peso e altura é valido
  
  if (pesoPaciente > 200 || pesoPaciente <= 0) {
  
    imcPaciente.textContent ="Peso Inválido!";
  
  } else if (alturaPaciente > 3.0 || alturaPaciente <= 0) {
  
    imcPaciente.textContent ="Altura Inválida!";
  
  } else { // caso sejam validas, realiza o calculo

    let imcResultadoPaciente = imc(pesoPacienteConvertido, alturaPacienteContertido);
    
    imcResultadoPaciente = imcResultadoPaciente.toFixed(2);

    imcPaciente.textContent = imcResultadoPaciente; // injeta no HTML o IMC
  }
  



}
