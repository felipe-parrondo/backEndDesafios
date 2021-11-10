require('dotenv').config();
const express = require("express");
const app = express();
const engine = require("ejs-mate");
const path = require("path");
const routes = require("./routes/routes")

app.set("views", path.join(__dirname, "views"));
app.engine("ejs", engine);
app.set("view engine", "ejs");
app.set("port", process.env.PORT || 8080)

app.use("/", routes)

app.listen(app.get("port"), () => {
    console.log(`Server escuchando en el puerto ${app.get("port")}`);
})