let dato = prompt("Ingresa un dato cualquiera a continuación.");

function evaluacionDato (){
    if (typeof(dato) == "string"){
        if(isNaN(dato) == false){
            alert("El dato ingresado es de tipo numérico");
        } else {
            alert("El dato ingresado es de tipo string.");
        } 
    } else {
        document.write(typeof(dato));
    }
    return "El dato que ingresaste fue: " + dato;
}
document.write(evaluacionDato());