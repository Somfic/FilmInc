const ServerError = require("../../error/ServerError");
const logger = require("../../logging/logger");
const config = require("../../config/config");
const UserAccount = require("../../models/UserAccount");
const bcrypt = require("bcrypt");

module.exports = async(req, res, next) => {
    logger.trace("Controller: useraccount.create");

    try {
        let userId = req.body.uid.toString();
        let code = req.body.code.toString();
        let name = req.body.name;

        bcrypt.hash(code, config.saltRounds, async(err, hash) => {
            if (err) {
                return next(ServerError.internalError(err));
            } else {
                let account = { uid: userId, hash: hash, name: name };

                await UserAccount.create(account, (err, result) => {
                    if (err) {
                        return next(ServerError.badRequest(err));
                    } else {
                        return res.status(200).json(result);
                    }
                });
            }
        });
    } catch (err) {
        return next(ServerError.badRequest(err));
    }
};