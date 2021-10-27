// let verbos_purhe = ["arhani", "uantani", "erokani"]; //en este caso "arhani" tiene valor 0
// verbos_purhe.push("jarhani"); //con el push se agrega un dato nuevo

// document.write("Verbos agregados:" + verbos_purhe.length + "<br />");

// verbos_purhe[0] = "uantontskuarhini"; //en este caso se reemplaza el valor de la posición 0

// let verbo_nuevo = prompt("¿Qué verbo quieres agregar a la lista?");
// verbos_purhe.push(verbo_nuevo); //push permite añadir valores dinámicamente a la lista

// document.write("Verbos agregados:" + verbos_purhe.length + "<br />");
// document.write(verbos_purhe);

// let verbos_purhe = ["arhani","uarhani","erokani"];
// verbos_purhe = verbos_purhe.split(","); // el caracter entre los paréntesis del split indica cada cuanto se hará la división
// document.write("Verbos registrados:" + verbos_purhe.length);
// document.write(verbos_purhe);

let verbos_purhe = ["arhani","uarhani","erokani", "arhint'ani", "mókunt'ani"];
verbos_purhe.sort().reverse(); //se puede poner un método de array sobre otro

document.write("Verbos registrados:" + verbos_purhe.length + "<br />");
document.write(verbos_purhe + "<br />");

var nombre = "";
var apellido = "";
let nombre_completo = "";

nombre = prompt("Ingresa tu nombre:");
apellido = prompt("Ingresa tu apellido:");

nombre_completo = nombre.concat(" ").concat(apellido);
document.write(nombre_completo);