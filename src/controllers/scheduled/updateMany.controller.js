const ServerError = require("../../error/ServerError");
const logger = require("../../logging/logger");
const Scheduled = require("../../models/Scheduled");

module.exports = async(req, res, next) => {
    logger.trace("Controller: scheduled.updateMany");

    try {
        let results = [];

        req.body.forEach(async(item) => {
            results.push(
                await Scheduled.findByIdAndUpdate(item._id, item, {
                    upsert: true,
                })
            );
        });

        res.status(200).json(results);
    } catch (err) {
        next(ServerError.badRequest(err));
    }
};