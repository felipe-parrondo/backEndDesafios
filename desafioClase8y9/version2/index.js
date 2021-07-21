const express = require("express");
const app = express();
const routerProductos = express.Router();
const bodyParser = require("body-parser");
const handlebars = require("express-handlebars");
const myApi = require("./api/api.js");
const productos = myApi.laLista;
const Productos = myApi.laClase;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded());


//app.set("view engine", "handlebars");
//app.engine("handlebars", handlebars());

app.set("views", "./views")
app.set("view engine", "pug")


routerProductos.get("/", (req, res) =>{
    res.send(Productos.leer())
})

routerProductos.get("/:id", (req, res) => {
    let tempId = req.params.id
    res.send(Productos.leerId(tempId))
})

routerProductos.post("/", (req, res) => {
    Productos.guardar(req.body.title, req.body.price, req.body.thumbnail)
    res.redirect("/productos/carga")
})

routerProductos.put("/:id", (req, res) => {
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

//USO HTML

app.get("/productos/vista", (req, res) => {
    let verif;
    if(productos){
        verif = true;
    } else{
        verif = false;
    }
    res.render("productos", {productos: productos, verif: verif});
})

app.get("/productos/carga", (req, res) => {
    res.render("ingreso.pug")
})



app.use("/api/productos", routerProductos);

const PORT = 8080;
app.listen(PORT, () => {
    console.log("Servidor escuchando en el puerto " + PORT);
})