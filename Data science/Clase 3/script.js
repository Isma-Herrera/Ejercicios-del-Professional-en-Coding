let agenda = [
    persona1 = {
        nombre: "Diana",
        direcciones: {
            direccion1: "Ciudad de México",
            direccion2: "San Luis Potosí"
        },
        mascotas: {
            mascota1: "Muna",
            mascota2: "Sule",
            mascota3: "Bebé"
        },
        número: 1234,
        licenciatura: "Arqueología"
    },
    persona2 = {
        nombre: "Víctor",
        direcciones: {
            direccion1: "Durango",
            direccion2: "Ciudad de México",
            direccion3: "Matehuala",
            direccion4: "San Luis Potosí"
        },
        número: 5678,
        licenciatura: "Arqueología"
    },
    persona3 = {
        nombre: "Isla",
        direcciones: {
            direccion1: "Morelia",
            direccion2: "Ciudad de México"
        },
        número: 9012,
        licenciaturas: {
            licenciatura1: "Historia",
            licenciatura2: "Historia del Arte"
        }
    },
    persona4 = {
        nombre: "Pachita",
        direcciones: {
            direccion1: "San Luis Potosí",
            direccion2: "Ciudad de México"
        },
        número: 3456,
        licenciatura: "Música"
    },
    persona5 = {
        nombre: "Ismael",
        direcciones: {
            direccion1: "Morelia",
            direccion2: "Estado de México",
            direccion3: "Ciudad de México"
        },
        mascotas: {
            mascota1: "Shaka",
            mascota2: "Nymeria",
            mascota3: "Queenie"
        },
        número: 7890,
        licenciatura: "Literatura"
    }
];

 console.log(agenda);

 let propiedades = Object.keys(agenda[0]);
 console.log(propiedades);

 function obtenerPropiedades(objeto){
    return Object.keys(objeto);
 }

 function accederAPropiedades(objeto, propiedad){
    let acceder = prompt("En el nivel actual existen las siguientes propiedades. \n"+propiedades.toString)
    if(typeof objeto[acceder] == "object"){
        let propiedadesInternas = obtenerPropiedades(objeto[acceder]);
        accederAPropiedades(objeto[acceder], propiedadesInternas);
    }
    else{
        alert("Su valor es: " + objeto[acceder]);
    } 
 }