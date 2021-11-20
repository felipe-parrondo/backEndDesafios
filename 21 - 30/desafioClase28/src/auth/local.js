require("dotenv").config();
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const facebookStrategy = require("passport-facebook").Strategy;

const User = require("../model/user");

passport.serializeUser((user, done) => {
    done(null, user.id);
})

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
})

passport.use("local-signup", new localStrategy ({
    usernameField: "email",
    passwordField: "password",
    passReqToCallback: true
}, async (req, email, password, done) => {
    const search = await User.findOne({email: email});

    if(search) {
        return done(null, false, req.flash("signupM", "el email ya existe"));
    } else {
        const user = new User();
        user.email = email;
        user.password = password;
        await user.save();
        done(null, user)
    }
}));

passport.use("local-signin", new localStrategy ({
    usernameField: "email",
    passwordField: "password",
    passReqToCallback: true
}, async (req, email, password, done) => {
    const searchU = await User.findOne({email: email})
    const searchP = await User.findOne({password: password});

    if(!searchU){
        return done(null, false, req.flash("signinM", "el email no existe"))
    }
    if(!searchP) {
        return done(null, false, req.flash("signinM", "la contraseña es incorrecta"))
    }

    const user = searchU;
    done(null, user);
}));

passport.use(new facebookStrategy({
    clientID: process.argv[2] || process.env.CLIENT_ID_FB,
    clientSecret: process.argv[3] || process.env.CLIENT_PSW_FB,
    callbackURL: "http://localhost:8080/auth/facebook"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({facebookId: profile.id}, function(err, user) {
      if (err) { return done(err); }
      done(null, user);
    });
  }
));