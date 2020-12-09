const ServerError = require("../../error/ServerError");
const logger = require("../../logging/logger");
const UserAccount = require("../../models/UserAccount");

module.exports = async(req, res, next) => {
    logger.trace("Controller: useraccount.delete");

    try {
        let id = req.params.id;
        let result = await UserAccount.findByIdAndDelete(id);
        return res.status(200).json(result);
    } catch (err) {
        return next(ServerError.badRequest(err));
    }
};