var datos = [];
let entrada= "";

entrada = prompt("Ingresa a continuación tu nombre, tu primer apellido, tu segundo apellido, tu edad y tu nacionalidad, separados únicamente por una coma:");

datos = entrada.split(",");

document.write(datos);
//console.log(datos);

