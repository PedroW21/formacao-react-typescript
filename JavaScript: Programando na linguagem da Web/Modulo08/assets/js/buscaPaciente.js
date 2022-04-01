let botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", () => {
  // https://api-pacientes.herokuapp.com/pacientes
  // Resquisitando dados de uma API

  var xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load", () => {
    let resposta = xhr.responseText; // O evento capturara a informação após ser carregada (recebida da requisição GET);

    let pacientesExternos = JSON.parse(resposta);

    pacientesExternos.forEach((paciente) => {
      adicionaPacienteTabela(paciente);
    });
  });

  xhr.send();
});
