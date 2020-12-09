const ServerError = require("../../error/ServerError");
const logger = require("../../logging/logger");
const Watchable = require("../../models/Watchable");

module.exports = async(req, res, next) => {
    logger.trace("Controller: watchable.dupe");

    try {
        let id = req.params.id;
        let originalResult = await Watchable.findById(id);
        let original = originalResult._doc;
        delete original._id;
        let result = await Watchable.create(original);

        return res.status(200).json(result);
    } catch (err) {
        return next(ServerError.badRequest(err));
    }
};