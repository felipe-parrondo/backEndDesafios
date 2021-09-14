//MODULES
const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const bodyParser = require("body-parser");
const fs = require("fs");

//MIDDLE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static("./public"));

//CODE
app.get("/", (req, res) => {
  res.render("index.html");
});

//SERVER LISTEN
const PORT = 8080;
http.listen(PORT, () => {
  console.log("Servidor escuchando en el puerto " + PORT);
});

//WEBSOCKET
var mensajes = [];

io.on("connection", socket => {
  fs.readFile("./mensajes.txt", "utf-8", function(e, data) {
    if (data) {
      let mensajesViejos = JSON.parse(data);
      io.emit("mensajesGuardados", mensajesViejos);
    }
  });

  socket.on("mensajeNuevo", mnjs => {
    mensajes.push(mnjs);

    let storageMensajes = JSON.stringify(mensajes);

    fs.writeFileSync("./mensajes.txt", storageMensajes);

    io.sockets.emit("mensajeNuevoEmit", mnjs);

    console.log(mensajes);
  });
});
