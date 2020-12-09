const ServerError = require("../../error/ServerError");
const logger = require("../../logging/logger");
const Watchable = require("../../models/Watchable");

module.exports = async(req, res, next) => {
    logger.trace("Controller: watchable.update");

    try {
        let id = req.params.id;
        let result = await Watchable.findByIdAndUpdate(id, req.body);
        return res.status(200).json(result);
    } catch (err) {
        return next(ServerError.badRequest(err));
    }
};