const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

module.exports = mongoose.model(
    "UserAccount",
    mongoose.Schema({
        uid: {
            type: Number,
            required: true,
            min: 0,
            max: 9999,
        },

        hash: {
            type: String,
            required: true,
        },
    })
);