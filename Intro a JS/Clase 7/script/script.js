function mensaje(){
    let elemento = document.getElementById("body");
    elemento.style.backgroundColor = "black";
    let contadorDeCajas = document.getElementsByClassName("caja").length;
    alert("Tengo " + contadorDeCajas + " Divs.");
    for (let index = 0; index < contadorDeCajas; index++) {
        let element = document.getElementsByClassName("caja")[index];
        element.style.backgroundImage = "url(https://picsum.photos/"+(index+1)+ "00/"+(index+1)+ "00?random=1)";
        element.setAttribute("title", "caja_"+(index+1));
    }
    //let caja = document.getElementsByClassName("caja")[3];
}


// let mascota = {
//     nombre: "Shaka",
//     edad: 12,
//     color: "Capuccino",
//     comidaFavorita: "Pollito",
//     lugarFavorito: "El parque",
//     añoDeLlegada: 2009,
//     dientes: 3,
//     horaDeDormir: 21,
//     raza: "Mestiza",
//     estaturaEnCm: 30
// }

// function datosShaka(pet){
//     document.write("Nombre: " + pet.nombre + "</br>");
//     document.write("Edad: " + pet.edad + "</br>");
//     document.write("Color: " + pet.color + "</br>");
//     document.write("Comida Favorita: " + pet.comidaFavorita + "</br>");
//     document.write("Lugar Favorito: " + pet.lugarFavorito + "</br>");
//     document.write("Año de llegada: " + pet.añoDeLlegada + "</br>");
//     document.write("Número de dientes: " + pet.dientes + "</br>");
//     document.write("Hora de dormir: " + pet.horaDeDormir + " horas." + "</br>");
//     document.write("Raza: " + pet.raza + "</br>");
//     document.write("Estatura: " + pet.estaturaEnCm + " cm." + "</br>");
// }

// //datosShaka(mascota);

// function modificarDatos(objetoMascota){
//     let bandera = true;
//     do {
//         let dato = prompt("¿Desea actualizar un dato?");
//         if (dato == "Sí") {
//             dato = prompt("Ingrese la propiedad que quiere actualizar");
//             objetoMascota[dato] = prompt("Ingrese el nuevo valor de la propiedad: ");
//         }
//         else{
//             bandera = false;
//         }
//     } while (bandera);
//     datosShaka(objetoMascota);
// }


// function imprimir (){
//     modificarDatos(mascota);
// }