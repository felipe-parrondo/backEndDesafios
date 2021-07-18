// <script src="https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.js"></script>

const express = require("express");
const app = express();
const handlebars = require("express-handlebars");


//app.set("views", "./views");
app.set("view engine", "handlebars");
app.engine("handlebars", handlebars());

var productos = [
    {
        title: "objetoDefaultPrueba",
        price: 69,
        thumbnail: "fotoPrueba",
        id: 1
    },
    {
        title: "objetoDefaultPrueba2",
        price: 70,
        thumbnail: "fotoPrueba",
        id: 2
    },
];

app.get("/productos/vista", (req, res) => {
    res.render("productos", {productos: productos});
})


const PORT = 8080;

app.listen(PORT, () => console.log("Servidor escuchando en el puerto", PORT));
