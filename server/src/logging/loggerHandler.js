const logger = require("../logging/logger");

module.exports = (req, res, next) => {
	let requestInfo = {
		authorization: req.headers.authorization,
		query: req.query,
		body: req.body,
		params: req.params,
	};

	logger.debug(
		`Incoming request: ${
			req.protocol + "://" + req.get("host") + req.originalUrl
		}`,
		requestInfo
	);
	next();
};
