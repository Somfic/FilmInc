const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

module.exports = mongoose.model(
    "Scheduled",
    mongoose.Schema({
        watchableId: {
            type: ObjectId,
            required: true,
        },

        startTime: {
            type: Date,
            required: true,
        },

        endTime: {
            type: Date,
        },

        specials: {
            type: Array,
            required: true,
        },
    })
);