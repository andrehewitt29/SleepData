const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const app = express();

//Middleware
app.use(express.json());

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')))

app.post('/subscribe', (req, res) =>{
    const {email, js} = req.body;

    const mcData = {
        members: [{
            email_address: email,
            status: 'subscribed'
        }]
    }

    const mcDataPost = JSON.stringify(mcData);

    const options = {
        url: 'https://us8.api.mailchimp.com/3.0/lists/3576522b16',
        method: 'POST',
        headers: {
            Authorization: process.env.REACT_APP_EMAIL_AUTH 

        },
        body: mcDataPost
    }
    if(email){ 
        request(options, (err, response, body)=>{
            if(err){
                res.json({error: err})
            }else{
                if(js){
                    res.sendStatus(200);
                }else{
                    res.status(404).send({message: 'Failed'})
                }
            }
        })
    }else{
        res.status(404).send({message: 'Failed'})
    }

})

//const PORT = process.env.PORT ||8080;

app.listen(8080, () => {console.log("Server started on port 8080")}) // Server Port