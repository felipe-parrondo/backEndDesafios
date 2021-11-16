require("dotenv").config();
const passport = require("passport");
const facebookStrategy = require("passport-facebook").Strategy;

const User = require("../model/user");

passport.use(new facebookStrategy({
    clientID: process.env.CLIENT_ID_FB,
    clientSecret: process.env.CLIENT_PSW_FB,
    callbackURL: "http://localhost:8080/auth/facebook"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({facebookId: profile.id}, function(err, user) {
      if (err) { return done(err); }
      done(null, user);
    });
  }
));