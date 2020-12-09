const ServerError = require("../../error/ServerError");
const logger = require("../../logging/logger");
const UserAccount = require("../../models/UserAccount");

module.exports = async(req, res, next) => {
    logger.trace("Controller: useraccount.update");

    try {
        let id = req.params.id;
        let result = await UserAccount.findByIdAndUpdate(id, req.body);
        return res.status(200).json(result);
    } catch (err) {
        return next(ServerError.badRequest(err));
    }
};