const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
    res.send("<h1> Hola desde el server 1 en puerto 8080 </h1>");
});

app.listen(8080, () => {
    console.log("escuchando en el puerto 8080")
})