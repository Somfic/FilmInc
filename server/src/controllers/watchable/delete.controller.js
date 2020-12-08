const ServerError = require("../../error/ServerError");
const logger = require("../../logging/logger");
const Watchable = require("../../models/Watchable");

module.exports = async(req, res, next) => {
    logger.trace("Controller: watchable.delete");

    try {
        let id = req.params.id;
        let result = await Watchable.findByIdAndDelete(id);
        res.status(200).json(result);
    } catch (err) {
        next(ServerError.badRequest(err));
    }
};