let frutas = ["Fresa", "Mango"];
frutas.push("Pera");
frutas.push("Plátano");
frutas.pop();
console.log(frutas);
elminarUltimo();

function elminarUltimo(){
    let indice = frutas.length - 1;
    frutas.splice(indice, 1);
    return console.log(frutas);
}