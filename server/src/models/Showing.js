const mongoose = require("mongoose");
const Timing = require("./Timing");

module.exports = mongoose.model(
	"Showing",
	mongoose.Schema({
		title: {
			type: String,
			required: true,
		},

		description: {
			type: String,
			required: true,
		},

		posterUrl: {
			type: String,
		},

		timing: {
			type: Timing,
			required: true,
		},

		seats: [
			{
				location: {
					x: {
						type: Number,
						required: true,
					},

					y: {
						type: Number,
						required: true,
					},
				},

				isOccupied: {
					type: Boolean,
					required: true,
					default: false,
				},
			},
		],
	})
);
