const ServerError = require("../../error/ServerError");
const logger = require("../../logging/logger");
const Watchable = require("../../models/Watchable");

module.exports = async(req, res, next) => {
    logger.trace("Controller: watchable.update");

    try {
        let result = await Watchable.findByIdAndUpdate(params.id, req.body);
        res.status(200).json(result);
    } catch (err) {
        next(ServerError.badRequest(err));
    }
};