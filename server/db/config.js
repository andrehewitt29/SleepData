const firebase = require("firebase-admin");

var collection = "Users";

var serviceAccount = require("../rnd-sleep-data-project-test-firebase-adminsdk-w1e0m-cb72d8ea51.json");

// Initialize Firebase
firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://rnd-sleep-data-project-test-default-rtdb.firebaseio.com"
});

const db = firebase.firestore();
const data = db.collection(collection);
module.exports= data;