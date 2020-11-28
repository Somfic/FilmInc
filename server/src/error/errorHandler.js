const ServerError = require("./ServerError");
const logger = require("../logging/logger");

module.exports = (err, req, res, next) => {
	if (err instanceof ServerError) {
		logger.error(err.message);
		return res.status(err.code).json(err.message);
	}

	logger.error(`Unexpected exception: ${err}`);
	return res.status(500).json({ error: err.message });
};
