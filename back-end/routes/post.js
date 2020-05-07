const express = require('express');
const app = express();
const Post = require('../models/postModel');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/', async (req, res) => {
    try {
        const savedPost = await Post.findOne({quoteNumber: req.body.quoteNumber});
        const newValues = {$set: {quoteNumber: req.body.quoteNumber, verArr: savedPost.vehArr, garageObj: req.body.garage}}
        Post.updateOne({quoteNumber: req.body.quoteNumber}, newValues, function(err, res) {
            if(err) console.log(err);
        });
        res.json(savedPost);
    } catch(err) {
        res.json({message: err});
    }
});

module.exports = app;