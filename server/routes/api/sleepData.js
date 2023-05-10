const express = require('express');
const router = express.Router();
const data = require("../../db/config");

router.get('/', async (req,res) => {
    const snapshot = await  data.get()
    const list = snapshot.docs.map((doc)=>doc.data())
    res.send(list)    
});


module.exports = router;