var contador = 0;

for(var index = 1; index <= 50; index++){
    if(index % 2 != 0){
        contador = contador +1;
        console.log(index + "es un número impar.");
    }
}