"use strict";

var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var routerProductos = express.Router();
var bodyParser = require("body-parser");
var handlebars = require("express-handlebars");
var myApi = require("./api/api.js");
var productos = myApi.laLista;
var Productos = myApi.laClase;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.engine("handlebars", handlebars());
app.set("view engine", "handlebars");

app.use(express.static("./views"));

routerProductos.get("/", function (req, res) {
    res.send(Productos.leer());
});

routerProductos.get("/:id", function (req, res) {
    var tempId = req.params.id;
    res.send(Productos.leerId(tempId));
});

routerProductos.post("/", function (req, res) {
    Productos.guardar(req.body.title, req.body.price, req.body.thumbnail);
    res.redirect("/productos/vista");
});

routerProductos.put("/:id", function (req, res) {
    var tempObj = {
        title: req.body.title,
        price: req.body.price,
        thumbnail: req.body.thumbnail
    };
    Productos.update(req.params.id, tempObj);

    res.send("Actualizado de forma correcta!");
});

routerProductos.delete("/:id", function (req, res) {
    res.send(Productos.delete(req.params.id));
});

//USO HTML

app.get("/productos/vista", function (req, res) {
    var verif = void 0;
    if (productos) {
        verif = true;
    } else {
        verif = false;
    }
    res.render("productos", { productos: productos, verif: verif });
});

app.use("/api/productos", routerProductos);

var PORT = 8080;
http.listen(PORT, function () {
    console.log("Servidor escuchando en el puerto " + PORT);
});

io.on("connection", function (socket) {
    console.log("Usuario conectado");
    //socket.emit("miMensaje", "Conectado!")
    socket.on("cargaProductos", function (tempObj) {
        try {
            Productos.guardar(tempObj.title, tempObj.price, tempObj.thumbnail);
        } catch (e) {
            console.log(e);
        }
    });
});
