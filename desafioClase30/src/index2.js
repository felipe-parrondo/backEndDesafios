require('dotenv').config();
const express = require("express");
const app = express();
const engine = require("ejs-mate");
const path = require("path");
const routes = require("./routes/routes");
const passport = require("passport");
const session = require("express-session");
const flash = require("connect-flash");

//initializations
require("./db");
require("./auth/local");

//settings
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", engine);
app.set("view engine", "ejs");

//middlewares
app.use(express.urlencoded({extended: false}));
app.use(session({
    secret: "uhou123io3h4!#IH!4jp1i23j4p1ihpIOERJGOEJG1234",
    resave: false,
    saveUninitialized: false
}))
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
    app.locals.signupM = req.flash("signupM");
    app.locals.signinM = req.flash("signinM");
    app.locals.user = req.user;
    next();
});

//routes
app.use("/", routes);

app.listen(process.env.PORT2, () => {
    console.log(`Server escuchando en el puerto ${process.env.PORT2}`);
});