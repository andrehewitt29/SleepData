const express = require('express');
const router = express.Router();
const userData = require("../../db/config");

const firebaseAdmin = require("firebase-admin");

router.get('/', async (req,res) => {
    const snapshot = await userData.get();
    const list = snapshot.docs.map((doc)=>doc.data());
    res.send(list);
});

router.post('/add', async (req, res) => {
    const data = req.body;
    await userData.add({ data });
    res.send({ msg: data});
});

router.post('/signup', async (req, res) =>{
    const user = {
        email: req.body.email,
        password: req.body.password
    };
    //Check if user already exists and make their account if it does
    firebaseAdmin.auth().getUserByEmail(user.email).then(user => { 
        res.send("User Already Exists");
    }).catch(err => { 
        if (err.code === 'auth/user-not-found') {
            const userResponse = firebaseAdmin.auth().createUser({
                email: user.email,
                password: user.password,
                emailVerified: false,
                disabled: false
            });

            res.json(userResponse);
        }
      })
});


module.exports = router;