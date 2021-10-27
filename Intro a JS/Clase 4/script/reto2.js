// var dato = 0;
// dato = prompt("Introduce un número:");

// do{
//     if(dato == NaN){
//         document.write("El valor ingresado no es numérico.");
//     } else {
//         alert("El número que ingresaste es" + dato);
//     }
// } while(!(dato == "Salir") || (dato == "Terminar"));

// do{
//     alert(dato + "es un número.");
// } while(dato == Number);

let bandera=false;
do{
    let dato = prompt("Ingresa un número:");
    if(isNaN(dato)){
        document.write("El valor ingresado no es numérico.");
        if(dato == "Salir" || dato == "Terminar")
            bandera = true;
    }else{
        alert("El número que ingresaste es:" + dato);
    }
} while (!bandera);