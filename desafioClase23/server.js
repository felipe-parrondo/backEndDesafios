//MODULES
const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const bodyParser = require("body-parser");
const fs = require("fs");

//NORMALIZR
const normalizr = require("normalizr")
const normalize = normalizr.normalize
const denormalize = normalizr.denormalize
const schema = normalizr.schema

const email = new schema.Entity("email");
const fecha = new schema.Entity("fecha");
const mensaje = new schema.Entity("mensaje", {
    sender: email,
    date: fecha
});
const mensajeLog = new schema.Entity("mensajeLog", {
    log: [mensaje]
});

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

            let denormalizedLog = denormalize(mensajesViejos.data, mensajeLog, mensajesViejos.entities)

            io.emit("mensajesGuardados", normalizedLog);
        }
    });

    socket.on("mensajeNuevo", mnjs => {
        mensajes.push(mnjs);

        let storageMensajes = JSON.stringify(mensajes);

        let normalizedLog = normalize(storageMensajes, mensajeLog);

        fs.writeFileSync("./mensajes.txt", normalizedLog);

        io.sockets.emit("mensajeNuevoEmit", mnjs);

        console.log(mensajes);
    });
});
