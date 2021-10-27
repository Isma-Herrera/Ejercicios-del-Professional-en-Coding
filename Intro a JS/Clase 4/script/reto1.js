var semana = "";
//semana = prompt("Introduce un día de la semana:");

while(!(semana == "domingo")){
    semana = prompt("Introduce un día de la semana en minúsculas:");
    if(semana == "lunes"){
        alert("¡Sí se puede!");
    } else if (semana == "martes"){
        alert("Vas bien, vas bien.");
    } else if (semana == "miércoles"){
        alert("Ya vas a la mitad de la semana, ¡no te rindas!");
    } else if (semana == "jueves"){
        alert("Casi viernes, ¡genial!");
    } else if (semana == "viernes"){
        alert("¡Lo conseguiste otra semana!");
    } else if (semana == "sábado"){
        alert("Te mereces una tarde de lectura y videojuegos.");
    }
}
alert("Ve a descansar.");