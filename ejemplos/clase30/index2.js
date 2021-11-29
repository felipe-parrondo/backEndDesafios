const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
    res.send("<h1> Hola desde el server 2 en puerto 8081 </h1>");
});

app.listen(8081, () => {
    console.log("escuchando en el puerto 8081")
})