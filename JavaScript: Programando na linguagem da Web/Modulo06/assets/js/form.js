/* Seção de Comentários especificos

- .preventDefault não deixa o botao executar seu comportamento padrao (limpar o formulario (quando não se tem destino os dados) e recarregar a pagina)

*/

let botaoAdicionaPaciente = document.querySelector("#adicionar-paciente");

botaoAdicionaPaciente.addEventListener("click", (event)=>{

  event.preventDefault(); 

  let form  = document.querySelector("#form-adiciona");

  // Chamando função que extrai os dados do paciente e salva no objeto paciente

  let paciente = extraiDadosForm(form);

  // Chama a função que cria a nova tabela paciente

  let pacienteCriado = criaTabelaPaciente(paciente);
 
  let temErro = validaPaciente(paciente);

  if(temErro.length > 0){ //se tem alguma informação, tem erro
    
    mostreMensagemErro(temErro);

    return;
    
  }

  // Momento de inserir a tabela criada na tabela de pacientes (no HTML)

  let tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteCriado);

  let ul = document.querySelector("#informa-erros");

  form.reset(); // Limpa o formulario após inserir os dados

  ul.innerHTML = ""; // Após limpar o formulario e adicionar paciente, ele limpara os erros;

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
 
   // Amarra a tr os td's criados
 
   criaPaciente.appendChild(criaPropriedaTabelaPaciente(paciente.nome, "info-nome"));

   criaPaciente.appendChild(criaPropriedaTabelaPaciente(paciente.peso, "info-peso"));
   
   criaPaciente.appendChild(criaPropriedaTabelaPaciente(paciente.altura, "info-altura"));

   criaPaciente.appendChild(criaPropriedaTabelaPaciente(paciente.gordura, "info-gordura"));

   criaPaciente.appendChild(criaPropriedaTabelaPaciente(paciente.imc, "info-imc"));

  return criaPaciente;
}

function criaPropriedaTabelaPaciente(dado, classe) {
  let td = document.createElement("td");

  td.textContent = dado; // Insere o valor na tabela
  td.classList.add(classe); // Coloca uma classe a aquele valor

  return td;
}

function validaPaciente(paciente) {

  erros = [];

  if(!validaPeso(paciente.peso)) erros.push("Peso Inválido!");
 
  if(!validaAltura(paciente.altura)) erros.push("Altura Inválida!");

  if(paciente.nome.length== 0) erros.push("Nome em branco! Insira um nome!");

  if(paciente.gordura.length == 0) erros.push("Percentual de gordura inválido! Insiria algum valor")
  
  return erros;
}


function mostreMensagemErro(erros) {
  
  let ul = document.querySelector("#informa-erros");

  ul.innerHTML = "";

  erros.forEach((erro) => { //recebe o valor da interação atual
    let li = document.createElement("li");
    li.textContent = erro;

    ul.appendChild(li);
  })

}