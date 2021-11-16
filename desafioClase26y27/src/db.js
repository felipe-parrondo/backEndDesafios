require('dotenv').config()
const mongoose = require("mongoose");

mongoose.connect(process.env.URI, {})
    .then(db => {
        console.log("conectado")
    })
    .catch(err => {
        throw err
    });