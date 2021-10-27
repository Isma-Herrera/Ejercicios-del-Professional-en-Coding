let articulos = [];

function agregarArticulo(){
    let articulo = {};
    let nombre = document.getElementById("nombre").value;
    let cantidad = document.getElementById("cantidad").value; 
    let precio = document.getElementById("precio").value;
    let vendedora = document.getElementById("vendedora").value;

    articulo.nombre = nombre;
    articulo.cantidad = cantidad;
    articulo.precio = precio;
    articulo.vendedora = vendedora;

    articulos.push(articulo);

    document.getElementById("nombre").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("vendedora").value = "";
    document.getElementById("registros").innerHTML = "";

    mostrarRegistro();
    calcularTotal();
}

function mostrarRegistro(){
    let html = "";
    for (let index = 0; index < articulos.length; index++) {
        let elemento = articulos[index];
        html = "<tr>";
        html += "<th scope='row'>" + (index + 1) + "</th>";
        html += "<td>" + elemento.nombre + "</td>";
        html += "<td>" + elemento.cantidad + "</td>";
        html += "<td>" + elemento.precio + "</td>";
        html += "<td>" + elemento.vendedora + "</td>";
        html += "</tr>";
    }
    document.getElementById("registros").innerHTML = html;
}

function calcularTotal(){
    let total = 0;
    let totalCantidad = 0;
    for (let index = 0; index < articulos.length; index++) {
        const element = articulos[index];
        total += (element.cantidad * element.precio);
        totalCantidad += +element.cantidad;
    }
    let html = "";
        html = "<tr>";
        html += "<th scope='row'></th>";
        html += "<td></td>";
        html += "<td>Total cantidad de artículos: " + totalCantidad + "</td>";
        html += "<td>Total: " + total + "</td>";
        html += "<td></td>";
        html += "</tr>";
        document.getElementById("registros").insertAdjacentHTML("beforeend", html);
}

function vendedoraDelMes(){
    let ventas = articulos;
    let vendedoras = [];
    let ventas_por_vendedora = [];
    let totales = {
        total: 0,
        vendedora: ""
    }
    for (let index = 0; index < ventas.length; index++) {
        const element = ventas[index];
        if (!vendedoras.contains(element.vendedora)) {
            vendedoras.push(element.vendedora);
        }
        console.log(vendedoras);
    }
}

/* let persona1 = {
    nombre: "Juana",
    edad: 22
}

let persona2 = {
    nombre: "Elena",
    edad: 25
}

personas.push(persona1);
personas.push(persona2);

function buscarEdad(nombre){
    let edad = 0;
    for (let index = 0; index < personas.length; index++) {
        const element = personas[index];
        if(nombre == element.nombre){
            edad = element.edad;
        }
    }
    alert(nombre + " tiene " + edad + " años.");
}
buscarEdad("Juana"); */
