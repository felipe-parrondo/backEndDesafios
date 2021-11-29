const esperar = ret => { 
    for (let i = 0; i < ret * 3e6; i++); 
}

const timer = (palabra) => {
    console.log(palabra)
    esperar(tiempo)
}

const mostrarPalabras = (texto, tiempo, totalPalabras, callback) => {

    const palabras = texto.split(" ")

    for (let i = 0; i < palabras.length; i++) {
        timer(palabras[i])
    }

    totalPalabras += palabras.length;

    setTimeout(callback(false, totalPalabras), tiempo);
}

let texto1 = 'primer texto';
let texto2 = 'curso backend de coderhouse';
let texto3 = 'probando llamadas asincronas en nodejs';
const tiempo = 500;

mostrarPalabras(texto1, tiempo, 0, (error, totalPalabras) => {
    mostrarPalabras(texto2, tiempo, totalPalabras, (error, totalPalabras) => {
        mostrarPalabras(texto3, tiempo, totalPalabras, (error, totalPalabras) => {
            console.log('Proceso terminado, cantidad de palabras: ', totalPalabras);
        });
    });
});

mostrarPalabras()