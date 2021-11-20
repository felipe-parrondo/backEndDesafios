const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io") (http);

app.use(express.static("./public"));


app.get("/", (req, res) => {
    res.sendFile(__dirname + "index.html");
});

http.listen(8080, () => console.log("Servidor en el puerto 8080"));

io.on("connection", (socket) => {
    console.log("Usuario conectado");
    socket.emit("miMensaje", "Conectado!")
});