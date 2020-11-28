const logger = require("../logging/logger");

module.exports = (req, res, next) => {
	let requestInfo = {};

	if (isPopulated(req.headers.authorization)) {
		requestInfo.authorization = req.headers.authorization;
	}

	if (isPopulated(req.query)) {
		requestInfo.query = req.query;
	}

	if (isPopulated(req.body)) {
		requestInfo.body = req.body;
	}

	if (isPopulated(req.params)) {
		requestInfo.params = req.params;
	}

	logger.debug(
		`Incoming request: ${req.method} ${
			req.protocol + "://" + req.get("host") + req.originalUrl
		}`,
		requestInfo
	);
	next();
};

function isPopulated(object) {
	return object != null && Object.keys(object).length > 0;
}
