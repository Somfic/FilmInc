const ServerError = require("../../error/ServerError");
const logger = require("../../logging/logger");
const Watchable = require("../../models/Watchable");

module.exports = async(req, res, next) => {
    logger.trace("Controller: watchable.list");

    try {
        let result = await Watchable.find();
        return res.status(200).json(result);
    } catch (err) {
        return next(ServerError.badRequest(err));
    }
};