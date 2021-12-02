const express = require("express");
const router = express.Router();
const passport = require("passport");
const nodemailer = require("nodemailer");
const { Router } = require("express");
const twilioClient = require("twilio")(process.env.TWILIO_SID, process.env.TWILIO_TOKEN)

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

router.post("/send-mail", async (req, res, next) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: "feli.work99@gmail.com",
                pass: process.env.GMAIL_PSW
            }
        });
    
        await transporter.sendMail({
            from: "CONTRATADO",
            to: "feliparrondobastos@gmail.com",
            subject: "CONTRATADISIMO",
            html: "Mejor laburo del mundo para vosss"
        })
    
        res.send("todo ok!");
        
    } catch(err) {
        console.log(err)
    }
    
})

router.post("/send-sms", (req, res, next) => {
    try {
        twilioClient.messages.create({
        body: "hellou desde la compuu",
        from: "+14752529573",
        to: "+541134851960"
        });

        res.send("todo ok!");

    } catch(err) {
        res.send(err)
    }
})


module.exports = router;