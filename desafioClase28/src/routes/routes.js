const express = require("express");
const router = express.Router();
const passport = require("passport");
const { fork } = require("child_process");

const isAuthenticated = (req, res, next) => {
    if(req.isAuthenticated()) {
        return next()
    } else {
        res.redirect("/signin")
    }
}

router.get("/", (req, res, next) => {
    res.render("index")
});

router.get("/signin", (req, res, next) => {
    res.render("signin")
});

router.post("/signin", passport.authenticate("local-signin", {successRedirect: "/profile", failureRedirect: "/signin"}));


router.get("/signup", (req, res, next) => {
    res.render("signup")
});

router.post("/signup", passport.authenticate("local-signup", {successRedirect: "/profile", failureRedirect: "/signup"}));

router.get("/logout", (req, res, next) => {
    req.logout();
    res.redirect("/")
});

router.get("/profile", isAuthenticated, (req, res, next) => {
    res.render("profile");
});

router.get('/auth/facebook', passport.authenticate('facebook'));

router.get('/auth/facebook/callback', passport.authenticate('facebook', { successRedirect: '/profile', failureRedirect: '/login' }));

router.get("/info", (req, res, next) => {
    const info = {
        argv : process.argv,
        ruta: process.execPath,
        carpeta: process.cwd,
        so: process.platform,
        memoria: process.memoryUsage
    }

    res.send(info)
})

router.get("/random", (req, res, next) => {
    const forked = fork("child.js")

    forked.send({"comunication" : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]});
})


module.exports = router;