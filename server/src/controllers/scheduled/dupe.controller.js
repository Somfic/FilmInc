const ServerError = require("../../error/ServerError");
const logger = require("../../logging/logger");
const Scheduled = require("../../models/Scheduled");

module.exports = async(req, res, next) => {
    logger.trace("Controller: scheduled.dupe");

    try {
        let id = req.params.id;
        let originalResult = await Scheduled.findById(id);
        let original = originalResult._doc;
        delete original._id;
        let result = await Scheduled.create(original);

        return res.status(200).json(result);
    } catch (err) {
        return next(ServerError.badRequest(err));
    }
};