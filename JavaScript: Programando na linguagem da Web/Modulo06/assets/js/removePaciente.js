let tabelaPacientes = document.querySelectorAll(".paciente")

tabelaPacientes.forEach((paciente) => {
    paciente.addEventListener("dblclick", (event)=>{        

    event.target.parentNode.remove(); // O target pega exatamente onde ocorreu o evento (de duplo click) e com isso usamos o parentNode (para chegar ao pai (td))

    }); 

})