var cuentas = [
    {
        nombre: "Juan",
        saldo: 5000,
        contraseña: "ironmaiden"
    },
    {
        nombre: "Vanesa",
        saldo: 10000,
        contraseña: "laorejadevangogh"
    },
    {
        nombre: "Rocío",
        saldo: 38000,
        contraseña: "blackveilbrides"
    }
];

let objeto = {};

function validarDatos(){
    let nombreUsuarix = document.getElementById("nombreUsuarix").value;
    let contraseñaDeUsuarix = document.getElementById("contraseñaDeUsuarix").value;
    let bandera = false;

        for (let index = 0; index < cuentas.length; index++) {
            const element = cuentas[index];
            console.log(nombreUsuarix, contraseñaDeUsuarix, element.nombre, element.contraseña);
            if(nombreUsuarix == element.nombre && contraseñaDeUsuarix == element.contraseña){
                bandera = true;
                objeto = element;
                alert("Los datos son correctos.");
                document.getElementById("caja").style.display = "none";
                alert("Le damos la bienvenida, " + nombreUsuarix + ".");
            } 
        }
        if(bandera == false){
            objeto = {};
            alert("Los datos no son correctos. Ingréselos nuevamente.");
        }
}

function consultarSaldo() {
    alert("Su saldo actual es de " + objeto.saldo + " pesos.");
}

function ingresarMonto() {
    let montoAIngresar = parseInt(prompt("Ingrese la cantidad: "));
    let montoNuevo = montoAIngresar + objeto.saldo;
    
    if(montoNuevo > 50000){
        alert("La cantidad ingresada excede el máximo estipulado en Jellyfish Bank.")
        montoNuevo = montoNuevo - montoAIngresar;
    } else{
        alert("Su nuevo saldo es de: " + montoNuevo + " pesos.");
    }
    objeto.saldo = montoNuevo;
}

function retirarMonto() {
    let montoARetirar = parseInt(prompt("Ingrese la cantidad que desea retirar: "));
    let montoTrasRetiro = objeto.saldo - montoARetirar;
    if(montoTrasRetiro < 10){
        alert("No puede realizar esta operación, la cantidad mínima para mantener una cuenta de cajero en Jellyfish Bank es de 10 pesos.");
        montoTrasRetiro = montoTrasRetiro + montoARetirar;
    } else{
        alert("Su saldo restante es de " + montoTrasRetiro + " pesos.");
    }
    objeto.saldo = montoTrasRetiro;
}

function cerrarSesion(){
    document.getElementById("cajero").style.display = "none";
    alert("Ha cerrado exitosamente la sesión. Para acceder nuevamente, por favor refresque la página.");
}





