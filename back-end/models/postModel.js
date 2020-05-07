const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    garageObj: {
        type: Object,
        require: true
    }
})

module.exports = mongoose.model('vehicles', postSchema);
