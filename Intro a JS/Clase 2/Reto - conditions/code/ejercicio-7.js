var pregunta = prompt("¿Quieres topping en tu helado?");
var topping = "";

if(pregunta == "Sí"){
    topping = prompt("¿Qué topping quieres en tu helado?")
    if (topping == "Oreo"){
        alert("El precio sería de $500.00");
    } else if (topping == "KitKat"){
        alert("El precio sería de $700.00");
    } else if (topping == "Brownie"){
        alert("El precio sería de $900.00");
    }
    else {
        alert("Ese topping no está disponible en este momento o no está en nuestro catálogo.");
        alert ("El precio sin topping sería de $200.00");
    }
} else {
    alert ("El precio sin topping sería de $200.00");
}

