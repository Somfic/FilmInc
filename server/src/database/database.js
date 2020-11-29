const mongoose = require("mongoose");
const config = require("../config/config");
const logger = require("../logging/logger");

module.exports = {
	connect() {
		// If database url is not set, throw a warning
		if (!config.databaseUrl) {
			logger.warning(
				"Environment variable DB_CONNECTION has not been set"
			);
		}

		// Connect through mongoose
		mongoose.connect(
			config.databaseUrl,
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useFindAndModify: false,
				useCreateIndex: true,
			},
			(err) => {
				if (err) {
					logger.error("Could not connect to database", err);
				} else {
					logger.info("Connected to database");
				}
			}
		);

		// Setup mongoose logging
		mongoose.set("debug", (collection, method, query, doc) => {
			logger.trace(`Database: ${collection}.${method}`, query);
		});
	},
};
