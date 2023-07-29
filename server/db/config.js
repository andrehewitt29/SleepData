const firebase = require("firebase-admin");
const env = require("dotenv").config().parsed;

var serviceAccount = require("../rnd-sleep-data-project-test-firebase-adminsdk-w1e0m-cb72d8ea51.json");

const firebaseConfig = {
    apiKey: env.REACT_APP_apikey,
    authDomain: env.REACT_APP_authdomain,
    databaseURL: env.REACT_APP_databaseurl,
    projectId: env.REACT_APP_projectid,
    storageBucket: env.REACT_APP_storagebucket,
    messagingSenderId: env.REACT_APP_messagesenderid,
    appId: env.REACT_APP_apiid
};

// Initialize Firebase
firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://rnd-sleep-data-project-test-default-rtdb.firebaseio.com"
});
const db = firebase.firestore();
const data = db.collection("users");
module.exports= data;