const logger = require("../../logging/logger");
const Showing = require("../../models/Showing");

module.exports = async (req, res, next) => {
	logger.trace("Controller: showings/detail");

	res.json("hello?");
};
