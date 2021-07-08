import express from "express"
import moment from "moment"
import fs from "fs"

const app = express();
const PORT = 8080;

function obtenerRandom(min, max) {

    if(min === 0 && max === 0) {
        return console.error("Loop infinito, función abortada");
    }

    let valor;
    let elector = Math.random();
    console.log(elector)

    if(elector <= 0.5) {
        valor = Math.floor(Math.random() * (max - min + 1)) + min; //+1 para que incluya el maximo
    } else {
        valor = Math.floor(Math.random() * (max - min)) + min; //sin el +1 para que incluya al 0
    }

    /*if (valor === 0) {
        valor = obtenerRandom(min, max);    //Aca necesitamos que 0 sea posible porque responde al indice de un array
    }*/ 

    return valor;
}

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})

server.on("error", (error) => {
    console.log(`Error en el servidor: ${error}`)
})

var visitasItems = 0;
var visitasRandom = 0;
var visitasVisitas = 0;


app.get("/items", function(req, res) {
    //Ruta get '/items' que responda un objeto con todos los productos y su cantidad total 
    //en el siguiente formato: { items: [productos], cantidad: (cantidad productos) }
    visitasItems += 1;

    fs.readFile("./productos.txt", "utf-8", function(e, data) {
        let newRes = JSON.parse(data);
        let cant = newRes.length;

        /*let html = 
        `
        <ul> 
            <li> ${JSON.stringify(newRes[0])} </li>
            <li> ${JSON.stringify(newRes[1])}</li>
            <li> ${JSON.stringify(newRes[2])}</li>
        </ul>
        `*/

        let objRes = {
            items : newRes,
            cantidad : cant
        }
        
        res.send(objRes)
    })
});

app.get("/item-random", function(req, res) {
    //Ruta get '/item-random' que devuelva un producto elegido al azar desde un array de 
    //productos que se encuentran en el archivo 'productos.txt'. El formato de respuesta 
    //será: { item: {producto} }
    visitasRandom += 1;

    fs.readFile("./productos.txt", "utf-8", function(e, data) {
        let newRes = JSON.parse(data);

        let objRes = {
            item : newRes[obtenerRandom(0,3)],
        }

        res.send(objRes)
    })
})

app.get("/visitas", function(req, res) {
    //La ruta get '/visitas' devuelve un objeto que indica cuantas veces se visitó la ruta 
    //del punto 1 y cuantas la ruta del punto 2. Contestar con el formato:  
    //{ visitas : { items: cantidad, item: cantidad } }
    visitasVisitas += 1;

    let objRes = {
        visitasRandom: visitasRandom,
        visitasItems: visitasItems,
        visitasVisitas: visitasVisitas
    }

    res.send(objRes);
}) 
