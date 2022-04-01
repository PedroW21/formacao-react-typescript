/* Seção de Comentários especificos

- .preventDefault não deixa o botao executar seu comportamento padrao (limpar o formulario (quando não se tem destino os dados) e recarregar a pagina)

*/

/* Adiciona novo paciente */

let botaoAdicionaPaciente = document.querySelector("#adicionar-paciente");

botaoAdicionaPaciente.addEventListener("click", (event)=>{

  event.preventDefault(); 

  let form  = document.querySelector("#form-adiciona");

  // Chamando função que extrai os dados do paciente e salva no objeto paciente

  let paciente = extraiDadosForm(form);

  // Chama a função que cria a nova tabela paciente

  let pacienteCriado = criaTabelaPaciente(paciente);
 
  // Momento de inserir a tabela criada na tabela de pacientes

  let tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteCriado);

}); //pode receber uma função anonima ou nomeada (externa);


function extraiDadosForm(form){

  let paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)

  }

  return paciente;
}

function criaTabelaPaciente(paciente) {


   // Cria uma nova tr com suas td's

   let criaPaciente = document.createElement("tr");

   let nomeTd = criaPropriedaTabelaPaciente(paciente.nome, "info-nome");
   let pesoTd = criaPropriedaTabelaPaciente(paciente.peso, "info-peso");
   let alturaTd = criaPropriedaTabelaPaciente(paciente.altura, "info-altura");
   let gorduraTd = criaPropriedaTabelaPaciente(paciente.gordura, "info-gordura");
   let imcTd = criaPropriedaTabelaPaciente(paciente.imc, "info-imc");
 
   // Amarra a tr os td's criados
 
   criaPaciente.appendChild(nomeTd);
   criaPaciente.appendChild(pesoTd);
   criaPaciente.appendChild(alturaTd);
   criaPaciente.appendChild(gorduraTd);
   criaPaciente.appendChild(imcTd);

  return criaPaciente;
}

function criaPropriedaTabelaPaciente(dado, classe) {
  let td = document.createElement("td");

  td.textContent = dado; // Insere o valor na tabela
  td.classList.add(classe); // Coloca uma classe a aquele valor

  return td;
}