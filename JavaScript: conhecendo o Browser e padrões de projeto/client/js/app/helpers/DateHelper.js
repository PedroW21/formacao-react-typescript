class DateHelper {
    
    dataParaTexto (data) {
        
        return data.getDate() 
        + "/" + (data.getMonth() + 1)
        + "/" + (data.getFullYear());
        
    }

    textoParaData(text) {

            return new Date(...texto.split("-")
            .map((item, indice)=>item - indice % 2));

    }
}