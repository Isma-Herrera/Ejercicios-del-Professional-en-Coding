//Cuántos números son múltiplos de 2, del 1 al 10

var contador = 0;
for (var index = 1; index <= 10; index++){
    if(index % 2 == 0){
        contador = contador +1; //puede ser contador++ 
        document.write(index + "es multiplo de 2");
    }
}

document.write("Entre el 0 al 10 existen" + "" + contador + "" + "números que son multiplos de 2");
