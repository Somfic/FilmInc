const ServerError = require("../../error/ServerError");
const logger = require("../../logging/logger");
const Watchable = require("../../models/Watchable");

module.exports = async(req, res, next) => {
    logger.trace("Controller: watchable.updateMany");

    try {
        let result = await Watchable.updateMany(req.body);
        res.status(200).json(result);
    } catch (err) {
        next(ServerError.badRequest(err));
    }
};