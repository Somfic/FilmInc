const mongoose = require('mongoose');

module.exports = mongoose.model('Showing', mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        required: true,
        default: Date.now()
    }
}));