var numeros = [];

do{
    numeros = prompt("Ingresa cuantos números quieras, presionando enter cada vez que ingreses una cifra. Si ya no deseas agregar más números, presiona solo enter.");
}while(numeros != "");

function sumarArreglo(arreglo){
    for (let index = 0; index < arreglo.length; index++) {
        let suma = suma + arreglo[index];
    }
    return suma;
}
console.log(sumarArreglo(numeros));
