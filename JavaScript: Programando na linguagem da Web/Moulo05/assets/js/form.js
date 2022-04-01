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