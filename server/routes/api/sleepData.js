const express = require('express');
const router = express.Router();
const userData = require("../../db/config");

router.get('/', async (req,res) => {
    const snapshot = await userData.get();
    const list = snapshot.docs.map((doc)=>doc.data());
    res.send(list);
});

router.post('/add', async (req, res) => {
    const body = req.body;
    const data = body.formData;
    await userData.doc("Users").collection(body.userData.uid).doc(Date.now().toString()).set(data);
    res.send({ msg: data});
});

//dummy statement DELTE BEFORE PRODUCTION LIVE
router.post('/testUser', async (req, res) => {
    const data = req.body;
    console.log(data.userData.uid);
    console.log(data.formData);
    res.send(data);
});

module.exports = router;