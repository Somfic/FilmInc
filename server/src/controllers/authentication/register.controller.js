const ServerError = require("../../error/ServerError");
const logger = require("../../logging/logger");
const config = require("../../config/config");
const UserAccount = require("../../models/UserAccount");
const bcrypt = require("bcrypt");

module.exports = async(req, res, next) => {
    logger.trace("Controller: authentication.register");

    try {
        let userId = req.body.uid.toString();
        let code = req.body.code.toString();
        let name = req.body.name;

        bcrypt.hash(code, config.saltRounds, async(err, hash) => {
            if (err) {
                next(ServerError.internalError(err));
            } else {
                let account = { uid: userId, hash: hash, name: name };

                let result = await UserAccount.create(account);
                res.status(200).json(result);
            }
        });
    } catch (err) {
        next(ServerError.badRequest(err));
    }
};