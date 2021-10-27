function tuNombre (){
    let nombre = prompt("¿Cuál es tu nombre?");
    let apellido = prompt("¿Cuál es tu apellido?");
    let nombreCompleto = nombre + apellido;

    return "Tu nombre es: " + nombreCompleto;
}
console.log(tuNombre());