//Guarda un arreglo de valores introducidos por el usuario
// Si el usuario no introduce un valor, se termina el ciclo y validar que el campo no esté vacío

let arreglo = [];
var userInput;

while(!(userInput=="")){
    userInput = prompt("Ingresa una cantidad cualquiera");
    if(userInput == ""){
        //no hacer nada
    } else {
        arreglo.push(userInput);
    }
} 

document.write("Introduciste estos valores:" + arreglo);