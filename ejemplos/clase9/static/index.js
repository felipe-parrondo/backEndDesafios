const bodyParser = require("body-parser");
const multer = require("multer");
//const upload = multer({dest: "uploads/"})
const express = require("express");
const app = express();
const routerMascotas = express.Router();
const routerPersonas = express.Router();

const PORT = 8080;

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

var personas = []
var mascotas = []

//Mascotas
routerMascotas.get("/list", (req, res) => {
    res.send(mascotas);
})

routerMascotas.post("/new", (req, res) => {
    mascotas.push(req.body);
    res.json(mascotas);
})

//Personas
routerPersonas.get("/list", (req, res) => {
    res.send(personas);
})

routerPersonas.post("/new", (req, res) => {
    personas.push(req.body);
    res.json(personas);
})


app.use("/mascotas", routerMascotas);
app.use("/personas", routerPersonas);


app.listen(PORT, () => {
    console.log("Servidor escuchando en el puerto " + PORT);
})