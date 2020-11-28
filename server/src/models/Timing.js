const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
	startAt: {
		type: String,
	},

	endAt: {
		type: String,
	},
});
