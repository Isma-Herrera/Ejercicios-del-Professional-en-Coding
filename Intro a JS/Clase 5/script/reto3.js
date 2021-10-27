function semaforo (){
    let color = prompt("Ingresa el color del semáforo.");
    if(color == "Rojo"){
        alert("Cambia a verde.");
    } else if (color == "Amarillo"){
        alert("Cambia a Rojo.");
    } else if (color == "Verde"){
        alert("Cambia a amarillo.");
    }
    return "El semáforo estaba en " + color;
}
document.write(semaforo());