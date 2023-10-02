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

//gets all personal data for a user
router.post('/personal', async (req,res) => {
  if (Object.keys(req.body).length > 0){
      const userData = db.collection("UserPersonal").doc("Users").collection(req.body.user.uid);
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
    //make a new date object
    const time = new Date();
    //set the time parts to 0 as they arnt needed
    time.setHours(0);
    time.setMinutes(0);
    time.setSeconds(0);
    time.setMilliseconds(0);
    
    await userData.doc(time.toDateString()).set(data);
    res.send({ msg: data});
});

router.post('/addPersonal', async (req, res) => {
  console.log(req.body);
  const userData = db.collection("UserPersonal").doc("Users").collection(req.body.userData.uid);
  const body = req.body;
  const data = body.personalData;
  
  await userData.doc("PersonalData").set(data);
  res.send({ msg: data});
});

router.post('/addSettings', async (req, res) => {
  const userData = db.collection("UserSettings").doc("Users").collection(req.body.userData.uid);
  const body = req.body;
  const data = body.personalData;
  
  await userData.doc("Settings").set(data);
  res.send({ msg: data});
});

//deletes data based on user id and timedate
router.post('/removeUser',async (req, res) => {
    if (Object.keys(req.body).length > 0){
        const response = deleteUserCollection(req.body.uid, 200);//the number is how much is being deleted
        res.send(response);
    }
    else{
        res.send("Error: No Input Data");
    }
});

//deletes data based on user id and timedate
router.post('/remove',async (req, res) => {
    if (Object.keys(req.body).length > 0){
        const userData = db.collection("Users").doc("Users").collection(req.body.uid).doc(req.body.timedate);
        const response = await userData.delete();
        res.send(response);
    }
    else{
        res.send("Error: No Input Data");
    }
});

async function deleteUserCollection(uid, batchSize) {
    const collectionRef = db.collection("Users").doc("Users").collection(uid);
    const query = collectionRef.orderBy('__name__').limit(batchSize);
  
    return new Promise((resolve, reject) => {
      deleteQueryBatch(query, resolve).catch(reject);
    });
  }
  
  async function deleteQueryBatch(query, resolve) {
    
    const snapshot = await query.get();
    
    const batchSize = snapshot.size;
    
    if (batchSize == 0) {
      // When there are no documents left, we are done
      resolve();
      return;
    }
  
    // Delete documents in a batch
    const batch = db.batch();
    snapshot.docs.forEach((doc) => {
      batch.delete(doc.ref);
    });
    await batch.commit();
  
    // Recurse on the next process tick, to avoid
    // exploding the stack.
    process.nextTick(() => {
      deleteQueryBatch(query, resolve);
    });
  }
  

module.exports = router;