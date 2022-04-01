let botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", () => {
  // https://api-pacientes.herokuapp.com/pacientes
  // Resquisitando dados de uma API

  var xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load", () => {
    let erroAjax = document.querySelector("#erro-ajax");

    if (xhr.status == 200) {
       erroAjax.classList.add("esconde-nome");

      let resposta = xhr.responseText; // O evento capturara a informação após ser carregada (recebida da requisição GET);
      let pacientesExternos = JSON.parse(resposta);

      pacientesExternos.forEach((paciente) => {
        adicionaPacienteTabela(paciente);
      });
    } else {
        console.log(xhr.status);
        console.log(xhr.responseText);


        erroAjax.classList.remove("esconde-nome");
    }
  });

  xhr.send(); // de fato envia a requisição configurada acima
});
