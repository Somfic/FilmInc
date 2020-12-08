const ServerError = require("../../error/ServerError");
const logger = require("../../logging/logger");
const Scheduled = require("../../models/Scheduled");

module.exports = async(req, res, next) => {
    logger.trace("Controller: scheduled.updateMany");

    try {
        let results = [];

        req.body.forEach(async(item) => {
            if (item._id) {
                results.push(await Scheduled.findByIdAndUpdate(item._id, item));
            } else {
                results.push(await Scheduled.create(item));
            }
        });

        res.status(200).json(results);
    } catch (err) {
        next(ServerError.badRequest(err));
    }
};