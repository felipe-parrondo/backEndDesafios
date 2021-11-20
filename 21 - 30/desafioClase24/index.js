const express = require("express");
const app = express();
const session = require("express-session");
const cookieParser = require("cookie-parser");

app.use(
  session({
    secret: "dbnÑASHIDÑahsñDASHaisbhiUAWEHDI46A5s4d56ASlñakshdLÑADHÑasdn",
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 60 * 1000
    }
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.static("./public"));

app.get("/login", (req, res, next) => {
  res.render("login.html")
})

app.get("/logout", (req, res, next) => {
  res.render("logout.html")
})

app.get("/signup", (req, res, next) => {
  res.render("register.html")
})

app.post("/signup", (req, res, next) => {
  if (!req.body.username || !req.body.password) res.render("unsuccesfulRegister.html");
  const { username } = req.body;
  req.session.user[username] = username;
  req.session.id[username] = username;
  res.cookie(`isRegistered${username}`, "true")
  .render("succesfulRegister.html");
});

app.post("/login", (req, res, next) => {
  if (!req.body.username || !req.body.password) res.render("unsuccesfulLogin.html");
  const { username } = req.body;
  if (req.session.user[username] == username) {
    res.render("succesfulLogin.html");
  }else{
    res.render("unsuccesfulLogin.html")
  }
});
app.post("/logout", (req, res, next) => {
  const { username } = req.body
  req.session.user[username] = null;
  res.render("succesfulLogout.html");
});

app.listen(4000, () => {
  console.log("Server on port: ", 4000);
});