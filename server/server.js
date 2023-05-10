//This is where firebase will be setup
const express = require('express')
const app = express()
const cors = require("cors");
const path = require('path');
const sleepData = require('./routes/api/sleepData');

app.use(express.json());
app.use(cors());

app.use('/api/sleepData', sleepData);

app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]})
})

app.listen(5000, () => {console.log("Server started on port 5000")}) // Server Port