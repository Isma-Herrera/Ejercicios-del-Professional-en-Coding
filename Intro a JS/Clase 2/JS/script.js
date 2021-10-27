let edad = 0; //se pone 0 porque estamos "inicializando" la variable; se le puede poner cualquier valor inicial, lo importante es definirla
let municipio ="";
var municipio_permitido = "Matamoros";
let persona = false;
let embarazo = false;
let semanas_gestacion = 0;

edad = prompt("¿Cuántos años tienes?");

if (edad >= 18 && < 30){
    alert("Estás en el rango de edad.");
    if(municipio == municipio_permitido){
        municipio = prompt("¿Cuál es tu municipio?");
        alert("Estás en la zona indicada.");
        if(persona == Sí){
            embarazo = prompt("¿Estás embarazadx?");
            if(embarazo == Sí){
                semanas_gestacion = prompt("¿Cuántas semanas tienes de gestación?");
                if(semanas_gestacion < 9){
                    alert("No puedes vacunarte hasta que cumplas al menos 9 semanas de gestación.");
                }
                else {
                    alert("Puedes vacunarte porque ya tienes más de 9 semanas de gestación.");
                }
            }
        }
    }
    else {
        alert("Esta no es tu zona indicada, por favor busca tu zona asignada en el siguiente enlace: @enlaceXD")
    }
}
else {
    alert("No estás en el rango de edad de esta convocatoria.");
}