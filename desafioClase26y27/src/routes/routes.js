const express = require("express");
const router = express.Router();
const passport = require("passport");

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


module.exports = router;