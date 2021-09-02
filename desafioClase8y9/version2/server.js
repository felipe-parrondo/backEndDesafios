//MODULOS

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
const objAuth = require("./api/auth.js");
const Auth = objAuth.Auth;


//CUSTOM M-WARES --- SIMULACIÓN DE AUTH

var isAdminVerif = function (req, res, next) {
    if(Auth.isAdmin == true){
        next()
    } else {
        res.status(403).send(new Error("Ruta no permitida, falta de permisos"));
    }
}

//M-WARES

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
routerProductos.use(isAdminVerif);


//HBS Y CARPETA PUBLIC

app.engine("handlebars", handlebars());
app.set("view engine", "handlebars");

app.use(express.static("./views"));


//ENDPOINTS

routerProductos.get("/", (req, res) =>{
    res.send(Productos.leer());
});

routerProductos.get("/:id", (req, res) => {
    let tempId = req.params.id;
    res.send(Productos.leerId(tempId));
});

routerProductos.post("/", (req, res) => {
    Productos.guardar(req.body.title, req.body.price, req.body.thumbnail);
    res.redirect("/productos/vista");
});

routerProductos.put("/:id", (req, res) => {
    let tempObj = {
        title: req.body.title,
        price: req.body.price,
        thumbnail: req.body.thumbnail,
    }
    Productos.update(req.params.id, tempObj);
    
    res.send("Actualizado de forma correcta!");
});

routerProductos.delete("/:id", (req, res) => {
    res.send(Productos.delete(req.params.id));
});


//VISUALIZACIÓN DEL FRONT

app.get("/productos/vista", (req, res) => {   //PENDIENTE: IMPLEMENTAR ESTE ENDPOINT EN "/"
    let verif;
    if(productos){
        verif = true;
    } else{
        verif = false;
    }
    res.render("productos", {productos: productos, verif: verif});
})

app.get("/carrito/vista", (req, res) => {
    res.render("carrito")
})


//ROUTER

app.use("/productos", routerProductos);


//PUERTO

const PORT = 8080;
http.listen(PORT, () => {
    console.log("Servidor escuchando en el puerto " + PORT);
});


//SOCKET.IO

io.on("connection", (socket) => {
    //console.log("Usuario conectado");
    //socket.emit("miMensaje", "Conectado!")
    socket.on("cargaProductos", (tempObj) => {
        try{
            Productos.guardar(tempObj.title, tempObj.price, tempObj.thumbnail);
        } catch(e) {
            console.log(e);
        }
    });
});

