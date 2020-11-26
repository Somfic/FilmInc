const ServerError = require("../../error/ServerError");
const logger = require("../../logging/logger");
const Showing = require("../../models/Showing");

module.exports = async (req, res, next) => {
	if (req.query.id) {
		next();
		return;
	}

	logger.trace("Controller: showings/list");

	try {
		let showings = await Showing.find();
		res.status(200).json(showings);
	} catch (err) {
		next(ServerError.badRequest(err));
	}
};
