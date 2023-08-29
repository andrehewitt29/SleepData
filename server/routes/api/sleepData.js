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
router.get('/', async (req,res) => {
    if (Object.keys(req.body).length > 0){
        const userData = db.collection("Users").doc("Users").collection(req.body.uid);
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
router.post('/removeUser',async (req, res) => {
    if (Object.keys(req.body).length > 0){
        deleteUserCollection(req.body.uid, 200);//the number is how much is being deleted
        res.send("Done");
    }
    else{
        res.send("Error: No Input Data");
    }
});

//deletes data based on user id and timedate
router.post('/remove{}',async (req, res) => {
    if (Object.keys(req.body).length > 0){
        // const userData = db.collection("Users").doc("Users").collection(req.body.uid);
        // const response = await userData.delete();
        // const list = snapshot.docs.map((doc)=>doc.data());
        res.send(list);
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