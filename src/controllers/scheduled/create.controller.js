const ServerError = require("../../error/ServerError");
const logger = require("../../logging/logger");
const Scheduled = require("../../models/Scheduled");

module.exports = async(req, res, next) => {
    logger.trace("Controller: scheduled.create");

    try {
        let result = await Scheduled.create(req.body);
        res.status(200).json(result);
    } catch (err) {
        next(ServerError.badRequest(err));
    }
};