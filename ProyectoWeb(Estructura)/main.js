var nombre = "MoonLight";
var direccion = "Rivadavia";
var numero = 3495;

var concatenacion = nombre + " " + direccion + " " + numero;

function MuestraNombre(nombre, direccion, numero){
    var misDatos = `
        <h1>Soy un salon de eventos</h1>
        <h2>Mi nombre es: ${nombre}</h2>
        <h3>Mi direccion es: ${direccion}</h3>
        <h4>Mi numero es: ${numero} </h4>`;

    return misDatos;
}

function imprimir(){
    var datos = document.getElementById("datos");
    datos.innerHTML= MuestraNombre("AgaveAmica", "Lopez de Gomara", 3275);
}

imprimir();

var nombres = ['Braiton', 'Ezequiel'];
/*alert(nombres[0]);
*/
document.write('<h1>Listado de nombres</h1>');
/*
for(i = 0; i < nombres.length; i++){
    document.write(nombres[i] + '<br/>');
}
*/
nombres.forEach(function(nombre) {
    document.write(nombre + '<br/>');
});