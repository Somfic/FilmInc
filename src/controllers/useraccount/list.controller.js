const ServerError = require("../../error/ServerError");
const logger = require("../../logging/logger");
const UserAccount = require("../../models/UserAccount");

module.exports = async(req, res, next) => {
    logger.trace("Controller: useraccount.list");

    try {
        let result = await UserAccount.find();
        return res.status(200).json(result);
    } catch (err) {
        return next(ServerError.badRequest(err));
    }
};