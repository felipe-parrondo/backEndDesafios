const { AUTHENTICATION } = require("../config/globals")
const admin = require("firebase-admin");

const serviceAccount = require(`${AUTHENTICATION}`)

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://coder-53b1e.firebaseio.com"
});

module.exports = admin.firestore();