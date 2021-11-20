const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io") (http);
const routerProductos = express.Router();
const bodyParser = require("body-parser");
const handlebars = require("express-handlebars");
const myApi = require("./api/api.js");
const productos = myApi.laLista;
const Productos = myApi.laClase;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded());


app.engine("handlebars", handlebars());
app.set("view engine", "handlebars");

app.use(express.static("./views"));


routerProductos.get("/", (req : any, res : any) =>{
    res.send(Productos.leer());
});

routerProductos.get("/:id", (req : any, res : any) => {
    let tempId = req.params.id;
    res.send(Productos.leerId(tempId));
});

routerProductos.post("/", (req : any, res : any) => {
    Productos.guardar(req.body.title, req.body.price, req.body.thumbnail);
    res.redirect("/productos/vista");
});

routerProductos.put("/:id", (req : any, res : any) => {
    let tempObj = {
        title: req.body.title,
        price: req.body.price,
        thumbnail: req.body.thumbnail,
    }
    Productos.update(req.params.id, tempObj);
    
    res.send("Actualizado de forma correcta!");
});

routerProductos.delete("/:id", (req : any, res : any) => {
    res.send(Productos.delete(req.params.id));
});

//USO HTML

app.get("/productos/vista", (req : any, res : any) => {
    let verif;
    if(productos){
        verif = true;
    } else{
        verif = false;
    }
    res.render("productos", {productos: productos, verif: verif});
});



app.use("/api/productos", routerProductos);

const PORT = 8080;
http.listen(PORT, () => {
    console.log("Servidor escuchando en el puerto " + PORT);
});

io.on("connection", (socket : any) => {
    console.log("Usuario conectado");
    socket.on("cargaProductos", (tempObj : any) => {
        try{
            Productos.guardar(tempObj.title, tempObj.price, tempObj.thumbnail);
        } catch(e) {
            console.log(e)
        }
    })
});