const express = require('express')
const routerProductos = express.Router();
const productos = require('./api/productos.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded());


routerProductos.get('/', (req, res)=>{
    res.send((productos.leer().length !== 0) ? productos.leer() : {'error': 'no hay productos cargados'});
})

routerProductos.get('/:id', (req, res)=>{
    let producto = productos.leer()[req.params.id];
    res.send(
    (productos.leer().length - 1 >= parseInt(req.params.id))
    ? producto : {error: 'producto no encontrado'}); 
})

routerProductos.post('/', (req, res)=>{
    let title = req.body.title
    let price = req.body.price
    let thumbnail = req.body.thumbnail
    let nuevoProducto = productos.guardar(title, price, thumbnail)
    res.send(nuevoProducto)
})

routerProductos.put("/:id", (req, res) => {
    let act = req.body
    let tempId = req.params.id;
    let arr = productos.leer()
    let elementoTemp = arr.findIndex(i => i.id == tempId)
    arr[elementoTemp] = act;
    res.send("Actualizado de manera exitosa!");
})

routerProductos.delete("/:id", (req, res) => {
    let tempId = req.params.id;
    let arr = productos.leer()
    let elementoTemp = arr.findIndex(i => i.id == tempId)
    arr[elementoTemp] = {};
    res.send("elemento borrado de forma exitosa!");
})

app.use("/api/productos", routerProductos);


const PORT = 8080;
const server = app.listen(PORT, () => (
    console.log(`El servidor se abrio en: http://localhost:${server.address().port}/`)
    ));

server.on('error', error => console.log(error))
