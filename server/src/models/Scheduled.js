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
            type: String,
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

        rows: {
            type: Number,
            required: true,
            default: 10,
        },

        columns: {
            type: Number,
            required: true,
            default: 35,
        },

        takenTickets: {
            type: Array,
            required: true,
            default: [],
        },
    })
);