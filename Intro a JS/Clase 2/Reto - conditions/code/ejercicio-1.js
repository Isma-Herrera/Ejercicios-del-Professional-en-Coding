var pregunta = "";

pregunta = prompt("¿Eres bellísimx?");

if(pregunta == "Sí"){
    alert("¡Ya sabía!");
} 
else {
    alert("Nah, ya en serio.");
    pregunta = prompt("¿Eres bellísimx?");
    if(pregunta == "Sí"){
        alert("¡Ya sabía!");
    } 
    else {
        alert("Nah, ya en serio.");
        pregunta = prompt("¿Eres bellísimx?");
    }
}