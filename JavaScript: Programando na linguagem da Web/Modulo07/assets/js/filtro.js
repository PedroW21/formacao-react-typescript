let campoFiltro = document.querySelector("#filtro-tabela");

campoFiltro.addEventListener("input", function() {

  let pacientesTabela = document.querySelectorAll(".paciente");

  if (this.value.length > 0) {

    for (i = 0; i < pacientesTabela.length; i++) {

      let pacienteAtual = pacientesTabela[i];
      
      let tdNome = pacienteAtual.querySelector(".info-nome");
      console.log(tdNome);

      let nomePaciente = tdNome.textContent;

      if (nomePaciente != this.value) {
        pacienteAtual.classList.add("esconde-nome");
      } else {
        pacienteAtual.classList.remove("esconde-nome");
      }
    }

  } else {

    for (i = 0; i < pacientesTabela.length; i++) {
        let pacienteAtual = pacientesTabela[i];
        pacienteAtual.classList.remove("esconde-nome");
    }

  }

});
