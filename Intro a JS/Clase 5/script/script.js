function ObtenerMarcador(partido1, partido2){
    let total;
    partido1 = prompt("Ingresa los goles del primer partido:");
    partido2 = prompt("Ingresa los goles del segundo partido:");
    function Agregar(){
        if(isNaN(partido1) == false && isNaN(partido2) == false){
            total = partido1 + partido2;
        } else {
            alert("Ingresa únicamente números.");
        }
        return total;
    }
    return "El resultado es: " + Agregar;
}
