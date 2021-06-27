/*
* Desafio generico - 5 minutos
* Crear un proyecto en nodejs que genere 10000 numeros aleatorios en el
* rango de 1 a 20.
* Crear un objeto cuyas claves sean los numeros salidos y el valor asociado sea
* la cantidad de veces que salio dicho numero.
* Representar por consola los resultados.
*/

let valores = {};
let control = 1;

function obtenerRandom(min, max) {

    if(min === 0 && max === 0) {
        return console.error("Loop infinito, función abortada");
    }

    let valor = Math.floor(Math.random() * (max - min + 1)) + min; //+1 para que incluya el maximo

    if (valor === 0) {
        valor = obtenerRandom(min, max);
    }

    return valor;
}

while(control <= 10000) {
    let numero = obtenerRandom(0, 20);

    if(!valores[numero]) {
        valores[numero] = 1;
    } else {
        valores[numero]++;
    }
    control++;
}

console.log(valores);