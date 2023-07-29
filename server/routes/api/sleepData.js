const express = require('express');
const router = express.Router();
const userData = require("../../db/config");

router.get('/', async (req,res) => {
    const snapshot = await userData.get();
    const list = snapshot.docs.map((doc)=>doc.data());
    res.send(list);
});

router.post('/add', async (req, res) => {
    const data = req.body;
    await userData.add({ data });
    // res.send({ msg: data});
    res.send({ msg: auth.currentUser.email});
});

//dummy statement DELTE BEFORE PRODUCTION LIVE
router.get('/testUser', async (req, res) => {
    const data = req.body;
    console.log("called ");
    console.log(data);
    res.send(data);
});

module.exports = router;