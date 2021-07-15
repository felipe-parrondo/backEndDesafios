const express = require("express");
const app = express();
const routerProductos = express.Router();
const bodyParser = require("body-parser");
const Productos = require("./api/api.js");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded());


app.use(express.static(__dirname + "/public"))

routerProductos.get("/", (req, res) =>{
    res.send(Productos.leer())
})

routerProductos.get("/:id", (req, res) => {
    let tempId = req.params.id
    res.send(Productos.leerId(tempId))
})

routerProductos.post("/", (req, res) => {
    res.send(Productos.guardar(req.body.title, req.body.price, req.body.thumbnail))
})

routerProductos.put(":id", (req, res) => {
    let tempObj = {
        title: req.body.title,
        price: req.body.price,
        thumbnail: req.body.thumbnail,
    }
    Productos.update(req.params.id, tempObj)
    
    res.send("Actualizado de forma correcta!")
})

routerProductos.delete("/:id", (req, res) => {
    res.send(Productos.delete(req.params.id));
})



app.use("/api/productos", routerProductos);

const PORT = 8080;
app.listen(PORT, () => {
    console.log("Servidor escuchando en el puerto " + PORT);
})