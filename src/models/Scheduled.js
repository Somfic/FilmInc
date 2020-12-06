const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

module.exports = mongoose.model(
    "Scheduled",
    mongoose.Schema({
        watchableId: {
            type: ObjectId,
            required: true,
        },

        watchableTitle: {
            type: String,
            required: true,
        },

        date: {
            type: Date,
            required: true,
        },

        start: {
            type: String,
            required: true,
        },

        end: {
            type: String,
            required: true,
        },

        location: {
            type: String,
            required: true,
        },
    })
);