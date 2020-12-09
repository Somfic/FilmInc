const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

module.exports = mongoose.model(
    "UserAccount",
    mongoose.Schema({
        uid: {
            type: String,
            required: true,
            minLength: 4,
            maxLength: 4,
            unique: true,
        },

        hash: {
            type: String,
            required: true,
        },

        name: {
            type: String,
            required: true,
        },

        isAdmin: {
            type: Boolean,
            required: true,
            default: false,
        },
    })
);