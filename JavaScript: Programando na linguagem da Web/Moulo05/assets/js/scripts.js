/* Seção destinada a comentários especificos

- .textContent retorna (e possibilita a manipulação) o conteudo do h1 e não o elemento

- .querySelector somente busca um resultado
- .querySelectorAll retorna um Array!!!
- .classList retorna todas as classes daquele elemento (possui metodos)

- .preventDefault não deixa o botao executar seu comportamento padrao (limpar o formulario (quando não se tem destino os dados) e recarregar a pagina)

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
    paciente.classList.add("paciente-invalido");
  
  } else if (alturaPaciente > 3.0 || alturaPaciente <= 0) {
  
    imcPaciente.textContent ="Altura Inválida!";
    paciente.classList.add("paciente-invalido");
  
  } else { // caso sejam validas, realiza o calculo

    let imcResultadoPaciente = imc(pesoPacienteConvertido, alturaPacienteContertido);
    
    imcPaciente.textContent = imcResultadoPaciente.toFixed(2); // injeta no HTML o IMC
  }
  
}

/* Adiciona novo paciente */

let botaoAdicionaPaciente = document.querySelector("#adicionar-paciente");

botaoAdicionaPaciente.addEventListener("click", (event)=>{

  event.preventDefault(); 

  let form  = document.querySelector("#form-adiciona");

  // Guarda as informações do formulario
  let nome = form.nome.value;
  let peso = form.peso.value;
  let altura = form.altura.value;
  let gordura = form.gordura.value;

  // Cria uma nova tr com suas td's
  let criaPaciente = document.createElement("tr");

  let nomeTd = document.createElement("td");
  let pesoTd = document.createElement("td");
  let alturaTd = document.createElement("td");
  let gorduraTd = document.createElement("td");

  // Insere os valores nos campos criados

  nomeTd.textContent = nome;
  pesoTd.textContent = peso;
  alturaTd.textContent = altura;
  gorduraTd.textContent = gordura;

  // Amarra a tr os td's criados

  criaPaciente.appendChild(nomeTd);
  criaPaciente.appendChild(pesoTd);
  criaPaciente.appendChild(alturaTd);
  criaPaciente.appendChild(gorduraTd);

  // Momento de inserir a tabela criada na tabela de pacientes

  let tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(criaPaciente);

}); //pode receber uma função anonima ou nomeada (externa);

