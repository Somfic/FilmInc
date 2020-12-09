const ServerError = require("../../error/ServerError");
const logger = require("../../logging/logger");
const Watchable = require("../../models/Watchable");

module.exports = async(req, res, next) => {
    logger.trace("Controller: watchable.get");

    try {
        let id = req.params.id;
        let result = await Watchable.findById(id);
        return res.status(200).json(result);
    } catch (err) {
        return next(ServerError.badRequest(err));
    }
};