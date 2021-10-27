let nombre = prompt("Dime tu nombre:");
let edad = parseInt(prompt("Dime tu edad:"));

alert("Tu nombre es:" + nombre);

console.log(edad); 

var edad10 = edad + 10;

alert("Tu edad es diez años menos que:" + edad10);
document.write(edad10);

if(edad >= 18){
    alert("Bienvenidx al sitio");
} else
    alert("Usted es menor de edad.");
