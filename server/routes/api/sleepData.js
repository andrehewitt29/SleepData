const express = require('express');
const router = express.Router();
// const userData = require("../../db/config");
const firebase = require("firebase-admin");

var serviceAccount = require("../../rnd-sleep-data-project-test-firebase-adminsdk-w1e0m-cb72d8ea51.json");

// Initialize Firebase
firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://rnd-sleep-data-project-test-default-rtdb.firebaseio.com"
});

const db = firebase.firestore();

//gets all data for a user
router.post('/', async (req,res) => {
    if (Object.keys(req.body).length > 0){
        const userData = db.collection("Users").doc("Users").collection(req.body.user.uid);
        const snapshot = await userData.get();
        const list = snapshot.docs.map((doc)=>doc.data());
        res.send(list);
    }
    else{
        res.send("Error: No Input Data");
    }
});

router.post('/add', async (req, res) => {
    const userData = db.collection("Users").doc("Users").collection(req.body.userData.uid);
    const body = req.body;
    const data = body.formData;
    const time = Date.now().toString();
    await userData.doc(time).set(data);
    res.send({ msg: data});
});

//deletes data based on user id and timedate
router.post('/remove{}',async (req, res) => {
    const body = req.body;
    const data = body.formData;
    
    res.send({ msg: data});
});

module.exports = router;