var nombre = "MoonLight";
var direccion = "Rivadavia";
var numero = 3495;

var concatenacion = nombre + " " + direccion + " " + numero;

function MuestraNombre(nombre, direccion, numero){
    var datos = document.getElementById("datos");
    datos.innerHTML= `
        <h1>Soy un salon de eventos</h1>
        <h2>Mi nombre es: ${nombre}</h2>
        <h3>Mi direccion es: ${direccion}</h3>
        <h4>Mi numero es: ${numero} </h4>`;
}

MuestraNombre("MoonLight", "Rivadavia", 3495);