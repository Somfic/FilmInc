const ServerError = require("../../error/ServerError");
const logger = require("../../logging/logger");
const Watchable = require("../../models/Watchable");

module.exports = async(req, res, next) => {
    logger.trace("Controller: watchable.updateMany");

    try {
        let results = [];

        req.body.forEach(async(item) => {
            if (item._id) {
                results.push(await Watchable.findByIdAndUpdate(item._id, item));
            } else {
                results.push(await Watchable.create(item));
            }
        });
    } catch (err) {
        next(ServerError.badRequest(err));
    }
};