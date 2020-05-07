const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const port = 5000;
const post = require('./routes/post');
require('dotenv').config();

app.use('/GarageInfo', post);

app.use(bodyParser.json());

mongoose.connect(
    process.env.DB_CONNECTION, 
    {useNewUrlParser: true}, () => {
    console.log('connected to db');
});

app.listen(port, () => {
    console.log('listening on port 5000');
});