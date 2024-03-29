const ServerError = require("../../error/ServerError");
const logger = require("../../logging/logger");
const Watchable = require("../../models/Watchable");

module.exports = async(req, res, next) => {
    logger.trace("Controller: watchable.create");

    try {
        let result = await Watchable.create(req.body);
        return res.status(201).json(result);
    } catch (err) {
        return next(ServerError.badRequest(err));
    }
};