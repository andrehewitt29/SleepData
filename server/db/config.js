const firebase = require("firebase-admin");
const env = require("dotenv").config();

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
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const data = db.collection("test_data");
module.exports= data;