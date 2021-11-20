const http = require("http")
//require("dotenv").config()




/////////////////////




const randomNumber = (min, max) => {
    if(min === 0 && max === 0) {
        return console.error("Loop infinito, función abortada");
    }

    let valor = Math.floor(Math.random() * (max - min + 1)) + min; //+1 para que incluya el maximo

    if (valor === 0) {
        valor = randomNumber(min, max);
    }

    return valor;
}

const randomNumberFloat = (min, max) => {
    if(min === 0 && max === 0) {
        return console.error("Loop infinito, función abortada");
    }

    let valor = Math.random() * (max - min + 1) + min; //+1 para que incluya el maximo

    if (valor === 0) {
        valor = obtenerRandom(min, max);
    }

    return valor.toFixed(2);
} 




/////////////////////




const server = http.createServer((peticion, respuesta) => {
    const info = {
        id: randomNumber(0,10),
        title: "Producto " + randomNumber(0,10),
        price: randomNumberFloat(0.00, 9999.99),
        thumbnail: "Foto " + randomNumber(0, 10)
    }
    respuesta.end(JSON.stringify(info, null, "\t"));
});

const PUERTO = 3000;
server.listen(PUERTO, function() {
    console.log("servidor está escuchando en el puerto " + PUERTO);
});