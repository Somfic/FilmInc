const mongoose = require("mongoose");

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
			startAt: {
				type: Date,
				required: true,
			},

			endAt: {
				type: Date,
				required: true,
			},
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
