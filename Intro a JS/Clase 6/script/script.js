let usuarix = {
    nombre: "George",
    email: "george.seiorse@gmail.com",
    contraseña: "123george",
    edad: 26,
    telefono: "542134"
};

//document.write(usuarix.edad);

function mostrarInformacionUsuarix(usuarix){
    document.write(usuarix.nombre);
    return usuarix.contraseña;
}

mostrarInformacionUsuarix(usuarix);

let nintendo = {
    controles: 2,
    modelo: "Switch",
    color_control_1: "",
    color_control_2: "Azul",
    año: 2020,
    encender: function(){
        return "La nintendo está encendida.";
    },
    apagar: function(){
        return "La nintendo switch está apagada.";
    },
    recargarBateria: function(confirmacion){
        if(confirmacion === "Sí"){
            return "Tu switch ha sido recargada.";
        } else{
            return "Tu switch no se ha recargado.";
        }
    },
    juego: {
        dificultad: "intermedia",
        saga: "Metroid",
        jugadores: 1,
        divertido: true
    },
    informacionJuego: function(){
        return "Tu juego es " + this.juego.saga + " y es de dificultad " + this.juego.dificultad;
    },
    informacionModelo: function(){
        return "El modelo de tu consola es " + this.modelo + " y es del año " + this.año;
    },
    colorControl: function(){
        let colorControl = prompt("¿De qué color es el control 1?");
        this.color_control_1 = colorControl;
        return "Color ingresado correctamente.";
    }
}

function informacionNintento(consola){
    console.log(consola.colorControl());
    console.log(consola.encender());
    console.log(consola.apagar());
    console.log(consola.recargarBateria("Sí"));
    console.log(consola.informacionJuego());
    console.log(consola.informacionModelo());
    console.log("¿El juego es divertido?: " + consola.juego.divertido);
    console.log(consola.controles);
    console.log(consola.modelo);
    console.log(consola.color_control_1);
    console.log(consola.color_control_2);
    console.log(consola.año);
}

informacionNintento(nintendo);