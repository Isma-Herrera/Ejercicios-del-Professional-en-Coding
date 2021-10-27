let numeros = [6, 165, 84, 12, 3, 54, 17, 545, 3530, 77];

const ordenamientoBurbuja = (arreglo) => {
    let tamaño = arreglo.length; 
    for (let uno = 0; uno < tamaño; uno++) {
        //console.log("Ciclo 1: " + uno);
        for (let dos = 0; dos < tamaño - 1 - uno; dos++) {
            const element = arreglo[dos];
            let posicionActual = tamaño - 1 - uno;
            /*console.log(posicionActual);
            console.log("Ciclo 2: " + posicionActual);*/
            if(arreglo[dos] > arreglo[dos + 1]){
                [arreglo[dos], arreglo[dos + 1]] = [arreglo[dos + 1], arreglo[dos]];
            }
        }
    }
    return arreglo
}

let arregloOrdenado = ordenamientoBurbuja(numeros);

/* let arregloSort = numeros.sort(function(a, b){
    return a - b;
});
console.log(arregloSort); */
console.log(arregloOrdenado);