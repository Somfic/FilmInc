const ServerError = require("../../error/ServerError");
const logger = require("../../logging/logger");
const Watchable = require("../../models/Watchable");

module.exports = async (req, res, next) => {
	logger.debug("Controller: watchable/list");

	try {
		let watchables = await Watchable.find();
		res.status(200).json(watchables);
	} catch (err) {
		next(ServerError.badRequest(err));
	}
};