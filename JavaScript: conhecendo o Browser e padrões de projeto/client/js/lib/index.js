// Capturando informações do formulario

var campos = [
    document.querySelector("#data"),
    document.querySelector("#quantidade"),
    document.querySelector("#valor")
]

var tBody = document.querySelector("table tbody");

// Submetendo as informações do form para ser salva
document.querySelector(".form").addEventListener("submit", (event)=>{

    event.preventDefault();
    var tr = document.createElement("tr");

    campos.forEach((campo)=>{
        var td = document.createElement("td");
        td.textContent = campo.value;
        tr.appendChild(td);
    })

    var tdVolume = document.createElement("td");
    tdVolume.textContent = campos[1].value * campos[2].value;

    tr.appendChild(tdVolume);

// Injetando no HTML as informações

    tBody.appendChild(tr);

    campos[0].value = "";
    campos[1].value = 1;
    campos[2].value = 0;

    campos[0].focus();

});