const ServerError = require("../../error/ServerError");
const logger = require("../../logging/logger");
const Scheduled = require("../../models/Scheduled");

module.exports = async(req, res, next) => {
    logger.trace("Controller: scheduled.delete");

    try {
        let id = req.params.id;
        let result = await Scheduled.findByIdAndDelete(id);
        res.status(200).json(result);
    } catch (err) {
        next(ServerError.badRequest(err));
    }
};