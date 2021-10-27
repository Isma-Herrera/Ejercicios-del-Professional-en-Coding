var numero = [5, 5, 10, 10, 20, 20, 30];

function sumarArreglo(arreglo){
    for (let index = 0; index < arreglo.length; index++) {
        suma = suma + arreglo[index];
    }
    return suma;
}
console.log(sumarArreglo(numero));