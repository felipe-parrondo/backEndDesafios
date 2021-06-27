/*
* Desafio generico - tiempo 5 minutos
* Completar el desafio generico obteniendo la informacion solicitada
* 
* A) Los nombres de los productos en un string separados por comas.
* B) El precio total
* C) El precio promedio
* D) El producto con menor precio
* E) El producto con mayor precio
* F) Con los datos de los puntos 1 al 5 crear un objeto y representarlo por consola
*/
let productos = [
    { id: 1, nombre: 'Escuadra', precio: 323.45 },
    { id: 2, nombre: 'Calculadora', precio: 234.56 },
    { id: 3, nombre: 'Globo Terraqueo', precio: 45.67 },
    { id: 4, nombre: 'Paleta Pintura', precio: 456.78 },
    { id: 5, nombre: 'Reloj', precio: 67.89 },
    { id: 6, nombre: 'Agenda', precio: 78.90 },
]

const nombresPorComas = () => {

    let arregloDeNombres = ""

    for(let i = 0; i < productos.length; i++) {
        arregloDeNombres += productos[i].nombre + ", ";
    }

    return arregloDeNombres;
}

const precioTotal = () => {

    let arregloDePrecios = 0;

    for(let i = 0; i < productos.length; i++) {
        arregloDePrecios += productos[i].precio;
    }

    return parseFloat(arregloDePrecios.toFixed(2));
}

const precioPromedio = () => {

    let precioTotal = 0;

    for(let i = 0; i < productos.length; i++) {
        precioTotal += productos[i].precio;
    }

    let promedioTemp = precioTotal / productos.length;

    return parseFloat(promedioTemp.toFixed(2));

}

const precioMenor = () => {

    let precioTemp = productos[0].precio;

    for (let i = 0; i < productos.length; i++) {
        if(precioTemp > productos[i].precio){
            precioTemp = productos[i].precio;
        }
    }

    return parseFloat(precioTemp.toFixed(2));
}

const precioMayor = () => {

    let precioTemp = productos[0].precio;

    for (let i = 0; i < productos.length; i++) {
        if(precioTemp < productos[i].precio){
            precioTemp = productos[i].precio;
        }
    }

    return parseFloat(precioTemp.toFixed(2));
}

let puntoF = {
    "nombre" : nombresPorComas(),
    "totalPrecio" : precioTotal(),
    "promedioPrecio" : precioPromedio(),
    "menorPrecio" : precioMenor(),
    "mayorPrecio" : precioMayor(),
}

console.log(puntoF)