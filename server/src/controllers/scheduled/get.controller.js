const ServerError = require("../../error/ServerError");
const logger = require("../../logging/logger");
const Scheduled = require("../../models/Scheduled");

module.exports = async(req, res, next) => {
    logger.trace("Controller: scheduled.get");

    try {
        let id = req.params.id;
        let result = await Scheduled.findById(id);
        return res.status(200).json(result);
    } catch (err) {
        return next(ServerError.badRequest(err));
    }
};