const mongoose = require("mongoose");

module.exports = mongoose.model(
	"Watchable",
	mongoose.Schema({
		title: {
			type: String,
			required: true,
		},

		description: {
			type: String,
			required: true,
		},

		poster: {
			type: String,
		},

		genres: {
			type: Array,
			required: true,
		},

		length: {
			type: Number,
			required: true,
		},

		classification: {
			type: String,
			required: true,
			default: "AL",
		},
	})
);
