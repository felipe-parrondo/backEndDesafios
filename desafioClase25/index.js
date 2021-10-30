const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo");
// const RedisStore = require("connect-redis")(session);
// const clientRedis = require("./redis/connection");
// const FileStore = require("session-file-store")(session); // <--- () ¿?

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.static("./public"));

const mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true };

app.use(
  session({
    store: MongoStore.create({
      mongoUrl: 'mongodb+srv://test-cidenet-user:W21DEdLRFgAGYZs9@cluster0.9pejj.mongodb.net?retryWrites=true&w=majority',
      mongoOptions,
    }),
    secret: "jashdoasdfa-jsas6d5a9_1s5d6as50a9s8d501*s+ad+sd+4as8fd",
    resave: false,
    saveUninitialized: false,
  })
);

app.get("/", async (req, res, next) => {
  req.session.counter = req.session.counter ? req.session.counter + 1 : 1;
  res.send(`Hola Mundo. Has estado aquí: ${req.session.counter} veces`);
});

app.listen(4000, () => {
  console.log("Server on port: ", 4000);
});